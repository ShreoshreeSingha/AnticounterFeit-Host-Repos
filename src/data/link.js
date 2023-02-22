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
    name: "Create new Batch",
    icon: <MdOutlineNoteAdd />,
  },
  {
    path: "/registerUser",
    name: "Add User",
    icon: <IoMdPersonAdd />,
  },
  {
    path: "/addRoute",
    name: "Add Route",
    icon: <TbRoute />,
  },
  {
    path: "/addLocation",
    name: "Add Location",
    icon: <MdAddLocation />,
  },
  {
    path: "/trackerForm",
    name: "Tracking",
    icon: <CgTrack />,
  },
  // {
  //   path: "/",
  //   name: "Order Details",
  //   icon: <BiDetail />,
  // },
]

export const adminRoutes = [
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

export const manufacturerRoutes = [
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
]

export const distributorRoutes = [
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
]

export const storageRoutes = [
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
]

export const retailerRoutes = [
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
]

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

export const routeLists = [
  {
      "Route ID": "7f900c9a-4655-4b01-84f5-d486d8ffb31e",
      "Checkpoints": "[Manufacturer, Storage, Distributor, Retailer]",
      "Total Distance (Kms)": 923,
      "Avg Time Taken (Hrs)": 95.1
  },
  {
      "Route ID": "c54799b4-4fdb-44bd-9da5-04e128944a02",
      "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
      "Total Distance (Kms)": 948,
      "Avg Time Taken (Hrs)": 476.8
  },
  {
      "Route ID": "ada3eb96-c259-4da6-8890-4ee698b6e302",
      "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
      "Total Distance (Kms)": 380,
      "Avg Time Taken (Hrs)": 76
  },
  {
      "Route ID": "d82f3f86-386f-4cb9-8c20-5c362c753534",
      "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
      "Total Distance (Kms)": 387,
      "Avg Time Taken (Hrs)": 565
  },
  {
      "Route ID": "f3700a12-e79f-4b01-921f-40e70a3cd5e1",
      "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
      "Total Distance (Kms)": 269,
      "Avg Time Taken (Hrs)": 357.7
  },
  {
      "Route ID": "cc18b69d-69b2-4898-a9ae-030d2c629d79",
      "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
      "Total Distance (Kms)": 501,
      "Avg Time Taken (Hrs)": 272.5
  },
  {
      "Route ID": "5aca0806-f0f9-49fe-90da-3e426c985abc",
      "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
      "Total Distance (Kms)": 810,
      "Avg Time Taken (Hrs)": 116.5
  },
  {
      "Route ID": "f0188126-e0a8-4d5b-91af-ba431a8d1642",
      "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
      "Total Distance (Kms)": 351,
      "Avg Time Taken (Hrs)": 304.3
  },
  {
      "Route ID": "c3f9f195-0509-437e-abfe-842296acf968",
      "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
      "Total Distance (Kms)": 503,
      "Avg Time Taken (Hrs)": 340.8
  },
  {
      "Route ID": "15770598-5a90-45ee-b8a3-0f88172ad476",
      "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
      "Total Distance (Kms)": 961,
      "Avg Time Taken (Hrs)": 342.9
  },
  {
      "Route ID": "d6ee5ea5-d99a-4685-877d-80ddaaf640e1",
      "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
      "Total Distance (Kms)": 921,
      "Avg Time Taken (Hrs)": 330.2
  },
  {
      "Route ID": "7ff0b0ae-d50c-4b24-bfd7-7a4eab3eadf7",
      "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
      "Total Distance (Kms)": 474,
      "Avg Time Taken (Hrs)": 162.6
  },
  {
      "Route ID": "74d2d52e-24d7-48ec-96f7-a460725ecbf9",
      "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
      "Total Distance (Kms)": 998,
      "Avg Time Taken (Hrs)": 55.5
  },
  {
      "Route ID": "ca23277d-8588-4fd8-aff4-88e6b6b76fe3",
      "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
      "Total Distance (Kms)": 325,
      "Avg Time Taken (Hrs)": 336.1
  },
  {
      "Route ID": "e1ce1b44-98b0-4fd4-ae42-61f8b219e1fa",
      "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
      "Total Distance (Kms)": 261,
      "Avg Time Taken (Hrs)": 33.8
  },
  {
      "Route ID": "af1208a1-bc16-45ab-92a8-7d4a09a12aec",
      "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
      "Total Distance (Kms)": 320,
      "Avg Time Taken (Hrs)": 148
  },
  {
      "Route ID": "6acb5b77-49fa-4d27-a133-6b40dba0e2e1",
      "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
      "Total Distance (Kms)": 424,
      "Avg Time Taken (Hrs)": 691.1
  },
  {
      "Route ID": "620d798c-4612-4b78-a944-af62de3bcb40",
      "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
      "Total Distance (Kms)": 358,
      "Avg Time Taken (Hrs)": 606.9
  },
  {
    "Route ID": "f3f909a2-42b4-4886-b0f2-d7ccf74d8e61",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 917,
    "Avg Time Taken (Hrs)": 684.6
},
{
    "Route ID": "f56172f2-a188-4b37-a95c-a1a286cadc0f",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 402,
    "Avg Time Taken (Hrs)": 159.7
},
{
    "Route ID": "87447fc7-a017-4e40-bde9-d45cb5a45d54",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 877,
    "Avg Time Taken (Hrs)": 201.4
},
{
    "Route ID": "f8c9c5bb-b879-458d-aa12-051e4a778e44",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 549,
    "Avg Time Taken (Hrs)": 166.3
},
{
    "Route ID": "dc3ddcf2-7896-423d-8b11-252c1ecaf1bf",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 407,
    "Avg Time Taken (Hrs)": 623.2
},
{
    "Route ID": "d3f03bcc-dc04-4923-b84f-df42c574c865",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 885,
    "Avg Time Taken (Hrs)": 717.1
},
{
    "Route ID": "a87d8ead-ae7b-42ff-ac90-029e387f576e",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 573,
    "Avg Time Taken (Hrs)": 414.8
},
{
    "Route ID": "4c6708ff-5572-4378-a457-132d44bd4bf6",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 310,
    "Avg Time Taken (Hrs)": 647.9
},
{
    "Route ID": "23208abd-efb3-4c29-8e6b-060c665033ec",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 355,
    "Avg Time Taken (Hrs)": 725.2
},
{
    "Route ID": "459f6e11-7be9-4271-86eb-ca8033213702",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 993,
    "Avg Time Taken (Hrs)": 536.3
},
{
    "Route ID": "d665fe67-5237-4d4d-9f47-2371b96312e8",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 615,
    "Avg Time Taken (Hrs)": 189.1
},
{
    "Route ID": "48d6caff-3d4b-46c5-a8d6-71fb3d9e777e",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 914,
    "Avg Time Taken (Hrs)": 358.5
},
{
    "Route ID": "ce953014-29c7-49a9-9169-5ff3fec27a33",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 926,
    "Avg Time Taken (Hrs)": 173.2
},
{
    "Route ID": "47578f93-7c63-4497-bc09-c6728efa81bf",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 447,
    "Avg Time Taken (Hrs)": 296.4
},
{
    "Route ID": "a9182f33-407c-4585-ad81-2659b6ed297a",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 791,
    "Avg Time Taken (Hrs)": 456.7
},
{
    "Route ID": "c3d57a5a-12d8-41e4-8d29-77c3bb654c27",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 329,
    "Avg Time Taken (Hrs)": 34.2
},
{
    "Route ID": "3c0fe989-5569-43ed-bf21-eb89d14d8991",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 639,
    "Avg Time Taken (Hrs)": 118.8
},
{
    "Route ID": "8bf21cbf-8914-48d7-8e2a-b40266549207",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 368,
    "Avg Time Taken (Hrs)": 481.3
},
{
    "Route ID": "05aa9972-1728-487b-986b-218dcaacc3aa",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 862,
    "Avg Time Taken (Hrs)": 341.9
},
{
    "Route ID": "419da9ad-3d5e-4237-82ae-23e885d3d989",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 794,
    "Avg Time Taken (Hrs)": 523.3
},
{
    "Route ID": "2ec416bd-2c9e-4989-8ffb-e42d4d4ad3ca",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 446,
    "Avg Time Taken (Hrs)": 642.1
},
{
    "Route ID": "46c1d9cf-30cf-4c13-829b-b64cb6feb1b2",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 546,
    "Avg Time Taken (Hrs)": 519
},
{
    "Route ID": "42ef1b15-8492-4f1d-878c-8cb096569c19",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 706,
    "Avg Time Taken (Hrs)": 240.5
},
{
    "Route ID": "5c42d4e8-7fd7-4212-811f-a31e9078e95c",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 742,
    "Avg Time Taken (Hrs)": 258.8
},
{
    "Route ID": "c4eb650e-0772-443f-a784-28fdd3593a05",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 640,
    "Avg Time Taken (Hrs)": 326.3
},
{
    "Route ID": "4c42d423-091c-475e-80be-47a10c00a0b0",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 374,
    "Avg Time Taken (Hrs)": 708.1
},
{
    "Route ID": "bd0e23bf-6a02-42ca-b3e8-e56572cc24f5",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 594,
    "Avg Time Taken (Hrs)": 595.8
},
{
    "Route ID": "a9b451a6-882e-492e-a5f9-947a83fa4081",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 591,
    "Avg Time Taken (Hrs)": 412.5
},
{
    "Route ID": "f9ff820a-a6bb-4747-b765-e81c49044345",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 960,
    "Avg Time Taken (Hrs)": 267.7
},
{
    "Route ID": "d56f2515-b8fb-4f92-9097-59e10edd9270",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 685,
    "Avg Time Taken (Hrs)": 658.6
},
{
    "Route ID": "ea9de3e0-3bd5-4fe5-90e5-7dee1498d71e",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 539,
    "Avg Time Taken (Hrs)": 381
},
{
    "Route ID": "0386e4c8-c661-49c0-9033-bf850a85dc07",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 788,
    "Avg Time Taken (Hrs)": 606
},
{
    "Route ID": "4dc62628-407d-4ae7-8885-bcc80fba3ae9",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 321,
    "Avg Time Taken (Hrs)": 727.7
},
{
    "Route ID": "6aeb445f-41ba-460c-99c5-6b2aec6b2b22",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 709,
    "Avg Time Taken (Hrs)": 363.2
},
{
    "Route ID": "25d6ca4a-13a4-4f47-8bcb-150f7ecda94f",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 476,
    "Avg Time Taken (Hrs)": 89.5
},
{
    "Route ID": "6b4b0f23-7ac3-449c-9002-4fe832dc78d0",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 748,
    "Avg Time Taken (Hrs)": 458.9
},
{
    "Route ID": "42a75226-c3af-4387-a403-b9a35ed12073",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 483,
    "Avg Time Taken (Hrs)": 363
},
{
    "Route ID": "7af14ee2-446f-45dd-81b5-40bbec8c428a",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 546,
    "Avg Time Taken (Hrs)": 402.1
},
{
    "Route ID": "8223d262-79be-4758-a24e-1b30bb5e722a",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 364,
    "Avg Time Taken (Hrs)": 579.1
},
{
    "Route ID": "b1f08671-abd2-4b15-876c-8543cf68d52e",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 428,
    "Avg Time Taken (Hrs)": 470.4
},
{
    "Route ID": "865fd217-100e-4502-88ec-e30649c66f48",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 305,
    "Avg Time Taken (Hrs)": 668.1
},
{
    "Route ID": "523ee187-5a97-47b8-93bd-e8edc05a80cd",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 766,
    "Avg Time Taken (Hrs)": 218
},
{
    "Route ID": "1bfd5cd6-9ea5-4bb7-bd1e-bb2f56d8ccad",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 661,
    "Avg Time Taken (Hrs)": 148.3
},
{
    "Route ID": "1ace5e39-670c-4fe1-853f-ae2e241ee411",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 676,
    "Avg Time Taken (Hrs)": 562.4
},
{
    "Route ID": "360e7f5d-b208-48cd-8b1f-ec323dddf471",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 427,
    "Avg Time Taken (Hrs)": 282.6
},
{
    "Route ID": "b581a2c4-9f3e-4f43-b8b0-ed6588b57fd2",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 976,
    "Avg Time Taken (Hrs)": 398.8
},
{
    "Route ID": "8d52c434-4cf1-47ed-9d97-10849092b5b5",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 450,
    "Avg Time Taken (Hrs)": 303.4
},
{
    "Route ID": "07a40f38-9ede-48d4-8962-3abff36d491f",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 851,
    "Avg Time Taken (Hrs)": 395.2
},
{
    "Route ID": "a7756ded-65fb-4e25-bf19-e8927a1c394b",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 576,
    "Avg Time Taken (Hrs)": 344.7
},
{
    "Route ID": "935c245a-9e1d-4f3f-aaad-3113dea72d43",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 572,
    "Avg Time Taken (Hrs)": 711.1
},
{
    "Route ID": "82256535-274d-4e2c-8425-5f17c0d6df71",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 589,
    "Avg Time Taken (Hrs)": 236.6
},
{
    "Route ID": "6e6307c8-0d30-416f-b31e-84016c48f240",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 799,
    "Avg Time Taken (Hrs)": 254.6
},
{
    "Route ID": "b1a4d269-1c32-4bf6-a9c3-cce4616925b9",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 634,
    "Avg Time Taken (Hrs)": 741.3
},
{
    "Route ID": "06e05c54-74c3-405e-a726-311000b173f0",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 747,
    "Avg Time Taken (Hrs)": 228.8
},
{
    "Route ID": "e41e2a6f-ca25-4bba-a3e3-eea4b9776fb2",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 724,
    "Avg Time Taken (Hrs)": 325.1
},
{
    "Route ID": "894d4a33-b392-4df5-b371-b2d0df8351e1",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 638,
    "Avg Time Taken (Hrs)": 611.2
},
{
    "Route ID": "94d0264d-52a8-44ec-a1f1-a1dcc869a40e",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 898,
    "Avg Time Taken (Hrs)": 24
},
{
    "Route ID": "998bbd7e-6d9e-4c09-9766-76ec4dd892c2",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 425,
    "Avg Time Taken (Hrs)": 389
},
{
    "Route ID": "ca4dc1b8-a369-48bd-a1dd-891d55d000a6",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 327,
    "Avg Time Taken (Hrs)": 662.4
},
{
    "Route ID": "8085c331-d70c-4020-8d0d-0bbcacee0f5f",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 371,
    "Avg Time Taken (Hrs)": 532.2
},
{
    "Route ID": "e273afe8-1254-4cb1-b6bc-335241c6706d",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 969,
    "Avg Time Taken (Hrs)": 325.5
},
{
    "Route ID": "32e9f1a8-fa4d-40d5-a46e-2b8c90ba021f",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 299,
    "Avg Time Taken (Hrs)": 202.6
},
{
    "Route ID": "00cc2c11-ce1a-4301-80de-8f1c3e969404",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 566,
    "Avg Time Taken (Hrs)": 700.4
},
{
    "Route ID": "21555895-00ce-4d15-aed0-3ddf64e5ee8e",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 984,
    "Avg Time Taken (Hrs)": 690.1
},
{
    "Route ID": "dd8da6e1-8ff4-4615-9c0e-8418e9954706",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 373,
    "Avg Time Taken (Hrs)": 530.8
},
{
    "Route ID": "c53a37ea-c156-4991-8657-1c749f110c16",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 589,
    "Avg Time Taken (Hrs)": 708.3
},
{
    "Route ID": "29ce0231-d6c8-4737-9fd4-b5d1b459dce8",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 597,
    "Avg Time Taken (Hrs)": 301.1
},
{
    "Route ID": "b8188aa4-7e1a-4deb-af13-daa52f91ecd8",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 825,
    "Avg Time Taken (Hrs)": 387.6
},
{
    "Route ID": "242c858e-e8d8-4219-8458-f942cccf9eff",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 562,
    "Avg Time Taken (Hrs)": 598.8
},
{
    "Route ID": "bf0ea3cf-c725-415b-b06a-ac623e5b32fb",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 501,
    "Avg Time Taken (Hrs)": 377.6
},
{
    "Route ID": "651d3fd2-cdb3-4d95-baf1-d754c4efdd2d",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 889,
    "Avg Time Taken (Hrs)": 169.2
},
{
    "Route ID": "9178ec0e-e98f-4f27-aa8d-4d6ba84cb5d7",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 992,
    "Avg Time Taken (Hrs)": 129
},
{
    "Route ID": "defa2e2e-651b-4cc6-8d85-bf60400b9f8a",
    "Checkpoints": "[Manufacturer-121, Storage-566, Distributor-51, Retailer-99]",
    "Total Distance (Kms)": 792,
    "Avg Time Taken (Hrs)": 548.8
},
{
    "Route ID": "668e04f8-2a0b-4d2a-809f-8639c557f5f2",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 463,
    "Avg Time Taken (Hrs)": 235.2
},
{
    "Route ID": "5c6ec3f0-4906-42f9-9afe-338fc6a1f308",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 252,
    "Avg Time Taken (Hrs)": 90.7
},
{
    "Route ID": "2b2f4433-9d79-41c6-ac31-54ec44ed6104",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 921,
    "Avg Time Taken (Hrs)": 60.5
},
{
    "Route ID": "219d2632-6c4b-4a70-9b9e-10dde183bd3b",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 495,
    "Avg Time Taken (Hrs)": 306.4
},
{
    "Route ID": "77d19e09-3567-4f36-af4f-a6c09e57b4f3",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 267,
    "Avg Time Taken (Hrs)": 286.8
},
{
    "Route ID": "14fc9033-137d-4435-9c69-aa639867574b",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 945,
    "Avg Time Taken (Hrs)": 124.6
},
{
    "Route ID": "bcb5a25c-2d03-4565-b482-619973dd61ca",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 437,
    "Avg Time Taken (Hrs)": 518.1
},
{
    "Route ID": "8888f1aa-0a89-4bbc-8b2e-17fe81202f0c",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 669,
    "Avg Time Taken (Hrs)": 140.1
},
{
    "Route ID": "3f45ac07-8d3f-4bdb-a021-c811268b05ce",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1001, Retailer-99]",
    "Total Distance (Kms)": 956,
    "Avg Time Taken (Hrs)": 532.9
},
{
    "Route ID": "2da0f27d-3b2f-41ee-ac90-60078631ee7b",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 857,
    "Avg Time Taken (Hrs)": 591.2
},
{
    "Route ID": "48eeb3e3-47a7-4d5a-b5ea-dc607666509c",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 647,
    "Avg Time Taken (Hrs)": 266.5
},
{
    "Route ID": "984c566a-d771-4053-8583-2c3e859f2394",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 335,
    "Avg Time Taken (Hrs)": 654.7
},
{
    "Route ID": "0f00ebc1-91cc-45f8-ada6-e946a9493c79",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 927,
    "Avg Time Taken (Hrs)": 476.9
},
{
    "Route ID": "7c2e11ef-f28a-482d-a7ef-4f59cd4c8aca",
    "Checkpoints": "[Manufacturer-11, Storage-666, Distributor-1561, Retailer-919]",
    "Total Distance (Kms)": 784,
    "Avg Time Taken (Hrs)": 406.2
},
{
    "Route ID": "e1281239-cf49-4530-8baa-22044615ced6",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 599,
    "Avg Time Taken (Hrs)": 635.6
},
{
    "Route ID": "0df880cc-62a9-4253-a881-24f4d3d02bb2",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 723,
    "Avg Time Taken (Hrs)": 425.2
},
{
    "Route ID": "15e34856-fa72-4f75-af51-e9533d365a53",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 995,
    "Avg Time Taken (Hrs)": 543.3
},
{
    "Route ID": "b5b51406-b4bb-4314-928c-9e0bf1a801e4",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 546,
    "Avg Time Taken (Hrs)": 665.4
},
{
    "Route ID": "63fce9a9-a319-4b37-b1f0-746f16f685a9",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 939,
    "Avg Time Taken (Hrs)": 349.6
},
{
    "Route ID": "05cdfc8d-a76c-45d7-8e2c-c347e4ce957c",
    "Checkpoints": "[Manufacturer-256, Storage-666, Distributor-141, Retailer-911]",
    "Total Distance (Kms)": 341,
    "Avg Time Taken (Hrs)": 280.8
},
{
    "Route ID": "b9ce0517-eb66-4cec-8e5c-4e05b9b336fc",
    "Checkpoints": "[Manufacturer-101, Storage-779, Distributor-1001, Retailer-199]",
    "Total Distance (Kms)": 755,
    "Avg Time Taken (Hrs)": 601.6
},
{
    "Route ID": "142db0b9-55ca-4c0e-a883-92ed5d4ce17e",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 512,
    "Avg Time Taken (Hrs)": 451.4
},
{
    "Route ID": "d7163b4e-90e5-4577-a4aa-57f7c1a1f0e9",
    "Checkpoints": "[Manufacturer-109, Storage-96, Distributor-15, Retailer-99]",
    "Total Distance (Kms)": 677,
    "Avg Time Taken (Hrs)": 349.7
},
]

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
