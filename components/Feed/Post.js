import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { HeartIconFilled } from "@heroicons/react/solid";
import Moment from "react-moment";
import { useSession } from "next-auth/react";
import {
  setDoc,
  doc,
  onSnapshot,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useState, useEffect } from "react";

const Post = (props) => {
  const { post } = props;
  const { data: session } = useSession();
  const [postIsLiked, setPostLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setPostLiked(
      likes.findIndex((like) => like.id === session.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (postIsLiked) {
      await deleteDoc(doc(db, "posts", post.id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", post.id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }

    setPostLiked(!postIsLiked);
  }

  return (
    <div className="p-3 flex">
      {/* Left Side - User Image */}
      <div className="pr-2">
        <img
          src={post.data().userImage}
          className="hover:brightness-95 cursor-pointer h-10 w-10 rounded-full"
          alt="user-image"
          height="40"
          width="40"
        />
      </div>

      {/* Right Side */}
      <div className="w-full">
        {/* Top */}
        <div className="flex items-center justify-between">
          {/* Name & @Name & timestamp */}
          <div className="flex space-x-2">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline hover:cursor-pointer">
              {post.data().name}
            </h4>
            <span className="text-sm sm:text-[15px] hover:underline hover:cursor-pointer">
              @{post.data().username}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline hover:cursor-pointer">
              <Moment fromNow>{post.data().timeStamp?.toDate()}</Moment>
            </span>
          </div>
          {/* DotIcon */}
          <DotsHorizontalIcon className="hoverEffect h-10 w-10 p-2" />
        </div>

        {/* Post Description Text*/}
        <span className="pt-5">{post.data().text}</span>

        {/* Post image */}

        <img
          src={post.data().image}
          className="w-full rounded-xl"
          alt={post.text}
        />

        {/* Post Icons */}
        <div className="flex justify-around mt-2 w-full">
          <ChartBarIcon className="h-9 w-9  hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9  hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <HeartIcon
            onClick={likePost}
            className={`h-9 w-9  hoverEffect p-2 hover:text-red-500 hover:bg-red-100 ${
              postIsLiked && " fill-red-700 text-red-700"
            }`}
          />
          <ShareIcon className="h-9 w-9  hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChatIcon className="h-9 w-9  hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
};

export default Post;
