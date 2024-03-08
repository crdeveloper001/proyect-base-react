import React, { useEffect } from "react";

export const Child1 = (props) => {
  const data = props;

  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div>
      <h1>THIS IS CHILD 1 </h1>
      <hr />
      <b>{props.title}</b>
    <p>{props.content}</p>
    </div>
  );
};
