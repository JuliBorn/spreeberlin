import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

export default function View(props) {
    const router = useRouter();

    useEffect(() => {
        console.log('3d Page loading', router.query, ' redirecting...');

        if (router.query.sphere) {
            console.log('got query');
            router.replace(
                `https://spreevision.adrianstaude.de?sphere=${router.query.sphere}`
            );
        } else if (!router.query.sphere) {
            console.log('got no query');
            if (router.asPath === '/visionen/1') {
                console.log('visionen/1 home');
                router.replace(`https://spreevision.adrianstaude.de?sphere=1`)
            }
            
        }
    }, [router.query]);
    return (
        <>
            <div className='AR'>
                {/* <iframe
                    title='External Content'
                    src='https://url.adrianstaude.de/'
                    width='100%'
                    height='900'
                frameBorder='0'
                
                ></iframe> */}
            </div>
        </>
    );
}
