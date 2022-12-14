import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Moment from "react-moment";
import { signIn, useSession } from "next-auth/react";
import {
  setDoc,
  doc,
  onSnapshot,
  collection,
  deleteDoc,
} from "firebase/firestore";
import { db, storage } from "../../firebase";
import { useState, useEffect } from "react";
import { deleteObject, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import {
  modalState,
  postIdState,
  currentUserState,
} from "../../atom/modalAtom";

const Post = (props) => {
  const { post, id } = props;
  const { data: session } = useSession();
  const [postIsLiked, setPostLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [isOpen, setOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [comments, setComments] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCurrentUser(session?.user);
  }, [session?.user]);

  useEffect(() => {
    onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
      setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "comments"),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setPostLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (session) {
      if (postIsLiked) {
        await deleteDoc(doc(db, "posts", id, "likes", session?.user.uid));
      } else {
        await setDoc(doc(db, "posts", id, "likes", session?.user.uid), {
          username: session.user.username,
        });
      }
    } else {
      signIn();
    }

    setPostLiked(!postIsLiked);
  }

  async function deletePost() {
    if (window.confirm("Are you sure you want to delete this post?")) {
      if (post?.data().image) {
        await deleteObject(ref(storage, `posts/${id}/image`));
      }
      await deleteDoc(doc(db, "posts", id));
      router.push("/");
    }
  }

  const handleChat = () => {
    if (!session) {
      router.push("/auth/signin");
    } else {
      setOpen(!isOpen);
      setPostId(id);
    }
  };

  return (
    <div className="p-3 flex">
      {/* Left Side - User Image */}
      <div className="pr-2">
        <img
          src={post?.data().userImage}
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
              {post?.data().name}
            </h4>
            <span className="text-sm sm:text-[15px] hover:underline hover:cursor-pointer">
              @{post?.data().username}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline hover:cursor-pointer">
              <Moment fromNow>{post?.data().timeStamp?.toDate()}</Moment>
            </span>
          </div>
          {/* DotIcon */}
          <DotsHorizontalIcon className="hoverEffect h-10 w-10 p-2" />
        </div>
        {/* Post Description Text*/}
        <span className="pt-5">{post?.data().text}</span>
        {/* Post image */}
        <img
          onClick={() => {
            !router.asPath.includes(id) && router.push(`posts/${id}`);
          }}
          src={post?.data().image}
          className={`w-full rounded-xl ${
            !router.asPath.includes(id) && "cursor-pointer"
          }`}
          alt={post?.text}
        />
        {/* Post Icons */}{" "}
        <div className="flex justify-around mt-2 w-full">
          <div className="flex items-center justify-center relative">
            <ChatIcon
              onClick={handleChat}
              className="h-9 w-9  hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
            />
            {comments.length > 0 && (
              <span className="absolute left-10">{comments.length}</span>
            )}
          </div>
          <ChartBarIcon className="h-9 w-9  hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          {session?.user.uid === post?.data().id && (
            <TrashIcon
              onClick={deletePost}
              className="h-9 w-9  hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
            />
          )}

          <div className="flex items-center justify-center relative">
            <HeartIcon
              onClick={likePost}
              className={`h-9 w-9  hoverEffect p-2 hover:text-red-500 hover:bg-red-100  ${
                postIsLiked && session && " fill-red-700 text-red-700"
              }`}
            />
            {likes.length > 0 && (
              <span className="absolute left-10">{likes.length}</span>
            )}
          </div>
          <ShareIcon className="h-9 w-9  hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
};

export default Post;
