import React, { useState } from "react";
import {
  IonContent,
  IonInput,
  IonItemDivider,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/react";
import { useForm, Controller } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  location: string;
};

const ProfilePage: React.FC = () => {
  const defaultProfile = {
    username: "defaultUsername",
    email: "defaultemail@email.com",
    location: "Atlanta",
  };

  const { control, register, handleSubmit, watch, errors } = useForm<Inputs>();

  const [profile, setProfile] = useState(defaultProfile);

  const onSubmit = (updatedProfile: {
    username: string;
    email: string;
    location: string;
  }) => setProfile(updatedProfile);

  return (
    <IonContent>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <IonItem>
          <IonLabel position="fixed">Username</IonLabel>
          <Controller
            as={<IonInput></IonInput>}
            control={control}
            name="username"
            defaultValue={profile.username}
            rules={{ required: true }}
          />
        </IonItem>

        {errors.username && <span>This field is required</span>}

        <IonItem>
          <IonLabel position="fixed">Email</IonLabel>
          <Controller
            as={<IonInput></IonInput>}
            control={control}
            name="email"
            defaultValue={profile.email}
            rules={{ required: true }}
          />
        </IonItem>

        {errors.email && <span>This field is required</span>}

        <IonItem>
          <IonLabel position="fixed">Location</IonLabel>
          <Controller
            as={<IonInput></IonInput>}
            control={control}
            name="location"
            defaultValue={profile.location}
            rules={{ required: true }}
          />
        </IonItem>

        {errors.location && <span>This field is required</span>}

        <IonButton type="submit" expand="block">
          Update Profile
        </IonButton>
      </form>
    </IonContent>
  );
};

export default ProfilePage;
