import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";
import { ParentItemProps } from "@/app/types/props";
import ChildItem from "@/components/ui/sidebar/ChildItem";
import { RiHome2Fill } from "react-icons/ri";

const ParentItem = ({ name, url, childItems, icon: Icon, open }: ParentItemProps) => {
  return (
    <div className={`rounded-xl ${open && "bg-white"}`}>
      <Link href={url} prefetch={true}
            className={`flex items-center space-x-3 text-gray-700 p-2 m-0.5 mb-2 rounded-md font-medium hover:bg-blue-400 ${open ? "bg-main_blue_dark" : "bg-blue-600"} text-white focus:shadow-outline`}>
                    <span className="text-gray-600">
                        <Icon />
                    </span>
        <span>{name}</span>
      </Link>
      {open && (
        childItems.map(childItem => (
          <div>
            {/*<ChildItem visible={false} name={childItem} url={"#"} icon={RiHome2Fill} open={false} />*/}
          </div>
        ))
      )}
    </div>

  )
}

export default ParentItem;