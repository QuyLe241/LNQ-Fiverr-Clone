import React from "react";
import { useRoutes } from "react-router-dom";
import UserTemplate from "../templates/UserTemplate/UserTemplate";
import { pathDefault } from "../common/path";
import RegisterPage from "../page/Register/RegisterPage";
import LoginPage from "../page/Login/LoginPage";
import AdminTemplate from "../templates/AdminTemplate/AdminTemplate";
import AdminLogin from "../page/AdminLogin/AdminLogin";
import CreateUser from "../page/CreateUser/CreateUser";
import { Suspense } from "react";
import { Skeleton } from "antd";
import Banner from "../components/Banner/Banner";
import Content from "../components/Content/Content";
import LookingToHire from "../components/LookingToHire/LookingToHire";
import ProSerVice from "../components/ProService/ProSerVice";
import DeTailsJobs from "../components/DetailJobs.jsx/DeTailsJobs";
import PageNotFound from "../page/PageNotFound/PageNotFound";
import LoadingSpin from "../components/Loading/LoadingSpin";

//    giảm lưu lượng file JS cần tải, khi người chưa cần vào trang quan trọng
//    lazy và suspense(cấu hình ở element)
//
const ManagerUser = React.lazy(() => import("../page/ManagerUser/ManagerUser"));
const ListJobsPage = React.lazy(() =>
  import("../page/InfoListJobPage/ListJobsPage")
);
const ListJobPage = React.lazy(() => import("../page/ListJobPage/ListJobPage"));
const Body = React.lazy(() => import("../components/Body/Body"));

const UseRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: pathDefault.homePage,
      element: <UserTemplate />,
      children: [
        {
          path: pathDefault.listJob,
          element: (
            <Suspense fallback={<LoadingSpin />}>
              {" "}
              <ListJobPage />
            </Suspense>
          ),
        },
        {
          path: pathDefault.listJobsPage,
          element: (
            <Suspense fallback={<LoadingSpin />}>
              {" "}
              <ListJobsPage />
            </Suspense>
          ),
        },
        {
          path: pathDefault.detail,
          element: <DeTailsJobs />,
        },
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingSpin />}>
              {" "}
              <Body />
            </Suspense>
          ),
        },
        {
          path: pathDefault.lookingToHire,
          element: <LookingToHire />,
        },
        {
          path: pathDefault.proService,
          element: <ProSerVice />,
        },
        {},
      ],
    },
    {
      path: pathDefault.register,
      element: <RegisterPage />,
    },
    {
      path: pathDefault.login,
      element: <LoginPage />,
    },
    {
      path: pathDefault.adminTemplate,
      element: <AdminTemplate />,
      children: [
        {
          // path: pathDefault.managerUser,
          //  fallback dừng người dùng khi page chưa tải xong
          index: true,
          element: (
            <Suspense fallback={<LoadingSpin />}>
              {" "}
              <ManagerUser />
            </Suspense>
          ),
        },
        {
          path: pathDefault.createUser,
          element: <CreateUser />,
        },
      ],
    },
    {
      path: pathDefault.adminLogin,
      element: <AdminLogin />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return routes;
};

export default UseRoutesCustom;
