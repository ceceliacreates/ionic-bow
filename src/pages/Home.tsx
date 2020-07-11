import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import React, { useState } from "react";
import ExploreContainer from "../components/MainContainer";
import "./Home.css";
import {
  personOutline,
  checkmarkDoneOutline,
  heartOutline,
} from "ionicons/icons";

const Home: React.FC = () => {
  const [route, setRoute] = useState("find");

  function handleClick(route: any) {
    setRoute(route);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">🏹 BOW 🌈</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" class="ion-text-center">
              🏹 BOW 🌈
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer route={route} />
      </IonContent>
      <IonTabBar slot="bottom">
        <IonTabButton
          tab="profile"
          data-cy="profile-tab"
          onClick={() => handleClick("profile")}
        >
          <IonIcon icon={personOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>

        <IonTabButton
          tab="find"
          data-cy="find-tab"
          onClick={() => handleClick("find")}
        >
          <IonIcon icon={heartOutline} />
          <IonLabel>Find</IonLabel>
        </IonTabButton>

        <IonTabButton
          tab="matches"
          data-cy="matches-tab"
          onClick={() => handleClick("matches")}
        >
          <IonIcon icon={checkmarkDoneOutline} />
          <IonLabel>Matches</IonLabel>
          <IonBadge>6</IonBadge>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Home;
