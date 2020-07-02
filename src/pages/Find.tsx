import React, { useState } from "react";
import { IonContent } from "@ionic/react";
import LikeContainer from "../components/LikeContainer";
import FindContainer from "../components/FindContainer";
import users from "../data/users.json";

interface PageProps {
  setLikedMatches: ([]) => void,
  likedMatches: [],
}

const FindPage: React.FC<PageProps> = ({setLikedMatches, likedMatches}) => {
  const [route, setRoute] = useState("find");
  const [availableMatches, setAvailableMatches] = useState(users);
  const [currentMatch, setcurrentMatch] = useState(availableMatches[0]);
  

  function MatchHandler(currentMatch: {}) {
    setAvailableMatches(
      availableMatches.filter((match: {}) => match !== currentMatch)
    );
    setLikedMatches([...likedMatches, currentMatch]);
    setcurrentMatch(availableMatches[1]);
    setRoute("find");
  }

  return (
    <IonContent>
      {route === "find" ? (
        <FindContainer
          LikeHandler={() => setRoute("like")}
          currentMatch={currentMatch}
        />
      ) : (
        <LikeContainer
          MatchHandler={() => MatchHandler(currentMatch)}
          currentMatch={currentMatch}
        />
      )}
    </IonContent>
  );
};

export default FindPage;
