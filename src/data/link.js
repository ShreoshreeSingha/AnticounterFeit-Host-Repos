import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export const links = [
  {
    links: [
      {
        name: "dashboard",
        icon: <MdSpaceDashboard />,
      },
      {
        name: "network",
        icon: <FaNetworkWired />,
      },
      {
        name: "masterData",
        icon: <FiDatabase />,
      },
      {
        name: "admin",
        icon: <MdOutlineAdminPanelSettings />,
      },
    ],
  },
];
