import React, { useEffect, useState, useRef } from 'react';

import { useRouter } from 'next/router';
import { Unity, useUnityContext, unload } from 'react-unity-webgl';

const UnityView = () => {
    const { unityProvider, isLoaded, unload } = useUnityContext({
        loaderUrl: 'Build/SpreewithoutAR.loader.js',
        dataUrl: 'Build/SpreewithoutAR.data',
        frameworkUrl: 'Build/SpreewithoutAR.framework.js',
        codeUrl: 'Build/SpreewithoutAR.wasm',
    });
    const router = useRouter();
    const { locale } = useRouter();
    const bypassConfirmationRef = useRef(false);

    useEffect(() => {
        const shouldByPassconfimation = () => bypassConfirmationRef.current;

        const handleBrowseAway = (url) => {
            //console.log("locale in unityview"  , locale)
            if (isLoaded) {
                unload()
                    .then(() => {
                        bypassConfirmationRef.current = true;
                        //console.log("quitting done?", router)
                        //console.log("quitting done?", url)
                        router.push(url);
                    })
                    .catch((e) => console.log(e));
            }

            if (shouldByPassconfimation()) return;

            router.events.emit('routeChangeError');
            throw 'Quitting please wait.';
        };

        router.events.on('routeChangeStart', handleBrowseAway);

        return () => {
            router.events.off('routeChangeStart', handleBrowseAway);
        };
    }, [router.events, isLoaded]);

    return (
        <>
            <div className='AR'>
                <Unity
                    unityProvider={unityProvider}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </>
    );
};

export default UnityView;
