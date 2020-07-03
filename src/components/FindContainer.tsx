import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonCardContent,
  IonItem,
  IonButton,
} from "@ionic/react";
import LikeButtons from "./LikeButtons";
import MatchCard from "./MatchCard";

interface ContainerProps {
  LikeHandler: () => void;
  PassHandler: (match: {}) => void;
  currentMatch: {
    id: number;
    email: string;
    username: string;
    photo: string;
    description: string;
    traits: string[];
  };
}

const FindContainer: React.FC<ContainerProps> = ({
  LikeHandler,
  PassHandler,
  currentMatch,
}) => {
  return (
    <>
      <MatchCard match={currentMatch} />
      <LikeButtons
        LikeHandler={() => LikeHandler()}
        PassHandler={PassHandler}
        currentMatch={currentMatch}
      />
    </>
  );
};

export default FindContainer;
