import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Link from 'next/link';

import { useEffect, useState } from 'react';

export default function Imprint(props) {
    return (
        <>
            <Box display='flex' alignItems='center' margin={2}>
                <div className='content'>
                    <div className='myContent'>
                        <div
                            data-hover='false'
                            data-delay='0'
                            data-w-id='bec9b11a-ac45-fd9d-508d-0363f89df620'
                            className='accordion-item w-dropdown'
                        >
                            <div className='text-block-4'>DATENSCHUTZ</div>

                            <nav className='dropdown-list-2 w-dropdown-list'>
                                <div className='w-layout-grid grid-5'>
                                    <p
                                        id='w-node-ad308063-8b9b-d2ca-62e1-de1054cca554-176eccca'
                                        className='paragraph-3-copy'
                                        lassName='flowing-text'
                                    >
                                        <strong className='bold-text-3'>
                                            ‍
                                        </strong>
                                        <p>+ DATENSCHUTZ </p>
                                        <br></br>
                                        <p>
                                            DIE BETREIBER DIESER SEITEN NEHMEN
                                            DEN SCHUTZ IHRER PERSÖNLICHEN DATEN
                                            SEHR ERNST. WIR BEHANDELN IHRE
                                            PERSONENBEZOGENEN DATEN VERTRAULICH
                                            UND ENTSPRECHEND DER GESETZLICHEN
                                            DATENSCHUTZVORSCHRIFTEN SOWIE DIESER
                                            DATENSCHUTZERKLÄRUNG. ‍<br></br>
                                            <br></br>
                                            DIE NUTZUNG UNSERER WEBSEITE IST IN
                                            DER REGEL OHNE ANGABE
                                            PERSONENBEZOGENER DATEN MÖGLICH.
                                            SOWEIT AUF UNSEREN SEITEN
                                            PERSONENBEZOGENE DATEN
                                            (BEISPIELSWEISE NAME, ANSCHRIFT ODER
                                            E-MAIL-ADRESSEN) ERHOBEN WERDEN,
                                            ERFOLGT DIES, SOWEIT MÖGLICH, STETS
                                            AUF FREIWILLIGER BASIS. DIESE DATEN
                                            WERDEN OHNE IHRE AUSDRÜCKLICHE
                                            ZUSTIMMUNG NICHT AN DRITTE
                                            WEITERGEGEBEN.
                                            <br></br>
                                            <br></br>
                                            WIR WEISEN DARAUF HIN, DASS DIE
                                            DATENÜBERTRAGUNG IM INTERNET (Z.B.
                                            BEI DER KOMMUNIKATION PER E-MAIL)
                                            SICHERHEITSLÜCKEN AUFWEISEN KANN.
                                            EIN LÜCKENLOSER SCHUTZ DER DATEN VOR
                                            DEM ZUGRIFF DURCH DRITTE IST NICHT
                                            MÖGLICH.
                                        </p>
                                        <Link href='/impressum'>
                                            <a>
                                                <br></br>+ FULL IMPRINT
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </nav>
                        </div>
                        <img
                            src='images/Stroke-1.svg'
                            loading='lazy'
                            alt=''
                            className='divider info'
                        />
                    </div>
                    <div className='wf-section'></div>
                </div>
            </Box>
        </>
    );
}
