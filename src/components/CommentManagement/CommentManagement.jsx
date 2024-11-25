// import React, { useContext, useEffect } from "react";
// import { Space, Table, Tag, Button, message, Popconfirm } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { commentManagement } from "../../services/comments.service";
// import { getListComments } from "../../redux/commentsSlice";
// import { NotificationContext } from "../../App";

// const CommentManagement = () => {
//   const { handleNotification } = useContext(NotificationContext);
//   const dispatch = useDispatch();
//   const { listComments } = useSelector((state) => state.commentsSlice);
//   const { user } = useSelector((state) => state.authSlice);
//   const tokenUser = user.token;
//   // console.log(tokenUser);
//   // console.log("list comments", listComments);

//   //  confim delete
//   const confirm = (id) => {
//     // console.log(e);
//     // message.success("Click on Yes");
//     handleDeleteComment(id);
//   };
//   const cancel = (e) => {
//     console.log(e);
//     message.error("Click on No");
//   };

//   //  lấy dữ liệu từ redux
//   useEffect(() => {
//     dispatch(getListComments());
//   }, []);

//   //  xử lý xóa comment
//   const handleDeleteComment = async (id) => {
//     try {
//       const result = await commentManagement.deleteComment(tokenUser, id);
//       // console.log(result);
//       handleNotification("Xóa bình luận thành công", "success");
//       dispatch(getListComments());
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const columns = [
//     {
//       title: "ID",
//       dataIndex: "id",
//       key: "id",
//       render: (text) => (
//         <p style={{ fontWeight: 600 }} className="text-blue-500">
//           {text}
//         </p>
//       ),
//     },
//     {
//       title: "Sao Bình Luận",
//       dataIndex: "saoBinhLuan",
//       key: "saoBinhLuan",
//     },
//     {
//       title: "Nội Dung",
//       dataIndex: "noiDung",
//       key: "noiDung",
//     },
//     {
//       title: "Ngày Bình Luận",
//       dataIndex: "ngayBinhLuan",
//       key: "ngayBinhLuan",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (_, record) => (
//         <Space size="middle">
//           {/* tạo thêm service ở folder Service -> file nguoiDungService */}
//           <div className="">
//             <Popconfirm
//               title="Delete the comment"
//               description="Are you sure to delete this comment?"
//               onConfirm={() => {
//                 confirm(record.id);
//               }}
//               onCancel={cancel}
//               okText="Yes"
//               cancelText="No"
//             >
//               <Button
//                 danger
//                 // onClick={() => {
//                 //   console.log(record, "reacord");
//                 // }}
//               >
//                 Delete
//               </Button>
//             </Popconfirm>
//           </div>
//         </Space>
//       ),
//     },
//   ];

//   // test data
//   const data = [
//     {
//       key: "1",
//       name: "John Brown",
//       age: 32,
//       address: "New York No. 1 Lake Park",
//       tags: ["nice", "developer"],
//     },
//   ];
//   return (
//     <div>
//       <div className="">
//         <h5
//           className="text-center pb-2"
//           style={{ fontWeight: 700, fontSize: "22px" }}
//         >
//           Xóa Bình Luận
//         </h5>
//       </div>
//       <div className="flex justify-center my-2">
//         <div className="flex justify-center"></div>
//         <form action="" onSubmit={""} className="w-4/5">
//           <div
//             style={{ border: "2px black solid" }}
//             className="flex rounded-xl items-center justify-between"
//           >
//             <input
//               type="text"
//               placeholder="Nhập nội dung comment"
//               className="py-2 w-4/5 px-2 focus:outline-none rounded-xl"
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
//         <Table columns={columns} dataSource={listComments} />
//       </div>
//     </div>
//   );
// };

// export default CommentManagement;

import React, { useContext, useEffect, useState } from "react";
import { Space, Table, Tag, Button, message, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { commentManagement } from "../../services/comments.service";
import { getListComments } from "../../redux/commentsSlice";
import { NotificationContext } from "../../App";

const CommentManagement = () => {
  const { handleNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();
  const { listComments } = useSelector((state) => state.commentsSlice);
  const { user } = useSelector((state) => state.authSlice);
  const tokenUser = user.token;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredComments, setFilteredComments] = useState([]);

  useEffect(() => {
    dispatch(getListComments());
  }, [dispatch]);

  useEffect(() => {
    setFilteredComments(
      listComments.filter((comment) =>
        comment.noiDung.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, listComments]);

  const handleDeleteComment = async (id) => {
    try {
      const result = await commentManagement.deleteComment(tokenUser, id);
      handleNotification("Xóa bình luận thành công", "success");
      dispatch(getListComments());
    } catch (error) {
      console.log(error);
    }
  };

  const confirm = (id) => {
    handleDeleteComment(id);
  };

  const cancel = (e) => {
    message.error("Click on No");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => (
        <p style={{ fontWeight: 600 }} className="text-blue-500">
          {text}
        </p>
      ),
    },
    {
      title: "Sao Bình Luận",
      dataIndex: "saoBinhLuan",
      key: "saoBinhLuan",
    },
    {
      title: "Nội Dung",
      dataIndex: "noiDung",
      key: "noiDung",
    },
    {
      title: "Ngày Bình Luận",
      dataIndex: "ngayBinhLuan",
      key: "ngayBinhLuan",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div className="">
            <Popconfirm
              title="Delete the comment"
              description="Are you sure to delete this comment?"
              onConfirm={() => {
                confirm(record.id);
              }}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </div>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="">
        <h5
          className="text-center pb-2"
          style={{ fontWeight: 700, fontSize: "22px" }}
        >
          Xóa Bình Luận
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
              placeholder="Nhập nội dung comment"
              className="py-2 w-4/5 px-2 focus:outline-none rounded-xl"
              value={searchTerm}
              onChange={handleSearch}
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
        <Table columns={columns} dataSource={filteredComments} />
      </div>
    </div>
  );
};

export default CommentManagement;
