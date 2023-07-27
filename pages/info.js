import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from 'next/link';

import ReactPlayer from 'react-player/youtube';

import Image from 'next/image';
import { useRouter } from 'next/router';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';

import { useEffect, useState } from 'react';

import infoText from '../infoText';

export default function Info(props) {
    const [expandedPanel, setExpandedPanel] = useState(false);
    const router = useRouter();
    const handleAccordionChange = (panel) => (event, isExpanded) => {
        //console.log({ event, isExpanded });
        setExpandedPanel(isExpanded ? panel : false);
    };

    return (
        <>
            <Box marginTop={12}>
                <img
                    src='/static/images/Stroke-1.svg'
                    className='myInfoDivider'
                />
                <Accordion
                    sx={{
                        backgroundColor: '#2473ff',
                        color: '#ffffff',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                    elevation={0}
                    disableGutters
                    expanded={expandedPanel === 'panel1'}
                    onChange={handleAccordionChange('panel1')}
                >
                    <AccordionSummary elevation={0}>
                        <p className='infoAccordionText'>
                            {router.locale == 'de' ? 'INFO' : 'INFO'}
                        </p>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={4}>
                                <p className='info-text'>
                                    {router.locale == 'de' && infoText.info.de}
                                    {router.locale == 'en-US' &&
                                        infoText.info.en}
                                </p>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Box>
                                    <Box mb={1}>
                                        <img
                                            src='/static/images/SpreeBerlin_DASBILD_klein.jpg'
                                            className='myInfoImage'
                                        ></img>
                                    </Box>
                                    <Box mt={1}>
                                        <img
                                            src='/static/images/Bouye03.jpg'
                                            className='myInfoImage'
                                        ></img>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4} className='info-text'>
                                <Box mb={1} p={8}>
                                    <img
                                        src='/static/images/HC-PCDesign-p-500.png'
                                        className='myInfoImage'
                                    ></img>
                                </Box>
                                <Box mt={1}>
                                    <img
                                        src='/static/images/SpreeVision01.png'
                                        className='myInfoImage'
                                    ></img>
                                </Box>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <img
                    src='/static/images/Stroke-1.svg'
                    className='myInfoDivider'
                />
                <Accordion
                    sx={{
                        backgroundColor: '#2473ff',
                        color: '#ffffff',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                    // className={classes.accordion}
                    elevation={0}
                    disableGutters
                    expanded={expandedPanel === 'panel2'}
                    onChange={handleAccordionChange('panel2')}
                    TransitionProps={{ unmountOnExit: true }}
                >
                    <AccordionSummary elevation={0}>
                        <p className='infoAccordionText'>
                            {router.locale == 'de' ? 'RELEVANZ' : 'RELEVANCE'}
                        </p>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Box>
                            <Grid container spacing={1}>
                                <Grid
                                    item
                                    xs={12}
                                    lg={4}
                                  
                                >
                                    <p   className='info-text'>
                                        {router.locale == 'de' &&
                                            infoText.relevanz.de}
                                        {router.locale == 'en-US' &&
                                            infoText.relevanz.en}
                                    </p>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    lg={4}
                                    className='info-text'
                                >
                                    <Box mb={1}>
                                        <img
                                            src='/static/images/Blaualgen_Kanal.jpg'
                                            className='myInfoImage'
                                        ></img>
                                    </Box>
                                    <Box mt={1}>
                                        <img
                                            src='/static/images/Reederei_Riedel.jpeg'
                                            className='myInfoImage'
                                        ></img>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    lg={4}
                                    className='flowing-text'
                                >
                                    <Box mb={1}>
                                        <img
                                            src='/static/images/Fischsterben.jpg'
                                            className='myInfoImage'
                                        ></img>
                                    </Box>
                                    <Box mt={1}>
                                        <img
                                            src='/static/images/Rudolf_Kloos01.jpg'
                                            className='myInfoImage'
                                        ></img>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container>
                            <Grid item xs={4} lg={2}>
                                <img
                                    src='/static/images/Element-5.png'
                                    className='myInfoImage'
                                ></img>
                            </Grid>

                            <Grid item xs={4} lg={2}>
                                <img
                                    src='/static/images/Element-7.png'
                                    className='myInfoImage'
                                ></img>
                            </Grid>

                            <Grid item xs={4} lg={2}>
                                <img
                                    src='/static/images/Element-9.png'
                                    className='myInfoImage'
                                ></img>
                            </Grid>

                            <Grid item xs={4} lg={2}>
                                <img
                                    src='/static/images/Element-13.png'
                                    className='myInfoImage'
                                ></img>
                            </Grid>

                            <Grid item xs={4} lg={2}>
                                <img
                                    src='/static/images/Element-15.png'
                                    className='myInfoImage'
                                ></img>
                            </Grid>

                            <Grid item xs={4} lg={2}>
                                <img
                                    src='/static/images/Element-16.png'
                                    className='myInfoImage'
                                ></img>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <img
                    src='/static/images/Stroke-1.svg'
                    className='myInfoDivider'
                />
                <Accordion
                    elevation={0}
                    sx={{
                        backgroundColor: '#2473ff',
                        color: '#ffffff',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                    disableGutters
                    expanded={expandedPanel === 'panel3'}
                    onChange={handleAccordionChange('panel3')}
                    TransitionProps={{ unmountOnExit: true }}
                >
                    <AccordionSummary elevation={0}>
                        <p className='infoAccordionText'>
                            {router.locale == 'de' ? 'BOJEN' : 'BUOYS'}
                        </p>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={8} className='flowing-text'>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} lg={6}>
                                        <p className='info-text'>
                                        {router.locale == 'de' &&
                                            infoText.bojen.de}
                                        {router.locale == 'en-US' &&
                                            infoText.bojen.en}</p>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <img
                                            src='/static/images/SpreeBerlin_Bodemuseum.jpg'
                                            className='myInfoImage'
                                        ></img>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <img
                                            src='/static/images/Boje_Sideview.jpg'
                                            className='myInfoImage'
                                        ></img>
                                    </Grid>
                                    <Grid item xs={12} lg={6}>
                                        <img
                                            src='/static/images/Boje_Modellfunktion.jpg'
                                            className='myInfoImage'
                                        ></img>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={4} className='flowing-text'>
                                <img
                                    src='/static/images/Boje_Descritpion-p-2000.jpeg'
                                    className='myInfoImage'
                                ></img>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <img
                    src='/static/images/Stroke-1.svg'
                    className='myInfoDivider'
                />
                <Accordion
                    elevation={0}
                    sx={{
                        backgroundColor: '#2473ff',
                        color: '#ffffff',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                    expanded={expandedPanel === 'panel4'}
                    onChange={handleAccordionChange('panel4')}
                    TransitionProps={{ unmountOnExit: true }}
                >
                    <AccordionSummary>
                        <p className='infoAccordionText'>
                            {router.locale == 'de'
                                ? 'OPEN SOURCE'
                                : 'OPEN SOURCE'}
                        </p>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={6} className='info-text'>
                                <h6>COMING SOON</h6>
                                {router.locale == 'de' &&
                                    'SpreeBerlin ist Mitglied des'}
                                {router.locale == 'en-US' &&
                                    'SpreeBerlin is a member of the'}

                                <Link href='https://opennext.eu/'>
                                    <a> OpenNext! </a>
                                </Link>
                                {router.locale == 'de' &&
                                    `Formates. \n Derzeit werden Module für ein Open Source Zugang vorbereitet und schon bald zur Verfügung gestellt! Das Projekt hat den Anspruch der Open Source & Open Hardware gedanken zu verkörpern.`}
                                {router.locale == 'en-US' &&
                                    `format. \n Currently, modules for an open-source access are being prepared and will soon be available! The project aims to embody the principles of open-source and open hardware.`}
                            </Grid>
                            <Grid item xs={6}></Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <img
                    src='/static/images/Stroke-1.svg'
                    className='myInfoDivider'
                />
                <Accordion
                    elevation={0}
                    sx={{
                        backgroundColor: '#2473ff',
                        color: '#ffffff',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                    expanded={expandedPanel === 'panel5'}
                    onChange={handleAccordionChange('panel5')}
                    TransitionProps={{ unmountOnExit: true }}
                >
                    <AccordionSummary>
                        <p className='infoAccordionText'>PARTNER</p>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/BMBF_Logo_DE.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/Logo_Biooekonomie.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/WID_Logo_DE.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/Logo_WID.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/WID_Logo_DE.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/TU_Logo.jpg'></img>
                            </Grid>

                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/GDG_Preis_Logo.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/BHT_Logo.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/Logo_OpenNext.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/Logo_CityLab.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/Logo_TechnologieStiftung.jpg'></img>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <img src='/static/images/Logo_SustainALL.jpg'></img>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <img
                    src='/static/images/Stroke-1.svg'
                    className='myInfoDivider'
                />
                <Accordion
                    elevation={0}
                    sx={{
                        backgroundColor: '#2473ff',
                        color: '#ffffff',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                    expanded={expandedPanel === 'panel6'}
                    onChange={handleAccordionChange('panel6')}
                    TransitionProps={{ unmountOnExit: true }}
                >
                    <AccordionSummary>
                        <p className='infoAccordionText'>
                            NEW EUROPEAN BAUHAUS
                        </p>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Box sx={{ width: '100%' }}>
                            <ReactPlayer
                                url={
                                    'https://www.youtube.com/watch?v=gUlUAt0UJ2g&t=13s'
                                }
                                className='youtubePlayer'
                                //width='100%'
                                // height='100%'
                            />
                        </Box>
                    </AccordionDetails>
                </Accordion>

                <img
                    src='/static/images/Stroke-1.svg'
                    className='myInfoDivider'
                />
                <Accordion
                    elevation={0}
                    sx={{
                        backgroundColor: '#2473ff',
                        color: '#ffffff',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                    expanded={expandedPanel === 'panel7'}
                    onChange={handleAccordionChange('panel7')}
                    TransitionProps={{ unmountOnExit: true }}
                >
                    <AccordionSummary>
              
                        <p className='infoAccordionText'>
                            {router.locale == 'de' ? 'KONTAKT' : 'CONTACT'}
                        </p>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <Box
                            p={2}
                            sx={{}}
                            display='flex'
                            flexDirection='column'
                        >
                            <p className='flowing-text'>
                                <strong> Symbiotic LAB </strong>
                            </p>
                            <Link href='mailto:info@symbiotic-lab.com'>
                                <a className='flowing-text'>
                                    info(at)symbiotic-lab.com
                                </a>
                            </Link>
                            <Link href='https://www.symbiotic-lab.com'>
                                <a className='flowing-text'>
                                    www.symbiotic-lab.com
                                </a>
                            </Link>

                            <p className='flowing-text'>
                                <strong>JKUKULA</strong>
                            </p>
                            <Link href='mailto:info@jakobkukula.com'>
                                <a className='flowing-text'>
                                    info(at)jakobkukula.com
                                </a>
                            </Link>
                            <Link href='https://www.jakobkukula.com'>
                                <a className='flowing-text'>
                                    www.jakobkukula.com
                                </a>
                            </Link>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <img
                    src='/static/images/Stroke-1.svg'
                    className='myInfoDivider'
                />
                <Accordion
                    elevation={0}
                    sx={{
                        backgroundColor: '#2473ff',
                        color: '#ffffff',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                    expanded={expandedPanel === 'panel8'}
                    onChange={handleAccordionChange('panel8')}
                    TransitionProps={{ unmountOnExit: true }}
                >
                    <AccordionSummary>
                        <p className='infoAccordionText'>
                            {router.locale == 'de' ? 'IMPRESSUM' : 'IMPRINT'}
                        </p>
                    </AccordionSummary>
                    <AccordionDetails elevation={0}>
                        <div>
                            <p className='flowing-text'>
                                {`
                                    JAKOB KUKULA 
                                    LINIENSTRßE 110 
                                    10115 BERLIN
                                    GERMANY 

                                    +ENTWICKLUNG GRÜNDER & KREATIV DIREKTION // JAKOB KUKULA 
                                    CI & WEBDESIGN // DAVID HEUER 
                                    TECHNISCHE WEB ENTWICKLUNG // SASCHA HOFFMANN & JULIUS BORN 
                                    TEXTE // MOANA WALDECK 
                                    
                                    + BESONDEREN DANK KH-WEIßENSEE, FAKULTÄT PRODUKT DESIGN 
                                    PROF. NILS KRUEGER &
                                    PROF. LUCY NORRIS 
                                    BMBF, WISSENSCHAFT IM DIALOG 
                                    STAATLICHE MUSEEN ZU BERLIN // DR CLAUDIA BANZ 
                                    IZT BERLIN // FELIX BEER
                                    CITYLAB // SARA REICHERT 
                                    OPEN NEXT! // DANIEL WIESSOLEK 
                                    MORGEN.JETZT // MARTHA STARKE 
                                    FLUSSBAD BERLIN // CARSTEN RIECHELMANN 
                                    RALF STEEG 
                                    NIKLAS LIEBETRAU`}
                            </p>
                            <div>
                                <Link href='/datenschutz'>
                                    <a className='myTextLink'>+ DATENSCHUTZ</a>
                                </Link>
                            </div>
                            <div>
                                <Link href='/impressum'>
                                    <a className='myTextLink'>
                                        + IMPRESSUM KOMPLETT
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </AccordionDetails>
                    <img
                        src='/static/images/Stroke-1.svg'
                        className='myInfoDivider'
                    />
                </Accordion>
                <div className='mySpacer'></div>
            </Box>
        </>
    );
}
