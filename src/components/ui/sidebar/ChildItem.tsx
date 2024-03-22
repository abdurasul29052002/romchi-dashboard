import { IconType } from "react-icons";
import { ChildItemProps } from "@/app/types/props";
import Link from "next/link";



const ChildItem = ({ name, icon, open, visible, url }: ChildItemProps) => {

  return (
    <div className={`flex items-center space-x-3 text-gray-700 p-2 mx-10 my-2 rounded-md font-normal hover:bg-blue-400 ${open ? "bg-main_blue" : "bg-blue-600"} focus:shadow-outline`}>
      <Link href={url}>
        <span>{name}</span>
      </Link>
    </div>
  )
}

export default ChildItem;