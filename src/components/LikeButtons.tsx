import React from "react";
import { IonCard, IonButton, IonIcon } from "@ionic/react";
import { closeCircleOutline, heart } from "ionicons/icons";

interface ButtonProps {
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

const LikeButtons: React.FC<ButtonProps> = ({
  LikeHandler,
  PassHandler,
  currentMatch,
}) => {
  return (
    <IonCard class="ion-text-center">
      <IonButton
        data-cy="pass-button"
        fill="clear"
        onClick={() => PassHandler(currentMatch)}
      >
        <IonIcon icon={closeCircleOutline} size="large"></IonIcon>Pass
      </IonButton>
      <IonButton
        data-cy="like-button"
        fill="clear"
        onClick={() => LikeHandler()}
      >
        <IonIcon icon={heart} size="large"></IonIcon>Like
      </IonButton>
    </IonCard>
  );
};

export default LikeButtons;
