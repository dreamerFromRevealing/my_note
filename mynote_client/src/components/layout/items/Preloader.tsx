import React from 'react';
import {BallTriangle} from "react-loader-spinner";

const Preloader = () => {
  return (
    <BallTriangle
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center'
      }}
      color="#556CD6"
      height={100}
      width={100}/>
  );
};

export default Preloader;