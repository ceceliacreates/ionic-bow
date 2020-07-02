import React from "react";
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
} from "@ionic/react";

interface PageProps {
  likedMatches: [];
}

const MatchesPage: React.FC<PageProps> = ({ likedMatches }) => {
  return (
    <IonContent class="ion-text-center">
      <IonList>
        {likedMatches.map(
          (match: {
            id: number;
            email: string;
            username: string;
            photo: string;
            description: string;
            traits: string[];
          }) => (
            <IonItem>
              <IonAvatar slot="start">
                <img src={match.photo}></img>
              </IonAvatar>
              <IonLabel>
                <h2>{match.username}</h2>
                <p>{match.description}</p>
              </IonLabel>
            </IonItem>
          )
        )}
      </IonList>
    </IonContent>
  );
};

export default MatchesPage;
