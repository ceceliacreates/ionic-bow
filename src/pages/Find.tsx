import React, { useState } from "react";
import { IonContent } from "@ionic/react";
import LikeContainer from "../components/LikeContainer";
import FindContainer from "../components/FindContainer";

interface PageProps {
  setLikedMatches: ([]) => void;
  likedMatches: [];
  setAvailableMatches: ([]) => void;
  availableMatches: {
    id: number;
    email: string;
    username: string;
    photo: string;
    description: string;
    traits: string[];
  }[];
}

const FindPage: React.FC<PageProps> = ({
  setLikedMatches,
  likedMatches,
  setAvailableMatches,
  availableMatches,
}) => {
  const [route, setRoute] = useState("find");
  const [currentMatch, setcurrentMatch] = useState(availableMatches[0]);

  function LikeHandler() {
    setRoute("like");
  }

  function MatchHandler(currentMatch: {}) {
    setAvailableMatches(
      availableMatches.filter((match: {}) => match !== currentMatch)
    );
    setLikedMatches([...likedMatches, currentMatch]);
    setcurrentMatch(availableMatches[1]);
    setRoute("find");
  }

  function PassHandler(currentMatch: {}) {
    console.log(currentMatch);
    setAvailableMatches(
      availableMatches.filter((match: {}) => match !== currentMatch)
    );
    setcurrentMatch(availableMatches[1]);
  }

  return (
    <IonContent>
      {route === "find" ? (
        <FindContainer
          LikeHandler={() => LikeHandler()}
          currentMatch={currentMatch}
          PassHandler={PassHandler}
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
