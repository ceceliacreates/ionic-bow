import React, { useState } from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import traits from "../data/traits.json";

import shuffle from "../utils/shuffleArray";

const shuffledTraits = shuffle(traits);

interface ContainerProps {
  MatchHandler: (currentMatch: {}) => void;
  currentMatch: {
    id: number;
    email: string;
    username: string;
    photo: string;
    description: string;
    traits: string[];
  };
}

const LikeContainer: React.FC<ContainerProps> = ({
  MatchHandler,
  currentMatch,
}) => {
  const [selected, setSelected] = useState([] as any);

  function handleClick(trait: any) {
    if (selected.includes(trait)) {
      setSelected(selected.filter((item: string) => item !== trait));
    } else {
      setSelected(selected.length >= 3 ? selected : [...selected, trait]);
    }
  }

  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Awesome! You like:</IonCardSubtitle>
          <IonCardTitle>{currentMatch.username}</IonCardTitle>
        </IonCardHeader>

        <IonImg src={currentMatch.photo} />
      </IonCard>
      <IonCard class="ion-padding">
        <IonCardContent class="ion-text-center">
          What do you like most about CuriousKitten? (Choose 3)
        </IonCardContent>

        {shuffledTraits.map((trait: string) => (
          <IonButton
            fill={selected.includes(trait) ? "solid" : "outline"}
            onClick={() => handleClick(trait)}
          >
            {trait}
          </IonButton>
        ))}
      </IonCard>
      <IonButton expand="full" onClick={() => MatchHandler(currentMatch)}>
        MATCH
      </IonButton>
    </IonContent>
  );
};

export default LikeContainer;
