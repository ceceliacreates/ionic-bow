import React, { useState } from "react";
import { IonContent } from "@ionic/react";
import ViewProfileContainer from "../components/ViewProfileContainer";
import EditProfileContainer from "../components/EditProfileContainer";

const ProfilePage: React.FC = () => {
  const [route, setRoute] = useState("view");

  function EditHandler() {
    setRoute("edit");
  }

  function ViewHandler() {
    setRoute("view");
  }
  return (
    <IonContent>
      {route === "view" ? (
        <ViewProfileContainer EditHandler={() => EditHandler()} />
      ) : (
        <EditProfileContainer ViewHandler={() => ViewHandler()} />
      )}
    </IonContent>
  );
};

export default ProfilePage;
