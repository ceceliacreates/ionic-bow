import React from "react";
import { IonContent, IonButton } from "@ionic/react";

interface ContainerProps {
  EditHandler: () => void;
}

const ViewProfileContainer: React.FC<ContainerProps> = ({ EditHandler }) => {
  return (
    <IonContent class="ion-text-center">
      <h1>View Profile Page</h1>
      <IonButton onClick={() => EditHandler()}>Edit Profile</IonButton>
    </IonContent>
  );
};

export default ViewProfileContainer;
