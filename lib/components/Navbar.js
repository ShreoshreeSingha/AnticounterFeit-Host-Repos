import React, { useState, useEffect } from "react";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/image/avatar.jpg";
import Notification from "../components/Notification";
import UserProfile from "../components/UserProfile";
import { useStateContext } from "../contexts/ContextProvider";
const NavButton = ({
  title,
  customFunc,
  icon,
  color,
  dotColor
}) => /*#__PURE__*/React.createElement("div", {
  content: title,
  position: "BottomCenter"
}, /*#__PURE__*/React.createElement("button", {
  type: "button",
  onClick: () => customFunc(),
  style: {
    color
  },
  className: "relative text-xl rounded-full p-3 hover:bg-light-gray"
}, /*#__PURE__*/React.createElement("span", {
  style: {
    background: dotColor
  },
  className: "absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
}), icon));

// const handleHeaderFromMyComponent = ({ category, title }) => (
//   console.log(category, title)
// );

const Navbar = props => {
  const {
    title,
    category
  } = useStateContext();
  const [showProfile, setShowProfile] = useState(false);
  const {
    handleClick,
    isClicked
  } = useStateContext();
  const closeProfile = () => {
    setShowProfile(false);
  };
  const openProfile = () => {
    setShowProfile(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between w-full bg-navbar-bg rounded-lg "
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-md text-gray-400"
  }, category), /*#__PURE__*/React.createElement("p", {
    className: "text-lg font-extrabold tracking-tight text-[#0B2853]"
  }, title)), /*#__PURE__*/React.createElement("div", {
    className: "flex pr-2"
  }, /*#__PURE__*/React.createElement(NavButton, {
    title: "Notification",
    dotColor: "rgb(254, 201, 15)",
    customFunc: () => handleClick("notification"),
    color: "#2e86ab",
    icon: /*#__PURE__*/React.createElement(RiNotification3Line, null)
  }), /*#__PURE__*/React.createElement("div", {
    content: "Profile",
    position: "BottomCenter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
    //onClick={handleClick}
  }, /*#__PURE__*/React.createElement("img", {
    className: "rounded-full w-8 h-8",
    src: avatar,
    alt: "user-profile"
  }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600 text-14"
  }, "Hi,"), " ", /*#__PURE__*/React.createElement("span", {
    className: "text-stone-600 font-bold ml-1 text-14"
  }, "Michael")), /*#__PURE__*/React.createElement(MdKeyboardArrowDown, {
    className: "text-gray-400 text-14",
    onClick: openProfile
  }))), isClicked.notification && /*#__PURE__*/React.createElement(Notification, null), showProfile && /*#__PURE__*/React.createElement(UserProfile, {
    close: closeProfile
  })));
};
export default Navbar;