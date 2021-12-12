import React, { Component } from "react";
import HorizontalHeader from "../components/HorizontalHeader";
import VerticalHeader from "../components/VerticalHeader";
import DailyActivity from "../components/DailyActivity";
import Performances from "../components/Performances";
import HelloUser from "../components/HelloUser";
import SessionDuration from "../components/SessionDuration";
import Score from "../components/Score";
import InformationCards from "../components/InformationCards";
import ErrorPage from "./ErrorPage";
import fetchData from "../services/callApi";
import kcal_icon from "../assets/kcal_icon.png";
import proteine_icon from "../assets/proteine_icon.png";
import glucide_icon from "../assets/glucide_icon.png";
import lipide_icon from "../assets/lipide_icon.png";
import "../styles/Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userInformations: [],
      activities: [],
      averageSessions: [],
      performances: [],
    };
  }

  /*
   * Update the state of loading property
   * *
   */
  updateLoading() {
    this.setState({
      loading: true,
    });
  }

  componentDidMount() {
    /*
     * @type {number}
     * @const
     */
    const userId = this.props.match.params.id;

    fetchData(userId, "").then((data) => {
      /*
       * Update the state of userInformations property
       * *
       */
      this.setState({
        userInformations: data,
      });
    });

    fetchData(userId, "activity").then((data) => {
      /*
       * Update the state of activities property
       * *
       */
      this.setState({
        activities: data,
      });
    });

    fetchData(userId, "average-sessions").then((data) => {
      /*
       * Update the state of averageSessions property
       * *
       */
      this.setState({
        averageSessions: data,
      });
    });

    fetchData(userId, "performance").then((data) => {
      /*
       * Update the state of performances property
       * *
       */
      this.setState({
        performances: data,
      });
      this.updateLoading();
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <HorizontalHeader />
          <VerticalHeader />
          <section className="profile">
            <HelloUser
              firstname={this.state.userInformations.userInfos.firstName}
            />
            <section style={{display: "flex"}}>
              <article>
                <DailyActivity data={this.state.activities.sessions} />
                <article className="activities">
                  <SessionDuration data={this.state.averageSessions.sessions} />
                  <Performances data={this.state.performances.data} />
                  <Score data={this.state.userInformations} />
                </article>
              </article>
              <article style={{marginTop:"12px", marginLeft:"50px"}}>
                <InformationCards
                  icon={kcal_icon}
                  backgroundIcon={"#fcdbdb"}
                  count={this.state.userInformations.keyData.calorieCount}
                  unit="kcal"
                  fullUnit="Calories"
                />
                <InformationCards
                  icon={proteine_icon}
                  backgroundIcon={"#def0fc"}
                  count={this.state.userInformations.keyData.proteinCount}
                  unit="g"
                  fullUnit="Protéines"
                />
                <InformationCards
                  icon={glucide_icon}
                  backgroundIcon={"#fcf5db"}
                  count={this.state.userInformations.keyData.carbohydrateCount}
                  unit="g"
                  fullUnit="Glucides"
                />
                <InformationCards
                  icon={lipide_icon}
                  backgroundIcon={"#f7dee6"}
                  count={this.state.userInformations.keyData.lipidCount}
                  unit="g"
                  fullUnit="Lipides"
                />
              </article>
            </section>
          </section>
        </div>
      );
    } else {
      return <ErrorPage />;
    }
  }
}

export default Profile;
