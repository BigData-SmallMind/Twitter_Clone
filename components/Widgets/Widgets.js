import { SearchIcon } from "@heroicons/react/outline";
import News from "./News";
import { useState } from "react";
import Users from "./Users";

const Widgets = (props) => {
  const { newsResults, usersResults } = props;
  const [articleNum, setArticleNum] = useState(4);
  const [usersNum, setUsersNum] = useState(4);

  const handleShowMoreNews = () => {
    setArticleNum((articleNum) => articleNum + 2);
  };
  const handleShowMoreUsers = () => {
    setUsersNum((usersNum) => usersNum + 2);
  };

  const articles = newsResults.articles.slice(0, articleNum).map((article) => {
    return <News key={article.title} article={article} />;
  });

  const users = usersResults.results.slice(0, usersNum).map((user) => {
    return <Users key={user.id} user={user} />;
  });

  return (
    <div className="xl:w-[700px] hidden lg:inline ml-8 space-y-5">
      {/* Search Field */}
      <div className="w-[90%] xl:w-full sticky top-0 bg-white py-1.5 z-50">
        <div className="flex items-center p-3 rounded-full  relative">
          <SearchIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-10 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      {/* News Widgets */}
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-full">
        <h4 className="font-bold text-xl px-4">What`s Happening</h4>
        {articles}
        <button
          onClick={handleShowMoreNews}
          className="text-blue-300 pl-4 pt-3 hover:text-blue-400 "
        >
          Show More
        </button>
      </div>

      {/* Users Mini Profiles */}
      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-full">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {users}
        <button
          onClick={handleShowMoreUsers}
          className="text-blue-300 pl-4 pt-3 hover:text-blue-400 "
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Widgets;
