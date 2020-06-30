import React from 'react'
import { IonCard, IonButton, IonIcon } from '@ionic/react'
import { closeCircleOutline, heart } from 'ionicons/icons'

interface ButtonProps {
  LikeHandler: () => void;
}

const LikeButtons: React.FC<ButtonProps> = ({ LikeHandler }) => {
  return (
    <IonCard class="ion-text-center">
      <IonButton fill="clear">
        <IonIcon icon={closeCircleOutline} size="large"></IonIcon>Pass
      </IonButton>
      <IonButton fill="clear" onClick={() => LikeHandler()}>
        <IonIcon icon={heart} size="large"></IonIcon>Like
      </IonButton>
    </IonCard>
  )
}

export default LikeButtons
