import React from "react";
import Links from "./links";


function About(user) {
      
  return (
    <div id="about">
      <h2>About Me</h2>
     {user.bio && <p>{user.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {user.github} linkedin ={user.linkedin}/>
    </div>
  );
}

export default About;


