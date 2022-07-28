import React from 'react';
import LivingRoom from '../components/LivingRoom/LivingRoom';

type Props = {
  onOpen: () => void;
};

const LivingRoomContainer = ({ onOpen }: Props) => {
  return <LivingRoom onOpen={onOpen} />;
};

export default LivingRoomContainer;
