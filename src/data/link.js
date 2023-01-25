import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaNetworkWired, FaUser, FaLock, FaMoneyBill } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowUpSFill } from "react-icons/ri";
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
    icon: <FaNetworkWired />,
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
        icon: <FaUser />,
      },
      {
        path: "/masterData/locations",
        name: "locations",
        icon: <FaLock />,
      },
      {
        path: "/masterData/routes",
        name: "routes",
        icon: <FaMoneyBill />,
      },
      {
        path: "/masterData/transaction",
        name: "transaction",
        icon: <FaMoneyBill />,
      },
      {
        path: "/masterData/bod",
        name: "bod",
        icon: <FaMoneyBill />,
      },
    ],
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


