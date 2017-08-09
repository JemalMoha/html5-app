import React from 'react';
import { AddParticipantForm } from './AddParticipantForm';
import { ParticipantList } from './ParticipantList';

const Container = ({participants, addParticipant}) => {
  return (
    <div>
      <AddParticipantForm participants={participants} addParticipant={addParticipant}/>
      <ParticipantList participants={participants} />
    </div>
  )
}

export default Container;
