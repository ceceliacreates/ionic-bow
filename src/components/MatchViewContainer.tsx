import React from "react";
import MatchCard from "./MatchCard";
import { IonButton } from "@ionic/react";

interface ContainerProps {
  selectedMatch: {
    id: number;
    email: string;
    username: string;
    photo: string;
    description: string;
    traits: string[];
  };
  BackHandler: () => void;
}

const MatchViewContainer: React.FC<ContainerProps> = ({
  selectedMatch,
  BackHandler,
}) => {
  return (
    <>
      <MatchCard match={selectedMatch} />
      <IonButton
        data-cy="match-button"
        expand="full"
        onClick={() => BackHandler()}
      >
        BACK
      </IonButton>
    </>
  );
};

export default MatchViewContainer;
