import React, { useState } from "react";
import "./MainContainer.css";
import FindPage from "../pages/Find";
import MatchesPage from "../pages/Matches";
import { IonContent } from "@ionic/react";
import ProfilePage from "../pages/Profile";

interface ContainerProps {
  route: string;
}

const MainContainer: React.FC<ContainerProps> = ({ route }) => {
  const [likedMatches, setLikedMatches] = useState([] as any);

  return (
    <IonContent>
      {route === "find" ? (
        <FindPage
          likedMatches={likedMatches}
          setLikedMatches={setLikedMatches}
        />
      ) : route === "profile" ? (
        <ProfilePage />
      ) : route === "matches" ? (
        <MatchesPage likedMatches={likedMatches} />
      ) : (
        <h2>Invalid Route</h2>
      )}
    </IonContent>
  );
};

export default MainContainer;
