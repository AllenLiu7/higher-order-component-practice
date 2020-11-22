import React from "react";

export default function HOC(Component) {
  return function withData({ isLoading, users }) {
    if (!isLoading) {
      return <Component users={users} />;
    }
    return <div>Loading...</div>;
  };
}
