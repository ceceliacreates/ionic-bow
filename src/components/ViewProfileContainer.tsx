import React from "react";
import { IonContent, IonButton } from "@ionic/react";

interface ContainerProps {
  EditHandler: () => void;
  profile: {
    username: string;
    email: string;
    location: string;
  };
}

const ViewProfileContainer: React.FC<ContainerProps> = ({
  EditHandler,
  profile,
}) => {
  return (
    <IonContent class="ion-text-center">
      <h1>View Profile Page</h1>
      <h2>Username:</h2>
      <p>{profile.username}</p>
      <h2>Email:</h2>
      <p>{profile.email}</p>
      <h2>Location:</h2>
      <p>{profile.location}</p>
      <IonButton onClick={() => EditHandler()}>Edit Profile</IonButton>
    </IonContent>
  );
};

export default ViewProfileContainer;
