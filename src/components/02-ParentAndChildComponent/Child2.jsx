import React from "react";

export const Child2 = (props) => {
  return (
    <div>
      <h1>THIS IS CHILD 1 </h1>
      <hr />
      <b>{props.title}</b>
      <p>{props.content}</p>
    </div>
  );
};
