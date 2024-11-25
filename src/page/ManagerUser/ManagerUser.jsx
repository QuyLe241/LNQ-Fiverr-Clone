// import React, { useContext, useEffect } from "react";
// import { Space, Table, Tag } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { getValueUserApi } from "../../redux/nguoiDungSlice";
// import { nguoiDungService } from "../../services/nguoiDung.service";
// import { NotificationContext } from "../../App";

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//     tags: ["nice", "developer"],
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//     tags: ["loser"],
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//     tags: ["cool", "teacher"],
//   },
// ];
// const ManagerUser = () => {
//   //  notifycation
//   const { handleNotification } = useContext(NotificationContext);

//   //    column data
//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//       key: "id",
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Avatar",
//       dataIndex: "avatar",
//       key: "avatar",
//       render: (text) => {
//         //    text là thuộc tính chứa đường dẫn avatar
//         return <img src={text} className="h-[39px]" alt="" />;
//       },
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       render: (text) => {
//         return <Tag color={text ? "blue" : "cyan"}>{text ? "Nam" : "Nữ"}</Tag>;
//       },
//       key: "gender",
//     },
//     {
//       title: "ROLE",
//       dataIndex: "role",
//       key: "role",
//       render: (text) => {
//         return (
//           <Tag color={text ? "geekblue-inverse" : "lime-inverse"}>{text}</Tag>
//         );
//       },
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <Space size="middle">
//           {/* tạo thêm service ở folder Service -> file nguoiDungService */}
//           <button
//             className="bg-red-600 text-white py-2 px-5 rounded-lg hover:bg-red-500 duration-300"
//             onClick={() => {
//               nguoiDungService
//                 .deleteUser(record.id)
//                 .then((res) => {
//                   // console.log(res);
//                   handleNotification(res.data.message, "success");
//                   //    đồng bộ dữ liệu
//                   dispatch(getValueUserApi());
//                 })
//                 .catch((err) => {
//                   console.log(err);
//                   //    xóa thất bại khi tài khoản đã bị xóa hoặc ADMIN cấp cao
//                   handleNotification(
//                     err.response.data.message || err.response.data.content,
//                     "error"
//                   );
//                   dispatch(getValueUserApi());
//                 });
//             }}
//           >
//             Xóa
//           </button>
//           {/* <button className="bg-yellow-500 text-white py-2 px-5 rounded-lg hover:bg-yellow-500/80 duration-300">
//             Sửa
//           </button> */}
//         </Space>
//       ),
//     },
//   ];

//   //    bắn tín hiệu lên store để lấy api về khi trang web load xong
//   const dispatch = useDispatch();

//   // Goi đến nguoiDungSlice
//   //    các state đại diện cho các reducer và trỏ đến các reducer con
//   const { listUsers } = useSelector((state) => state.nguoiDungSlice);
//   useEffect(() => {
//     dispatch(getValueUserApi());
//   }, []);
//   return (
//     <div className="">
//       <div className="">
//         <h5
//           className="text-center"
//           style={{ fontWeight: 700, fontSize: "20px" }}
//         >
//           Xóa người dùng.
//         </h5>
//       </div>
//       <div className="flex justify-center my-2">
//         <div className="flex justify-center"></div>
//         <form action="" onSubmit={(e) => e.preventDefault()} className="w-4/5">
//           <div
//             style={{ border: "2px black solid" }}
//             className="flex rounded-xl items-center justify-between"
//           >
//             <input
//               type="text"
//               placeholder="Nhập tên người dùng"
//               className="py-2 w-4/5 px-2 focus:outline-none rounded-xl"
//               value={""}
//               onChange={""}
//             />
//             <div className="w-1/5">
//               <button
//                 type="submit"
//                 style={{ fontWeight: 600 }}
//                 className="w-full px-3 bg-black text-white py-2 rounded-lg h-full"
//               >
//                 Search
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//       <div className="">
//         <Table columns={columns} dataSource={listUsers} />
//       </div>
//     </div>
//   );
// };
// export default ManagerUser;


import React, { useContext, useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getValueUserApi } from "../../redux/nguoiDungSlice";
import { nguoiDungService } from "../../services/nguoiDung.service";
import { NotificationContext } from "../../App";

const ManagerUser = () => {
  // Notification
  const { handleNotification } = useContext(NotificationContext);

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Column data
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (text) => {
        return <img src={text} className="h-[39px]" alt="" />;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (text) => {
        return <Tag color={text ? "blue" : "cyan"}>{text ? "Nam" : "Nữ"}</Tag>;
      },
      key: "gender",
    },
    {
      title: "ROLE",
      dataIndex: "role",
      key: "role",
      render: (text) => {
        return (
          <Tag color={text ? "geekblue-inverse" : "lime-inverse"}>{text}</Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            className="bg-red-600 text-white py-2 px-5 rounded-lg hover:bg-red-500 duration-300"
            onClick={() => {
              nguoiDungService
                .deleteUser(record.id)
                .then((res) => {
                  handleNotification(res.data.message, "success");
                  dispatch(getValueUserApi());
                })
                .catch((err) => {
                  handleNotification(
                    err.response.data.message || err.response.data.content,
                    "error"
                  );
                  dispatch(getValueUserApi());
                });
            }}
          >
            Xóa
          </button>
        </Space>
      ),
    },
  ];

  // Dispatch to get user data
  const dispatch = useDispatch();
  const { listUsers } = useSelector((state) => state.nguoiDungSlice);

  useEffect(() => {
    dispatch(getValueUserApi());
  }, [dispatch]);

  // Filtered users based on search term
  const filteredUsers = listUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      <div className="">
        <h5 className="text-center" style={{ fontWeight: 700, fontSize: "20px" }}>
          Xóa người dùng.
        </h5>
      </div>
      <div className="flex justify-center my-2">
        <div className="flex justify-center"></div>
        <form action="" onSubmit={(e) => e.preventDefault()} className="w-4/5">
          <div
            style={{ border: "2px black solid" }}
            className="flex rounded-xl items-center justify-between"
          >
            <input
              type="text"
              placeholder="Nhập tên người dùng"
              className="py-2 w-4/5 px-2 focus:outline-none rounded-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="w-1/5">
              <button
                type="submit"
                style={{ fontWeight: 600 }}
                className="w-full px-3 bg-black text-white py-2 rounded-lg h-full"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="">
        <Table columns={columns} dataSource={filteredUsers} />
      </div>
    </div>
  );
};

export default ManagerUser;