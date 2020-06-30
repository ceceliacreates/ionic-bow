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

function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledTraits = shuffle(traits);

const LikePage: React.FC = () => {
  function handleClick(trait: any) {
    if (selected.includes(trait)) {
      setSelected(selected.filter((item: string) => item !== trait));
    } else {
      setSelected(selected.length >= 3 ? selected : [...selected, trait]);
    }
  }

  const [selected, setSelected] = useState([] as any);

  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Awesome! You like:</IonCardSubtitle>
          <IonCardTitle>CuriousKitten</IonCardTitle>
        </IonCardHeader>

        <IonImg src="http://placekitten.com/g/400/400" />
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
      <IonButton expand="full" href="/tab3">
        MATCH
      </IonButton>
    </IonContent>
  );
};

export default LikePage;
