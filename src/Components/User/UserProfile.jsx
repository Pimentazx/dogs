import React from "react";
import { UseParams } from "react-router-dom";
import Feed from "../Feed/Feed";

const UserProfile = () => {
    const [user] = UseParams();

  return (
    <section className="container mainSection">
        <h1 className="title">{user}</h1>
        <Feed user={user} />
    </section>
  );
}

export default UserProfile;