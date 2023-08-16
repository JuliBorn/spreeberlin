import React from 'react';

import { Cross as Hamburger } from 'hamburger-react';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
    Backdrop,
    Box,
    AppBar,
    Grid,
    Toolbar,
    Typography,
    Button,
} from '@mui/material';

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const { locale, push } = useRouter();

    const router = useRouter();
    //const [menuVisible, setMenuVisible] = useState(true);

    const [isOpen, setOpen] = useState(false);
    //console.log('Header', router.query);
    const handleClose = () => {
        setOpen(false);
    };

    const handleLocale = (l) => {
        console.log('locale: ', l);
        console.log('router: ', router.asPath);
        if (l == 'de') {
            push(router.asPath, router.asPath, { locale: l });
        }
        if (l == 'en-US') {
            push(router.asPath, router.asPath, { locale: l });
        }
    };
    return (
        <>
            <AppBar
                sx={{
                    zindex: 2100,
                    backgroundColor: '#2473FF',

                    //   minHeight: '22vh',
                    maxHeight: { xs: '100px', md: '80px' },
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'left',
                    justifyContent: 'center',
                    minHeight: '100px',
                }}
                elevation={0}
            >
                <Box display='flex'>
                    <Box sx={{ flexGrow: 1 }} pl={1}>
                        <Link href='/'>
                            <a>
                                <Box
                                    sx={{
                                        zindex: 2000,
                                        //marginleft:64,
                                        marginTop: 'auto',
                                        marginBottom: 'auto',
                                        paddingTop: 4,
                                        paddingBottom: 4,
                                        display: 'flex',
                                        flexDirection: 'column',

                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        src='/static/images/SpreeBerlin_Logo2.svg'
                                        loading='lazy'
                                        width='480'
                                        //height='80px'
                                        alt=''
                                        className='logo-image'
                                        zindex={1000000}
                                    ></img>

                                    {/* <Typography class="subTitle">Die Stimme eines Flusses
                  
                  </Typography> */}
                                </Box>
                            </a>
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            //marginTop: '32px',
                            marginRight: '16px',
                            //marginBottom: '24px',
                            zindex: 1000,
                            bottom: '0px',
                            alignItems: 'center',
                        }}
                        display={{ xs: 'none', lg: 'flex' }}
                    >
                        <Link href='/'>
                            <a
                                className={`menuLink ${
                                    router.pathname == '/' ? `current` : ''
                                }`}
                            >
                                {locale == 'de' ? 'KARTE' : 'MAP'}
                            </a>
                        </Link>
                        <Link href='/geschichte'>
                            <a
                                className={`menuLink ${
                                    router.asPath == '/geschichte'
                                        ? `current`
                                        : ''
                                }`}
                            >
                                {locale == 'de' ? 'GESCHICHTE' : 'HISTORY'}
                            </a>
                        </Link>
                        <Link href='/aktuelles'>
                            <a
                                className={`menuLink ${
                                    router.query.type == 'aktuelles'
                                        ? `current`
                                        : ''
                                }`}
                            >
                                {locale == 'de' ? 'AKTUELLES' : 'NEWS'}
                            </a>
                        </Link>
                        <Link href='/visionen'>
                            <a
                                className={`menuLink ${
                                    router.asPath == '/visionen'
                                        ? `current`
                                        : ''
                                }`}
                            >
                                {locale == 'de' ? 'VISIONEN' : 'VISIONS'}
                            </a>
                        </Link>
                        <Link href='/info'>
                            <a
                                className={`menuLink ${
                                    router.pathname == '/info' ? `current` : ''
                                }`}
                            >
                                {locale == 'de' ? 'INFO' : 'INFO'}
                            </a>
                        </Link>
                       <Link href='/visionen/1'>
                            <a
                                className={`menuLink ${
                                    router.pathname == '/visionen/1' ? `current` : ''
                                }`}
                            >
                                {locale == 'de' ? '3D' : '3D'}
                            </a>
                        </Link>
                        <div className='localeContainerDesktop'>
                            <div
                                onClick={() => handleLocale('de')}
                                className={`menuLinkLocaleDesktop ${
                                    router.locale == 'de' ? `current` : ''
                                }`}
                            >
                                de
                            </div>
                            <div className='menuLinkLocaleDesktop'>{` / `}</div>

                            <div
                                onClick={() => handleLocale('en-US')}
                                className={`menuLinkLocaleDesktop ${
                                    router.locale == 'en-US' ? `current` : ''
                                }`}
                            >
                                en
                            </div>
                        </div>
                    </Box>

                    <Box
                        display={{ xs: 'block', lg: 'none' }}
                        sx={{
                            marginTop: 'auto',
                            marginBottom: 'auto',
                            marginRight: '16px',
                            zindex: 1000000,
                        }}
                    >
                        <div className="hamburger">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                    </Box>
                </Box>

                <Backdrop
                    sx={{
                        color: '#fff',
                        backgroundColor: 'rgba(36, 115, 255, 1)',
                        zindex: -1,
                    }}
                    open={isOpen}
                    onClick={handleClose}
                    display='flex'
                >
                    <div className='localeContainer'>
                        <div
                            onClick={() => handleLocale('de')}
                            className={`menuLinkLocale ${
                                router.locale == 'de' ? `current` : ''
                            }`}
                        >
                            de
                        </div>
                        <div
                            onClick={() => handleLocale('en-US')}
                            className={`menuLinkLocale ${
                                router.locale == 'en-US' ? `current` : ''
                            }`}
                        >
                            en
                        </div>
                    </div>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            paddingBottom: '18vh',
                            paddingTop: '2vh',
                            height: '100%',
                        }}
                    >
                        <Link href='/'>
                            <a
                                className={`mobileMenuLink  ${
                                    router.pathname == '/' ? `current` : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                {locale == 'de' ? 'Karte' : 'Map'}
                            </a>
                        </Link>
                        <Link href='/geschichte'>
                            <a
                                href='/static/history/geschichte.html'
                                className={`mobileMenuLink  ${
                                    router.asPath == '/geschichte'
                                        ? `current`
                                        : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                {locale == 'de' ? 'Geschichte' : 'History'}
                            </a>
                        </Link>
                        <Link href='/aktuelles'>
                            <a
                                href='news/news-overview.html'
                                className={`mobileMenuLink  ${
                                    router.asPath == '/aktuelles'
                                        ? `current`
                                        : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                {locale == 'de' ? 'Aktuelles' : 'News'}
                            </a>
                        </Link>
                        <Link href='/visionen'>
                            <a
                                href='vision/vision.html'
                                className={`mobileMenuLink  ${
                                    router.asPath == '/visionen'
                                        ? `current`
                                        : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                {locale == 'de' ? 'Visionen' : 'Visions'}
                            </a>
                        </Link>
                        <Link href='/info'>
                            <a
                                href='info.html'
                                className={`mobileMenuLink  ${
                                    router.asPath == '/info' ? `current` : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                Info
                            </a>
                        </Link>
                        <Link href='/visionen/1'>
                            <a
                                className={`mobileMenuLink  ${
                                    router.asPath == '/visionen/1' ? `current` : ''
                                }`}
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                {locale == 'de' ? '3D' : '3D'}
                            </a>
                        </Link>
                    </Box>
                </Backdrop>
            </AppBar>
        </>
    );
};

export default Header;
