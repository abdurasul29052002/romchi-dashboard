"use client"
import React, { useState } from "react";
import ParentItem from "@/components/ui/sidebar/ParentItem";
import { RiDashboard3Line, RiHome2Fill, RiUser3Line } from "react-icons/ri";
import { ChildItemProps } from "@/app/types/props";
//Icon

const Sidebar = () => {
  const [itemOpen, setItemOpen] = useState(new Map<string, boolean>)

  return (
      <div className="flex flex-wrap bg-gradient-to-r from-blue-950 to-blue-900 w-full h-screen">
        <div className="w-3/12 rounded p-3 shadow-lg bg-gradient-to-r from-blue-950 to-blue-900">
          <div className="flex items-center space-x-4 p-2 mb-5">
            <img className="h-12 rounded-full"
                 src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="James Bhatta" />
            <div>
              <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">James
                Bhatta</h4>
              <span className="text-sm tracking-wide flex items-center space-x-1">
                    <svg className="h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
              <span className="text-gray-600">Verified</span>
                </span>
            </div>
          </div>
          {/*<div className="space-y-2 text-sm">*/}
          {/*  <ParentItem*/}
          {/*    name={"Home"}*/}
          {/*    url={"/home"}*/}
          {/*    childItems={["hello1", "hello2"]}*/}
          {/*    icon={RiHome2Fill}*/}
          {/*    open={true} />*/}
          {/*</div>*/}
          <div className="space-y-2 text-sm">
            <ParentItem
              name={"Dashboard"}
              url={"/login"}
              childItems={[
                // new ChildItemProps("User", RiUser3Line, true, true)
              ]}
              icon={RiDashboard3Line}
              open={false} />
          </div>
          {/*<div className="space-y-2 text-sm">*/}
          {/*  <ParentItem*/}
          {/*    name={"Users"}*/}
          {/*    url={"/users"}*/}
          {/*    childItems={["hello", "hello"]}*/}
          {/*    icon={RiUser3Line}*/}
          {/*    open={false} />*/}
          {/*</div>*/}
        </div>
      </div>
  );
};

export default Sidebar;
