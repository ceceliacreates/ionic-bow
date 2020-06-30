import React, { useState } from "react";
import "./ExploreContainer.css";
import FindPage from "../pages/Find";
import MatchesPage from "../pages/Matches";
import { IonContent } from "@ionic/react";
import ProfilePage from "../pages/Profile";

interface ContainerProps {
  route: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ route }) => {
  return (
    <>
      <IonContent>
        {route === "find" ? (
          <FindPage />
        ) : route === "profile" ? (
          <ProfilePage />
        ) : route === "matches" ? (
          <MatchesPage />
        ) : (
          <h2>Invalid Route</h2>
        )}
      </IonContent>
    </>
  );
};

export default ExploreContainer;
