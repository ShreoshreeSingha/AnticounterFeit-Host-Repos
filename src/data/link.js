import React from "react";
import {
  MdSpaceDashboard,
  MdOutlineLocationSearching,
  MdOutlineHistory,
  MdAddLocation,
  MdOutlineNoteAdd,
} from "react-icons/md";
import {
  FaRoute,
} from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { BsBox } from "react-icons/bs";
import { IoMdPersonAdd } from "react-icons/io";
import { TbRoute } from "react-icons/tb";
import { CgTrack } from "react-icons/cg";
import { BiDetail } from "react-icons/bi"
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePendingActions,
} from "react-icons/md";
import { VscTypeHierarchy } from "react-icons/vsc";
import CreateBatchForm from "../components/forms/CreateBatchForm";
import Tracker from "../Screens/Tracker";
import CreateBatch from "../pages/CreateBatch";
import RegisterUser from "../pages/RegisterUser";
import AddRoute from "../pages/AddRoute";


import avatar from "./image/avatar.jpg";
import avatar2 from "./image/avatar2.jpg";
import avatar3 from "./image/avatar3.png";
import avatar4 from "./image/avatar4.jpg";

export const quickLinks = [
  {
    path: "/createBatch",
    element: <CreateBatch />,
    name: "Create new Batch",
    icon: <MdOutlineNoteAdd />,
  },
  {
    path: "/registerUser",
    element: <RegisterUser />,
    name: "Add User",
    icon: <IoMdPersonAdd />,
  },
  {
    path: "/addRoute",
    element: <AddRoute/>,
    name: "Add Route",
    icon: <TbRoute />,
  },
  {
    path: "/",
    element: "Add Location",
    name: "Add Location",
    icon: <MdAddLocation />,
  },
  {
    path: "/",
    element: <Tracker />,
    name: "Tracking",
    icon: <CgTrack />,
  },
  // {
  //   path: "/",
  //   name: "Order Details",
  //   icon: <BiDetail />,
  // },
]

export const routes = [
  {
    path: "/",
    name: "dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    path: "/network",
    name: "network",
    icon: <VscTypeHierarchy />,
  },
  {
    path: "/masterData",
    name: "masterData",
    icon: <FiDatabase />,
    exact: true,
    subRoutes: [
      {
        path: "/masterData/products",
        name: "products ",
        icon: <BsBox />,
      },
      {
        path: "/masterData/locations",
        name: "locations",
        icon: <MdOutlineLocationSearching />,
      },
      {
        path: "/masterData/routes",
        name: "routes",
        icon: <FaRoute />,
      },
      {
        path: "/masterData/bod",
        name: "BOD",
        icon: <MdOutlinePendingActions />,
      },
    ],
  },
  {
    path: "/transaction",
    name: "transactions",
    icon: <MdOutlineHistory />,
  },
  {
    path: "/adminActivity",
    name: "admin",
    icon: <MdOutlineAdminPanelSettings />,
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

// const customerGridImage = (props) => (
//   <div className="image flex gap-4">
//     <img
//       className="rounded-full w-10 h-10"
//       src={props.CustomerImage}
//       alt="employee"
//     />
//     <div>
//       <p>{props.CustomerName}</p>
//       <p>{props.CustomerEmail}</p>
//     </div>
//   </div>
// );

// const customerGridStatus = (props) => (
//   <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
//     <p
//       style={{ background: props.StatusBg }}
//       className="rounded-full h-3 w-3"
//     />
//     <p>{props.Status}</p>
//   </div>
// );
