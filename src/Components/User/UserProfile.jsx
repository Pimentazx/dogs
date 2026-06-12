import React from "react";
import { UseParams } from "react-router-dom";
import Feed from "../Feed/Feed";
import Head from "../Helpers/Head";

const UserProfile = () => {
    const [user] = UseParams();

  return (
    <section className="container mainSection">
        <Head title={user}/>
        <h1 className="title">{user}</h1>
        <Feed user={user} />
    </section>
  );
}

export default UserProfile;