import React, { useState } from "react";
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
} from "@ionic/react";
import MatchListContainer from "../components/MatchListContainer";
import MatchViewContainer from "../components/MatchViewContainer";

interface PageProps {
  likedMatches: any[];
}

const MatchesPage: React.FC<PageProps> = ({ likedMatches }) => {
  /// need to allow for null to be set initially as selectedMatch in typescript, in the meantime this is a stopgap
  const placeholderMatch = {
    id: 0,
    email: "email",
    username: "username",
    photo: "url",
    description: "description",
    traits: ["smart", "funny", "sarcastic"],
  };

  if (likedMatches.length === 0) {
    likedMatches[0] = placeholderMatch;
  }

  const [route, setRoute] = useState("list");
  const [selectedMatch, setSelectedMatch] = useState(likedMatches[0]);

  function SelectHandler(selectedMatch: {}) {
    console.log(selectedMatch);
    setSelectedMatch(selectedMatch);
    setRoute("match");
  }

  return (
    <IonContent class="ion-text-center">
      {route === "list" ? (
        <MatchListContainer
          likedMatches={likedMatches}
          SelectHandler={SelectHandler}
        />
      ) : route === "match" ? (
        <MatchViewContainer
          selectedMatch={selectedMatch}
          BackHandler={() => setRoute("list")}
        />
      ) : null}
    </IonContent>
  );
};

export default MatchesPage;
