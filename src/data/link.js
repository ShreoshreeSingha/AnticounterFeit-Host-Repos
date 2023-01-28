import React from "react";
import {
  MdSpaceDashboard,
  MdOutlineLocationSearching,
  MdOutlineHistory,
} from "react-icons/md";
import {
  FaNetworkWired,
  FaUser,
  FaLock,
  FaMoneyBill,
  FaRoute,
} from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { TbFileDatabase } from "react-icons/tb";
import { BsBox } from "react-icons/bs";
import {
  MdOutlineAdminPanelSettings,
  MdOutlinePendingActions,
} from "react-icons/md";
import { VscTypeHierarchy, VscDatabase } from "react-icons/vsc";
import { HiArrowsRightLeft } from "react-icons/hi2";

import avatar from "./image/avatar.jpg";
import avatar2 from "./image/avatar2.jpg";
import avatar3 from "./image/avatar3.png";
import avatar4 from "./image/avatar4.jpg";

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
    path: "/admin",
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
