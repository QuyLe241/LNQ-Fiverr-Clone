import React, { useEffect, useState } from "react";
import useResponsive from "../../hooks/UseResponsive";
import Banner from "../Banner/Banner";
import InputCustom from "../Input/InputCustom";
import IconSearch from "../../icon/IconSearch";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { congViecService } from "../../services/congViec.service";
import { data } from "autoprefixer";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import useDebounce from "../../hooks/UseDebounce";
import "./style.scss";
import CloseIcon from "./CloseIcon";

const FormSearchProduct = () => {
  const isResponsive = useResponsive({
    mobie: 576,
    tablet: 992,
  });

  //    check dropdown
  const [checkDropdown, setCheckDropdown] = useState(false);

  //    đề xuất hiển thị khi tìm kiếm
  const [listJobSuggest, setListJobSuggest] = useState([]);
  //    dropdown antd

  //   console.log(isResponsive);
  //   return isResponsive.mobie ? <Banner /> : <InputCustom />;

  //    Tạo chuyển hướng người dùng khi search
  const navigate = useNavigate();

  //    Sử dụng state để quản lý search
  const [valueSearch, setValueSearch] = useState("");

  const handleSubmit = (event) => {
    //    tránh trường hợp reload trang
    event.preventDefault();
    navigate(`${pathDefault.listJob}?tenCongViec=${valueSearch}`);
    // console.log(valueSearch);
    setCheckDropdown(false);
  };

  //  clear valueSearch
  const handleClearValueSearch = (event) => {
    // event.preventDefault();
    if (valueSearch) {
      setValueSearch("");
      setCheckDropdown(false);
    }
  };

  //    debounce set thời gian gọi Api
  const debounceValue = useDebounce(valueSearch, 1000);

  // useEffect xử lý để gọi Api và set thời gian gọi, xử lý dựa trên debounceValue
  useEffect(() => {
    //    Nếu valueSearch không rỗng thì useEffect thực hiện
    if (valueSearch) {
      //    Gọi API lấy dữ liệu sản phẩm để gợi ý người dùng
      congViecService
        .layCongViecTheoTen(valueSearch)
        .then((res) => {
          // console.log(res);
          //    tạo ra 1 biến và cắt 4 phần tử đầu tiên từ Api trả về. map để tạo ra product
          const newListJobSuggest = res.data.content
            .slice(0, 4)
            .map((item, index) => {
              return {
                //    khi dữ liệu được bắt thì trả về các phần tử có index và label
                key: index,
                label: (
                  <Link
                    to={`${pathDefault.detail}?detail=${item.id}`}
                    className="flex items-center space-x-4"
                  >
                    <img src={item.congViec.hinhAnh} className="h-14" alt="" />
                    <div className="">
                      <h4>{item.congViec.tenCongViec}</h4>
                      <p>{item.congViec.giaTien}</p>
                    </div>
                  </Link>
                ),
              };
            });
          setListJobSuggest(newListJobSuggest);

          //    mở dropdown khi api trả về kết quả
          setCheckDropdown(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [debounceValue]);

  const handleChange = (event) => {
    setValueSearch(event.target.value);
    //  xét điều kiện khi người dùng xóa hết tìm kiếm
    //  nếu event.target.value đúng = chuỗi rỗng
    if (!event.target.value) {
      setCheckDropdown(false);
    }
  };

  //          iconsets
  //      https://icon-sets.iconify.design/
  return (
    <div className="">
      <Dropdown
        menu={{
          items: listJobSuggest,
        }}
        open={checkDropdown}
      >
        <form className="form_search" action="" onSubmit={handleSubmit}>
          <div
            style={{ border: "3px solid" }}
            className="search ml-5 pl-4 rounded-md border border-gray-400 flex items-center justify-between w-[390px] "
          >
            <input
              type="text"
              onChange={handleChange}
              value={valueSearch}
              placeholder="Job search"
              className="flex-1 focus:border-none focus:outline-none"
            />
            <div className="flex justify-center items-center pr-1">
              <button
                type="button"
                style={{ visibility: valueSearch ? "visible" : "hidden" }}
                onClick={() => {
                  handleClearValueSearch();
                }}
              >
                <CloseIcon
                  width={"16px"}
                  height={"16px"}
                  fill={"rgb(128 131 135)"}
                />
              </button>
            </div>
            <button
              type="submit"
              className=""
              style={{
                border: "black 1px solid",
                padding: "6px",
                backgroundColor: "black",
              }}
            >
              <IconSearch size={30} color={"white"} />
            </button>
          </div>
        </form>
      </Dropdown>
    </div>
  );
};

export default FormSearchProduct;
