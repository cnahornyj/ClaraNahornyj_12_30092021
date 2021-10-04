import React, { Component } from "react";
import DailyActivity from "../components/DailyActivity";
import Performances from "../components/Performances";
import HelloUser from "../components/HelloUser";
import SessionDuration from "../components/SessionDuration";
import Score from "../components/Score";
import InformationCards from "../components/InformationCards";

class Profile extends Component {

  // Les données devront être récupérées ici ?

  render() {
    return (
      <section className="profile">
        <HelloUser firstname="Thomas" />
        <DailyActivity/>
        <SessionDuration/>
        <Performances />
        <Score/>
        <InformationCards/>
      </section>
    );
  }
}


export default Profile;
