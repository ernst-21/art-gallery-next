import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const SpinLoader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="#1d8af0"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#39c3ed"
      innerCircleColor="#ed3963"
      middleCircleColor="#e4e807"
    />
  );
};

export default SpinLoader;
