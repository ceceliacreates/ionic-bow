import React from "react";
import { IonContent, IonButton } from "@ionic/react";

interface ContainerProps {
  ViewHandler: () => void;
}

const EditProfileContainer: React.FC<ContainerProps> = ({ ViewHandler }) => {
  return (
    <IonContent class="ion-text-center">
      <h1>Edit Profile Page</h1>
      <IonButton onClick={() => ViewHandler()}>Back</IonButton>
    </IonContent>
  );
};

export default EditProfileContainer;
