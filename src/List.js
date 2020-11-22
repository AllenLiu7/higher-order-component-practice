import React from "react";

export default function List(props) {
  return (
    <div>
      {props.users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
      list
    </div>
  );
}
