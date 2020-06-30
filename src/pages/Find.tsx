import React, { useState } from 'react'
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
  IonIcon
} from '@ionic/react'
import { closeCircleOutline, heart } from 'ionicons/icons'
import LikeContainer from '../components/LikeContainer'
import FindContainer from '../components/FindContainer'

const FindPage: React.FC = () => {
  const [route, setRoute] = useState('find')

  return (
    <IonContent>
      {route === 'find' ? (
        <FindContainer LikeHandler={() => setRoute('like')} />
      ) : (
        <LikeContainer MatchHandler={() => setRoute('find')} />
      )}
    </IonContent>
  )
}

export default FindPage
