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
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import {
  calendar,
  personCircle,
  map,
  informationCircle,
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
        <IonTabButton tab="profile" onClick={() => handleClick("profile")}>
          <IonIcon icon={personOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>

        <IonTabButton tab="find" onClick={() => handleClick("find")}>
          <IonIcon icon={heartOutline} />
          <IonLabel>Find</IonLabel>
        </IonTabButton>

        <IonTabButton tab="matches" onClick={() => handleClick("matches")}>
          <IonIcon icon={checkmarkDoneOutline} />
          <IonLabel>Matches</IonLabel>
          <IonBadge>6</IonBadge>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Home;
