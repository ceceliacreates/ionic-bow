import React, { useState } from "react";
import "./MainContainer.css";
import FindPage from "../pages/Find";
import MatchesPage from "../pages/Matches";
import { IonContent } from "@ionic/react";
import ProfilePage from "../pages/Profile";
import users from "../data/users.json";

interface ContainerProps {
  route: string;
}

const MainContainer: React.FC<ContainerProps> = ({ route }) => {
  const [likedMatches, setLikedMatches] = useState([] as any);
  const [availableMatches, setAvailableMatches] = useState(users);

  return (
    <IonContent>
      {route === "find" ? (
        <FindPage
          likedMatches={likedMatches}
          setLikedMatches={setLikedMatches}
          availableMatches={availableMatches}
          setAvailableMatches={setAvailableMatches}
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
