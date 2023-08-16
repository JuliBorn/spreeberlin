import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

export default function View(props) {
    const router = useRouter();

    useEffect(() => {

        console.log('3d Page loading', router.query, ' redirecting...');

        if (router.query.sphere) {
            console.log("got query")
            router.replace(`https://url.adrianstaude.de?sphere=${router.query.sphere}`)
        }
        else if (!router.query.sphere) {
                        console.log("got no query")
            router.replace(`https://url.adrianstaude.de?sphere=1`)
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
