import Image from "next/image";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
const Post = (props) => {
  const { post } = props;
  return (
    <div className="p-3 flex">
      {/* User Image */}
      <div className="pr-2">
        <Image
          src={post.userImage}
          className="hover:brightness-95 cursor-pointer h-10 w-10 rounded-full"
          alt="user-image"
          height="40"
          width="40"
        />
      </div>
      {/* Right Side */}
      {/* Top */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          {/* Name & @Name & timestamp */}
          <div className="flex space-x-2">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline hover:cursor-pointer">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px] hover:underline hover:cursor-pointer">
              @{post.userName}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline hover:cursor-pointer">
              {post.timeStamp}
            </span>
          </div>
          {/* DotIcon */}
          <DotsHorizontalIcon className="hoverEffect h-10 w-10 p-2" />
        </div>
        {/* Description Text*/}
        <span className="pt-5">{post.text}</span>
        <img src={post.image} className="w-full pr-10" alt={post.text} />
      </div>
    </div>
  );
};

export default Post;
