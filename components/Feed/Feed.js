import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./Input";
import Posts from "./Posts";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Mohamed Farid",
      userName: "mohfareed",
      timeStamp: "2 days ago",
      userImage: "https://avatars.githubusercontent.com/u/54191647?v=4",
      image:
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      text: "The best deer to have ever walked the forests",
    },
    {
      id: "2",
      name: "Farid Nour",
      userName: "fnoor",
      timeStamp: "6 days ago",
      userImage: "https://avatars.githubusercontent.com/u/54191647?v=4",
      image: "https://storage.googleapis.com/pod_public/750/122741.jpg",
      text: "The Himalayas are home to 10000 people",
    },
  ];
  // const [posts, setPosts] = useState([]);
  // useEffect(
  //   () =>
  //     onSnapshot(
  //       query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //       (snapshot) => {
  //         setPosts(snapshot.docs);
  //       }
  //     ),
  //   []
  // );
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      <Posts posts={posts} />
    </div>
  );
};

export default Feed;
