import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";

const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://avatars.githubusercontent.com/u/54191647?v=4"
        className="hover:brightness-95 cursor-pointer rounded-full h-10 w-10 xl:mr-2"
        alt="user-image"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-800"
            rows="2"
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <div className="flex justify-between items-center pt-5">
          <div className="flex items-center">
            <PhotographIcon className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 hoverEffect" />
            <EmojiHappyIcon className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 hoverEffect" />
          </div>
          <button
            className="  
            bg-blue-400
            text-white
            rounded-full
            font-bold
            shadow-md
            hover:brightness-95
            px-4
            py-1.5
            "
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
