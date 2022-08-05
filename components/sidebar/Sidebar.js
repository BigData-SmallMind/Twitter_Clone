import Image from "next/image";
import SideBarMenuItem from "./SideBarMenuItem";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ViewListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed">
      {/* Logo */}
      <div className="flex items-center justify-center hoverEffect hover:bg-blue-100 p-2">
        <Image
          height="30"
          width="30"
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"
          alt="Twitter Logo"
          className=""
        />
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SideBarMenuItem text="Home" Icon={HomeIcon} active />
        <SideBarMenuItem text="Explore" Icon={HashtagIcon} />

        {session && (
          <>
            <SideBarMenuItem text="Notifications" Icon={BellIcon} />
            <SideBarMenuItem text="Messages" Icon={InboxIcon} />
            <SideBarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SideBarMenuItem text="Lists" Icon={ViewListIcon} />
            <SideBarMenuItem text="Profiles" Icon={UserIcon} />
            <SideBarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>

      {/* Button */}
      {session ? (
        <div className="">
          <button
            className="
            bg-blue-400
            text-white
              rounded-full
              w-56
              h-12
              font-bold
              shadow-md
              hover:brightness-95
              text-lg
              hidden
              xl:inline
              "
          >
            Tweet
          </button>
          <button
            onClick={signOut}
            className="
            text-blue-400
              rounded-full
              w-56
              h-12
              font-bold
              shadow-md
              hover:brightness-95
              text-lg
              hidden
              xl:block
              mt-5
              "
          >
            Sign out
          </button>
        </div>
      ) : (
        <button
          onClick={signIn}
          className="
          bg-blue-400
          text-white
            rounded-full
            w-56
            h-12
            font-bold
            shadow-md
            hover:brightness-95
            text-lg
            hidden
            xl:inline
            "
        >
          Sign in
        </button>
      )}

      {/* Mini profile */}
      {session && (
        <>
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start xl:mt-10 sm:w-full sm:mt-5">
            <Image
              src={session.user.image}
              alt="Mohamed fareed front end developer face"
              className="rounded-full mr-5"
              width="40"
              height="40"
            />
            <div className="pl-1 leading-5 hidden xl:inline">
              <h4 className="font-bold">{session.user.name}</h4>
              <p className="text-gray-500">@{session.user.username}</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 sm:ml-3 hidden xl:inline" />
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
