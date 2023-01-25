import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import { routes } from "../data/link";

const SideBar = () => {
  const activeLink =
    "grid items-center gap-1 pl-3 pr-3 pt-3 pb-2.5 rounded-lg text-black font-semibold text-md m-2 bg-active-bg";
  const normalLink =
    "grid items-center gap-1 pl-3 pr-3 pt-3 pb-2.5 rounded-lg text-md font-semibold text-white dark:text-gray-200 hover:text-[#2e86ab] m-2";

  return (
    <>
      <div className="h-screen md:overflow-hidden overflow-hidden md:hover:overflow-auto pb-10 pt-2 z-50">
        <div className="flex justify-center items-center">
          <Link>
            <img
              src={require("../data/image/logo-edited.png")}
              className="h-12"
            />
          </Link>
        </div>

        <div className="mt-0">
          <div className="grid justify-center">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return <SidebarMenu route={route} />;
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
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
                    {route.icon}
                  </div>
                  <div className="capitalize flex justify-center text-xs">
                    {route.name}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
