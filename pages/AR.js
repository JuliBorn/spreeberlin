import React, { useEffect, useState } from 'react';

import dynamic from "next/dynamic";
// import { useRouter } from 'next/router';
// import { Unity, useUnityContext } from 'react-unity-webgl';
// import { UnityAR } from "../components/UnityAR";

const UnityAR = dynamic(() => import('../components/UnityAR'), {
    ssr: false,
});

const AR = ({ data }) => {
    // const { name } = router.query;


    return (
        <>
            <UnityAR />
        </>
    );
};

export default AR;
