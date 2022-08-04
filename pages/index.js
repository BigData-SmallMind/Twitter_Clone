import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Widgets from "../components/Widgets/Widgets";
import Modal from "../components/Modal";

export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
  ).then((res) => res.json());

  const usersResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture,gender,id"
  ).then((res) => res.json());

  return {
    props: {
      newsResults: newsResults,
      usersResults: usersResults,
    },
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets
          newsResults={props.newsResults}
          usersResults={props.usersResults}
        />

        {/* Modal */}
        <Modal />
      </main>
    </>
  );
}
