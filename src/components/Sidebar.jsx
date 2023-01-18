import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/link";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const activeLink =
    "grid items-center gap-1 pl-3 pr-3 pt-3 pb-2.5 rounded-lg text-black text-md m-2 bg-active-bg";
  const normalLink =
    "grid items-center gap-1 pl-3 pr-3 pt-3 pb-2.5 rounded-lg text-md text-white dark:text-gray-200 hover:text-black hover:bg-hover-bg m-2";

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-center items-center">
            <Link
              to="/"
              onClick={"/dashboard"}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <icon>
                <img
                  src={require("../data/image/logo-edited.png")}
                  className="h-12"
                />
              </icon>
            </Link>
          </div>
          <div className="mt-0 ">
            {links.map((item) => (
              <div key={item.title} className="grid justify-center">
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <div
                      style={{
                        fontSize: "1.5rem",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {link.icon}
                    </div>
                    <div className="capitalize flex justify-center text-xs">
                      {link.name}
                    </div>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
