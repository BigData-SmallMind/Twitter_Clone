import React from "react";

const SideBarMenuItem = (props) => {
  const { text, Icon } = props;
  return (
    <>
      <Icon className="h-7" />
      <span>{text}</span>
    </>
  );
};

export default SideBarMenuItem;
