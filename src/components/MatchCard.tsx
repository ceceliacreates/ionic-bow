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

interface CardProps {
  match: {
    id: number;
    email: string;
    username: string;
    photo: string;
    description: string;
    traits: string[];
  };
}

const MatchCard: React.FC<CardProps> = ({ match }) => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>5 miles away</IonCardSubtitle>
          <IonCardTitle data-cy="match-username">{match.username}</IonCardTitle>
        </IonCardHeader>
        <IonImg src={match.photo} />
        <IonCardContent>{match.description}</IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>People find me:</IonCardSubtitle>
        </IonCardHeader>
        <IonItem>
          {match.traits.map((trait: string) => (
            <IonButton fill="outline">{trait}</IonButton>
          ))}
        </IonItem>
      </IonCard>
    </>
  );
};

export default MatchCard;
