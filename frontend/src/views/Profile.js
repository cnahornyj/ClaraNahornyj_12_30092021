import React, { Component } from "react";
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

  updateLoading() {
    this.setState({
      loading: true,
    });
  }

  componentDidMount() {
    // Gérer le cas de l'id != de 12 ou 18
    const userId = this.props.match.params.id;

    fetchData(userId, "").then((data) => {
      this.setState({
        userInformations: data,
      });
    });

    fetchData(userId, "activity").then((data) => {
      this.setState({
        activities: data,
      });
    });

    fetchData(userId, "average-sessions").then((data) => {
      this.setState({
        averageSessions: data,
      });
    });

    fetchData(userId, "performance").then((data) => {
      this.setState({
        performances: data,
      });
      this.updateLoading();
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <section className="profile">
          <HelloUser
            firstname={this.state.userInformations.userInfos.firstName}
          />
          <article>
            <DailyActivity data={this.state.activities.sessions}/>
            <article>
              <SessionDuration data={this.state.averageSessions.sessions}/>
              <Performances />
              <Score />
            </article>
          </article>
          <article>
            <InformationCards
              icon={kcal_icon}
              count={this.state.userInformations.keyData.calorieCount}
              unit="kcal"
              fullUnit="Calories"
            />
            <InformationCards
              icon={proteine_icon}
              count={this.state.userInformations.keyData.proteinCount}
              unit="g"
              fullUnit="Protéines"
            />
            <InformationCards
              icon={glucide_icon}
              count={this.state.userInformations.keyData.carbohydrateCount}
              unit="g"
              fullUnit="Glucides"
            />
            <InformationCards
              icon={lipide_icon}
              count={this.state.userInformations.keyData.lipidCount}
              unit="g"
              fullUnit="Lipides"
            />
          </article>
        </section>
      );
    } else {
      return <ErrorPage />;
    }
  }
}

export default Profile;
