import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { adminRoutes, manufacturerRoutes, distributorRoutes, retailerRoutes, storageRoutes } from "../data/link";
import { AuthContext } from "../contexts/auth-context";
import { useMediaQuery } from "@material-ui/core";
const Sidebar = () => {
  const {
    userRole
  } = useContext(AuthContext);
  var routes = "";
  if (userRole === "admin@gmail.com") {
    routes = adminRoutes;
  } else if (userRole === "manufacturer@gmail.com") {
    routes = manufacturerRoutes;
  } else if (userRole === "distributor@gmail.com") {
    routes = distributorRoutes;
  } else if (userRole === "storage@gmail.com") {
    routes = storageRoutes;
  } else {
    routes = retailerRoutes;
  }
  const activeLink = "grid items-center gap-1 p-2 rounded-lg text-black font-semibold text-md m-2 bg-active-bg";
  const normalLink = "grid items-center gap-1 p-2 rounded-lg text-md font-semibold text-white dark:text-gray-200 hover:text-[#7b8cb8] m-2";
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const [isModal, setIsModal] = useState(false);
  const openModal = () => {
    setIsModal(!isModal);
  };

  // const closeModal =()=>{
  //   setIsModal(false);
  // }

  return /*#__PURE__*/React.createElement(React.Fragment, null, !isSmallScreen && /*#__PURE__*/React.createElement("div", {
    className: "h-screen pb-10 pt-2 z-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/React.createElement(Link, null, /*#__PURE__*/React.createElement("img", {
    src: require("../data/image/logo-edited.png"),
    className: "h-12"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mt-0"
  }, /*#__PURE__*/React.createElement("div", {
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   justifyContent: "center",
    // }}  
    className: "grid justify-center"
  }, routes.map((route, index) => {
    if (route.subRoutes) {
      return /*#__PURE__*/React.createElement(SidebarMenu, {
        route: route
      });
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavLink, {
      to: route.path,
      key: index,
      className: ({
        isActive
      }) => isActive ? activeLink : normalLink
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "1.5rem",
        display: "flex",
        justifyContent: "center"
      }
    }, route.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        textTransform: "capitalize",
        display: "flex",
        justifyContent: "center",
        fontSize: "0.75rem",
        "@media only screen and (min-width:360px) and (max-width:500px)": {
          display: "none"
        }
      }
    }, route.name)));
    // if (route.subRoutes) {
    //   return <SidebarMenu route={route} />;
    // }
  })))), isSmallScreen && /*#__PURE__*/React.createElement("div", {
    className: "fixed bottom-0 left-0 right-0 z-50 bg-white pt-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center items-center py-2"
  }, /*#__PURE__*/React.createElement(Link, null, /*#__PURE__*/React.createElement("img", {
    src: require("../data/image/logo-edited.png"),
    className: "h-8",
    onClick: openModal
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center "
  }, isModal && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row"
  }, routes.map((route, index) => {
    if (route.subRoutes) {
      return /*#__PURE__*/React.createElement(SidebarMenu, {
        route: route
        // onDropDown={isModal}
      });
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavLink, {
      to: route.path,
      key: index,
      style: {
        fontSize: "2.5rem"
      }
    }, route.icon));
  })))));
};
export default Sidebar;