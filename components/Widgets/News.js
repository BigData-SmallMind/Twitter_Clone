import Image from "next/image";

const News = (props) => {
  const { article } = props;
  return (
    <a href={article.url} className="flex-col hover:bg-gray-200">
      <div className="flex items-center hover:bg-gray-200 px-4 py-2 space-x-1 transition duration-200">
        <div>
          <h6>{article.title}</h6>
          <p className="text-gray-400">{article.source.name}</p>
        </div>
        <img
          src={article.urlToImage}
          className="rounded-lg"
          height="70"
          width="70"
          alt={article.title}
        />
      </div>
    </a>
  );
};

export default News;
