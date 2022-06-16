import React from 'react';

import Link from 'next/link';

import Image from 'next/image';
import { Fade } from 'react-reveal';


const LoadingScreen = () => {
  return (
    <div className='loadingScreen'>
      <div>
        <div className="ball one">LOADING</div>
        <div className="ball two">LOADINGLOADINGLOADINGLOADINGLOADING</div>
        <div className="ball three">LOADINGLOADINGLOADINGLOADINGLOADING</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
