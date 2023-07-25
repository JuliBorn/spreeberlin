import React, { useEffect, useState } from 'react';

import dynamic from "next/dynamic";
// import { useRouter } from 'next/router';
// import { Unity, useUnityContext } from 'react-unity-webgl';
// import { UnityAR } from "../components/UnityAR";

const View = dynamic(() => import('../components/UnityView'), {
    ssr: false,
});

const VirtualView = ({ data }) => {
    // const { name } = router.query;


    return (
        <>
            <UnityView />
        </>
    );
};

export default View;
