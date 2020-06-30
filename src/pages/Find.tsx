import React from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonCardContent,
  IonItem,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { closeCircleOutline, heart } from "ionicons/icons";

const FindPage: React.FC = () => {
  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>5 miles away</IonCardSubtitle>
          <IonCardTitle>Match name</IonCardTitle>
        </IonCardHeader>
        <IonImg src="http://placekitten.com/g/400/400" />
        <IonCardContent>
          Keep close to Nature's heart... and break clear away, once in awhile,
          and climb a mountain or spend a week in the woods. Wash your spirit
          clean.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>People find me:</IonCardSubtitle>
        </IonCardHeader>
        <IonItem>
          <IonButton fill="outline">cute</IonButton>
          <IonButton fill="outline">cuddly</IonButton>
          <IonButton fill="outline">kind</IonButton>
        </IonItem>
      </IonCard>
      <IonCard class="ion-text-center">
        <IonButton fill="clear">
          <IonIcon icon={closeCircleOutline} size="large"></IonIcon>Pass
        </IonButton>
        <IonButton fill="clear" href="/tab2">
          <IonIcon icon={heart} size="large"></IonIcon>Like
        </IonButton>
      </IonCard>
    </IonContent>
  );
};

export default FindPage;
