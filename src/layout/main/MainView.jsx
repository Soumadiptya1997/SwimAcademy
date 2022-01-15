import React from "react";

const MainView = (props) => {
  const { children } = props;

  return (
    <main>
      <h1>mainView</h1>
      {children}
    </main>
  );
};

export default MainView;
