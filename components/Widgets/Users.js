const Users = (props) => {
  const { user } = props;
  return (
    <div className="px-4 flex justify-between items-center hover:bg-gray-200 transition duration-200">
      <a href={"www.google.com"} className="w-full">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={user.picture.medium}></img>
          <div>
            <h4 className="truncate font-bold text-[14px] hover:underline">
              {user.login.username}
            </h4>
            <h6 className="truncate text-gray-500 text-[13px]">{`${user.name.first} ${user.name.last}`}</h6>
          </div>
        </div>
      </a>
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
            w-[30%]
            h-[30%]
            "
      >
        Follow
      </button>
    </div>
  );
};

export default Users;
