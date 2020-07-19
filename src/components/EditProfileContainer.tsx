import React, { useState } from "react";
import {
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";

interface ContainerProps {
  ViewHandler: () => void;
  UpdateHandler: (newProfile: {}) => void;
  profile: {
    username: string;
    email: string;
    location: string;
  };
}

const EditProfileContainer: React.FC<ContainerProps> = ({
  ViewHandler,
  UpdateHandler,
  profile,
}) => {
  const [username, setUsername] = useState<any>(profile.username);
  const [email, setEmail] = useState<any>(profile.email);
  const [location, setLocation] = useState<any>(profile.location);

  return (
    <IonContent class="ion-text-center">
      <h1>Edit Profile Page</h1>
      <IonList>
        <IonItem>
          <IonLabel position="fixed">Username</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Email</IonLabel>
          <IonInput
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Location</IonLabel>
          <IonInput
            value={location}
            onIonChange={(e) => setLocation(e.detail.value!)}
          ></IonInput>
        </IonItem>
      </IonList>
      <IonButton
        onClick={() =>
          UpdateHandler({
            username: username,
            email: email,
            location: location,
          })
        }
      >
        Update
      </IonButton>
      <IonButton onClick={() => ViewHandler()}>Back</IonButton>
    </IonContent>
  );
};

export default EditProfileContainer;
