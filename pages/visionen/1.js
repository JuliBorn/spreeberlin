import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

export default function View(props) {
    const router = useRouter();

    return (
        <>
            <div >
                <iframe
                    title='External Content'
                    src='https://url.adrianstaude.de/'
                    width='100%'
                    height='800'
                ></iframe>
            </div>
        </>
    );
}
