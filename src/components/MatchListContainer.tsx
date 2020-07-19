import React from "react";
import { IonList, IonItem, IonAvatar, IonLabel } from "@ionic/react";

interface ContainerProps {
  likedMatches: any[];
  SelectHandler: (match: {}) => void;
}

const MatchListContainer: React.FC<ContainerProps> = ({
  likedMatches,
  SelectHandler,
}) => {
  if (likedMatches.length) {
    return (
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
            <IonItem data-cy="match" onClick={() => SelectHandler(match)}>
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
    );
  } else {
    return <h2>No Matches Found</h2>;
  }
};

export default MatchListContainer;
