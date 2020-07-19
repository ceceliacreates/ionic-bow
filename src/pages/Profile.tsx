import React, { useState } from "react";
import { IonContent } from "@ionic/react";
import ViewProfileContainer from "../components/ViewProfileContainer";
import EditProfileContainer from "../components/EditProfileContainer";

const ProfilePage: React.FC = () => {
  const [route, setRoute] = useState("view");
  const [profile, setProfile] = useState({
    username: "defaultUsername",
    email: "defaultemail@email.com",
    location: "Atlanta",
  });

  function EditHandler() {
    setRoute("edit");
  }

  function ViewHandler() {
    setRoute("view");
  }

  function UpdateHandler(newProfile: {}) {
    setProfile(profile);
  }
  return (
    <IonContent>
      {route === "view" ? (
        <ViewProfileContainer
          profile={profile}
          EditHandler={() => EditHandler()}
        />
      ) : (
        <EditProfileContainer
          UpdateHandler={UpdateHandler}
          ViewHandler={() => ViewHandler()}
          profile={profile}
        />
      )}
    </IonContent>
  );
};

export default ProfilePage;
