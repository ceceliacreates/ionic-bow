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

interface ContainerProps {
  LikeHandler: () => void;
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
  currentMatch,
}) => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>5 miles away</IonCardSubtitle>
          <IonCardTitle>{currentMatch.username}</IonCardTitle>
        </IonCardHeader>
        <IonImg src={currentMatch.photo} />
        <IonCardContent>{currentMatch.description}</IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>People find me:</IonCardSubtitle>
        </IonCardHeader>
        <IonItem>
          {currentMatch.traits.map((trait: string) => (
            <IonButton fill="outline">{trait}</IonButton>
          ))}
        </IonItem>
      </IonCard>
      <LikeButtons LikeHandler={() => LikeHandler()} />
    </>
  );
};

export default FindContainer;
