import {
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef } from "react";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

const Input = () => {
  const { data: session } = useSession();
  const [postText, setPostText] = useState("");
  const imagePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handlePostText = (e) => {
    setPostText(e.target.value);
  };

  const sendPost = async () => {
    // if (loading) return;
    // setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      text: postText,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
      name: session.user.name,
      username: session.user.username,
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setPostText("");
    setSelectedFile(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <>
      {session && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
          <div>
            <Image
              src={session.user.image}
              className="hover:brightness-95 cursor-pointer h-10 w-10 rounded-full xl:mr-2"
              alt="user-image"
              height="40"
              width="40"
              onClick={signOut}
            />
          </div>
          <div className="w-full divide-y divide-gray-200">
            <textarea
              className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-800"
              rows="2"
              placeholder="What's on your mind?"
              onChange={handlePostText}
              value={postText}
            />
            {selectedFile && (
              <div className="relative">
                <XIcon
                  onClick={() => {
                    setSelectedFile(null);
                  }}
                  className="h-11 text-zinc-700 top-2 right-2 absolute cursor-pointer hoverEffect shadow-md shadow-white bg-gray-50"
                />
                <img src={selectedFile} alt="user-image" />
              </div>
            )}
            <div className="flex justify-between items-center pt-5">
              <div className="flex items-center">
                <div
                  onClick={() => {
                    imagePickerRef.current.click();
                  }}
                >
                  <PhotographIcon className="h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 hoverEffect" />
                  <input
                    hidden
                    ref={imagePickerRef}
                    type="file"
                    onChange={addImageToPost}
                  />
                </div>
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
                disabled:opacity-25
                "
                disabled={!postText.trim()}
                onClick={sendPost}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Input;
