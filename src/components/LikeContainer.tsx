import React, { useState } from 'react'
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonCardContent,
  IonButton
} from '@ionic/react'
import traits from '../data/traits.json'

import shuffle from '../utils/shuffleArray'

const shuffledTraits = shuffle(traits)

interface ContainerProps {
  MatchHandler: () => void;
}

const LikeContainer: React.FC<ContainerProps> = ({ MatchHandler }) => {
  const [selected, setSelected] = useState([] as any)

  function handleClick (trait: any) {
    if (selected.includes(trait)) {
      setSelected(selected.filter((item: string) => item !== trait))
    } else {
      setSelected(selected.length >= 3 ? selected : [...selected, trait])
    }
  }

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
            fill={selected.includes(trait) ? 'solid' : 'outline'}
            onClick={() => handleClick(trait)}
          >
            {trait}
          </IonButton>
        ))}
      </IonCard>
      <IonButton expand="full" onClick={() => MatchHandler()}>
        MATCH
      </IonButton>
    </IonContent>
  )
}

export default LikeContainer
