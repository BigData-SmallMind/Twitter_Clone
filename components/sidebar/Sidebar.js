import Image from "next/image";
import React from "react";
import SideBarMenuItem from "./SideBarMenuItem";

import {
  HomeIcon,
  // HashtagIcon,
  // BellIcon,
  // InboxIcon,
  // BookmarkIcon,
  // ViewListIcon,
  // UserIcon,
} from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <>
      {/* Logo */}
      <div className="">
        <Image
          height="50"
          width="50"
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
          alt="Twitter Logo"
        />
      </div>

      {/* Menu */}
      <div className=" ">
        <SideBarMenuItem text="Home" Icon={HomeIcon} />
        {/* <SideBarMenuItem text="Explore" Icon={HashtagIcon} />
        <SideBarMenuItem text="Notifications" Icon={BellIcon} />
        <SideBarMenuItem text="Messages" Icon={InboxIcon} />
        <SideBarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SideBarMenuItem text="Lists" Icon={ViewListIcon} />
        <SideBarMenuItem text="Profiles" Icon={UserIcon} /> */}
      </div>
    </>
  );
};

export default Sidebar;
