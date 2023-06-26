import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from 'next/link'

import ReactPlayer from 'react-player/youtube'

import Image from 'next/image'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'

import { useEffect, useState } from 'react'

export default function Info(props) {
  const [expandedPanel, setExpandedPanel] = useState(false)

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    //console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false)
  }

  return (
    <>
      <Box marginTop={12}>
        <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
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
            <p className="infoAccordionText">INFO</p>
          </AccordionSummary>
          <AccordionDetails elevation={0}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={4}>
                <p className="flowing-text">
                  Im Kontext der Klimakrise und des damit einhergehenden
                  gesellschaftlichen Wandels untersucht das Projekt die
                  Beziehung zwischen Berlin und der Spree, dem städtischen Raum,
                  den Bürgern und dem Gewässer. Wie kann dem Fluss eine eigene
                  "politische" Stimme gegeben werden und was kann dazu
                  beitragen, mehr Bewusstsein für die Spree und den Einfluss des
                  Menschen zu schaffen? Mit Hilfe der Bojen macht das Gewässer
                  auf die Verschmutzung aufmerksam. Digitale Werkzeuge und
                  Medien, wie Messgeräte und App, erfassen den aktuellen Zustand
                  des Flusses und vermitteln ihn den Bürgern auf zugängliche
                  Weise. Spannende historische und aktuelle Artikel rund um das
                  Thema werden ebenfalls kommuniziert. Eine Zukunftsebene auf
                  der Website zeigt die ungenutzten Potenziale auf und
                  veranschaulicht, wie sich die Stadt mit Hilfe des Flusses zum
                  Besseren verändern könnte, und regt Bürger und Politiker zum
                  Handeln an. In den heißen Sommermonaten pumpt die Boje
                  Sauerstoff in den Fluss und versorgt die Spree und ihre
                  Lebewesen damit. Der planetenzentrierte Ansatz bietet eine
                  ganzheitliche und "grüne" Lösung für die verschiedenen
                  Probleme und sorgt für ein gesünderes Gleichgewicht zwischen
                  den beteiligten Akteuren.
                </p>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Box>
                  <Box mb={1}>
                    <img
                      src="/static/images/SpreeBerlin_DASBILD_klein.jpg"
                      className="myInfoImage"
                    ></img>
                  </Box>
                  <Box mt={1}>
                    <img
                      src="/static/images/Bouye03.jpg"
                      className="myInfoImage"
                    ></img>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={4} className="flowing-text">
                <Box mb={1} p={8}>
                  <img
                    src="/static/images/HC-PCDesign-p-500.png"
                    className="myInfoImage"
                  ></img>
                </Box>
                <Box mt={1}>
                  <img
                    src="/static/images/SpreeVision01.png"
                    className="myInfoImage"
                  ></img>
                </Box>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
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
            <p className="infoAccordionText">RELEVANZ</p>
          </AccordionSummary>
          <AccordionDetails elevation={0}>
            <Box>
              <Grid container spacing={1}>
                <Grid xs={12} lg={4} className="flowing-text">
                  <p>
                    Während der umfangreichen Recherchen wurden viele Probleme
                    identifiziert. Das Projekt SpreeBerlin konzentriert sich auf
                    die Beziehung zwischen uns und dem Wasser und geht konkret
                    auf das Sauerstoffproblem der Spree im innerstädtischen
                    Bereich ein. Durch die Bildung über Probleme wie
                    Kanalisationsüberläufe, die Flussarchitektur, die Nutzung
                    der Gewässer durch Schifffahrt und Verkehr,
                    Reifenverschleiß, Düngereintrag aus der Landwirtschaft,
                    Sulfatbelastung aus dem Kohlebergbau oder Klimawandel kann
                    ein Bewusstsein der Bürger*innen gestärkt werden. Im besten
                    Fall inspiriert, mobilisiert und führt SpreeBerlin zu einer
                    neuen Sichtweise auf unsere wertvolle Stadtnatur. Die
                    Sensibilisierung durch Daten zur Wasserqualität lässt eine
                    breite Masse von Menschen zu kleinen
                    "Wissenschaftlern*innen" werden. Das Projekt ist auch ein
                    praktischer Lösungsvorschlag für das Problem des
                    Sauerstoffmangels in den Kanälen und des dadurch
                    verursachten Fischsterbens. Derzeit ist eine der einzigen
                    Lösungen das Sauerstoffpumpboot "Rudolf Kloos". Doch wie
                    sinnvoll ist der kostspielige, arbeitsintensive,
                    zeitraubende und umweltschädliche Einsatz des Bootes? Die
                    Bojen könnten eine Alternative sein, die mit nachhaltiger
                    Energie betrieben werden kann.
                  </p>
                </Grid>
                <Grid item xs={12} lg={4} className="flowing-text">
                  <Box mb={1}>
                    <img
                      src="/static/images/Blaualgen_Kanal.jpg"
                      className="myInfoImage"
                    ></img>
                  </Box>
                  <Box mt={1}>
                    <img
                      src="/static/images/Reederei_Riedel.jpeg"
                      className="myInfoImage"
                    ></img>
                  </Box>
                </Grid>
                <Grid item xs={12} lg={4} className="flowing-text">
                  <Box mb={1}>
                    <img
                      src="/static/images/Fischsterben.jpg"
                      className="myInfoImage"
                    ></img>
                  </Box>
                  <Box mt={1}>
                    <img
                      src="/static/images/Rudolf_Kloos01.jpg"
                      className="myInfoImage"
                    ></img>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Grid container>
              <Grid item xs={4} lg={2}>
                <img
                  src="/static/images/Element-5.png"
                  className="myInfoImage"
                ></img>
              </Grid>

              <Grid item xs={4} lg={2}>
                <img
                  src="/static/images/Element-7.png"
                  className="myInfoImage"
                ></img>
              </Grid>

              <Grid item xs={4} lg={2}>
                <img
                  src="/static/images/Element-9.png"
                  className="myInfoImage"
                ></img>
              </Grid>

              <Grid item xs={4} lg={2}>
                <img
                  src="/static/images/Element-13.png"
                  className="myInfoImage"
                ></img>
              </Grid>

              <Grid item xs={4} lg={2}>
                <img
                  src="/static/images/Element-15.png"
                  className="myInfoImage"
                ></img>
              </Grid>

              <Grid item xs={4} lg={2}>
                <img
                  src="/static/images/Element-16.png"
                  className="myInfoImage"
                ></img>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
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
            <p className="infoAccordionText">BOJEN</p>
          </AccordionSummary>
          <AccordionDetails elevation={0}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={8} className="flowing-text">
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={6}>
                    Die Boje schwimmt im Spreekanal und versorgt das Wasser mit
                    Sauerstoff. Oberhalb der Wasseroberfläche wird die
                    Wasserqualität reflektiert. Die Energieversorgung kann zum
                    einen durch das Ökostromnetz der Stadt, zum anderen durch
                    menschliche Kraft (Sportgeräte o.ä.) erfolgen.
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <img
                      src="/static/images/SpreeBerlin_Bodemuseum.jpg"
                      className="myInfoImage"
                    ></img>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <img
                      src="/static/images/Boje_Sideview.jpg"
                      className="myInfoImage"
                    ></img>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <img
                      src="/static/images/Boje_Modellfunktion.jpg"
                      className="myInfoImage"
                    ></img>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={4} className="flowing-text">
                <img
                  src="/static/images/Boje_Descritpion-p-2000.jpeg"
                  className="myInfoImage"
                ></img>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
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
            <p className="infoAccordionText">OPEN SOURCE</p>
          </AccordionSummary>
          <AccordionDetails elevation={0}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={6} className="flowing-text">
                <h6>COMING SOON</h6>
                SpreeBerlin ist Mitglied des
                <Link href="https://opennext.eu/">
                  <a> OpenNext! </a>
                </Link>
                Formates. Derzeit werden Module für ein Open Source Zugang
                vorbereitet und schon bald zur Verfügung gestellt! Das Projekt
                hat den Anspruch der Open Source & Open Hardware gedanken zu
                verkörpern.
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
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
            <p className="infoAccordionText">PARTNER</p>
          </AccordionSummary>
          <AccordionDetails elevation={0}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/BMBF_Logo_DE.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/Logo_Biooekonomie.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/WID_Logo_DE.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/Logo_WID.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/WID_Logo_DE.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/TU_Logo.jpg"></img>
              </Grid>

              <Grid item xs={12} lg={2}>
                <img src="/static/images/GDG_Preis_Logo.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/BHT_Logo.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/Logo_OpenNext.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/Logo_CityLab.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/Logo_TechnologieStiftung.jpg"></img>
              </Grid>
              <Grid item xs={12} lg={2}>
                <img src="/static/images/Logo_SustainALL.jpg"></img>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
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
            <p className="infoAccordionText">NEW EUROPEAN BAUHAUS</p>
          </AccordionSummary>
          <AccordionDetails elevation={0}>
            <Box sx={{ width: '100%' }}>
              <ReactPlayer
                url={'https://www.youtube.com/watch?v=gUlUAt0UJ2g&t=13s'}
                className="youtubePlayer"
                //width='100%'
                // height='100%'
              />
            </Box>
          </AccordionDetails>
        </Accordion>

        <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
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
            <p className="infoAccordionText">KONTAKT</p>
          </AccordionSummary>
          <AccordionDetails elevation={0}>
            <Box p={2} sx={{}} display="flex" flexDirection="column">
              <p className="flowing-text">
                <strong> Symbiotic LAB </strong>
              </p>
              <Link href="mailto:info@symbiotic-lab.com">
                <a className="flowing-text">info(at)symbiotic-lab.com</a>
              </Link>
              <Link href="https://www.symbiotic-lab.com">
                <a className="flowing-text">www.symbiotic-lab.com</a>
              </Link>

              <p className="flowing-text">
                <strong>JKUKULA</strong>
              </p>
              <Link href="mailto:info@jakobkukula.com">
                <a className="flowing-text">info(at)jakobkukula.com</a>
              </Link>
              <Link href="https://www.jakobkukula.com">
                <a className="flowing-text">www.jakobkukula.com</a>
              </Link>
            </Box>
          </AccordionDetails>
        </Accordion>
        <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
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
            <p className="infoAccordionText">IMPRESSUM</p>
          </AccordionSummary>
          <AccordionDetails elevation={0}>
            <div>
              <p className="flowing-text">
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
                <Link href="/datenschutz">
                  <a className="myTextLink">+ DATENSCHUTZ</a>
                </Link>
              </div>
              <div>
                <Link href="/impressum">
                  <a className="myTextLink">+ IMPRESSUM KOMPLETT</a>
                </Link>
              </div>
            </div>
          </AccordionDetails>
          <img src="/static/images/Stroke-1.svg" className="myInfoDivider" />
        </Accordion>
        <div className="mySpacer"></div>
      </Box>
    </>
  )
}
