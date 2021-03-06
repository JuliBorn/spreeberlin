import React from 'react';

import Hamburger from 'hamburger-react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import Image from 'next/image';

import Lottie from 'react-lottie';

import * as animationData from '../public/static/myLottie.json';

const HeaderBar = () => {
    //const [menuVisible, setMenuVisible] = useState(true);
    const router = useRouter();
    const [isOpen, setOpen] = useState(true);

    const buttonStyle = {
        display: 'block',
        margin: '10px auto',
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, backgroundColor: '#2473ff', xs: 8 }}>
                <AppBar
                    position='static'
                    color='transparent'
                    size='large'
                    elevation={0}
                >
                    <Toolbar size='large'>
                        <Box
                            size='large'
                            edge='start'
                            sx={{
                                m: 2,
                                backgroundColor: '#2473ff',
                                flexGrow: 1,
                            }}
                        >
                            <Image
                                src='/static/images/SpreeBerlin_Logo2.svg'
                                width='480'
                                height='65'
                                alt=''
                                className='logo-image'
                            ></Image>
                        </Box>
                        <Box
                            sx={{
                                display: {
                                    xs: 'none',
                                    lg: 'block',
                                    xl: 'block',
                                },
                            }}
                        >
                            <Link href='/'>
                                <a
                                    className={`nav-link w-nav-link ${
                                        router.pathname == '/'
                                            ? `w--current`
                                            : ''
                                    }`}
                                >
                                    KARTE
                                </a>
                            </Link>
                            <Link href='/geschichte'>
                                <a
                                    className={`nav-link w-nav-link ${
                                        router.pathname == '/geschichte'
                                            ? `w--current`
                                            : ''
                                    }`}
                                >
                                    GESCHICHTE
                                </a>
                            </Link>
                            <Link href='/aktuelles'>
                                <a
                                    className={`nav-link w-nav-link ${
                                        router.pathname == '/aktuelles'
                                            ? `w--current`
                                            : ''
                                    }`}
                                >
                                    AKTUELLES
                                </a>
                            </Link>

                            <Link href='/visionen'>
                                <a
                                    className={`nav-link w-nav-link ${
                                        router.pathname == '/visionen'
                                            ? `w--current`
                                            : ''
                                    }`}
                                >
                                    VISIONEN
                                </a>
                            </Link>
                            <Link href='/info'>
                                <a
                                    className={`nav-link w-nav-link ${
                                        router.pathname == '/info'
                                            ? `w--current`
                                            : ''
                                    }`}
                                >
                                    Info
                                </a>
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: {
                                    xs: 'block',
                                    lg: 'none',
                                    xl: 'none',
                                },
                            }}
                        >
                            <div className='menu-button myMenu'>
                                <Hamburger toggled={isOpen} toggle={setOpen} />
                                <div
                                    data-is-ix2-target='1'
                                    className='lottie-animation'
                                    data-w-id='68b847b0-6442-084c-8200-708cd136ca6b'
                                    data-animation-type='lottie'
                                    data-src='documents/lottieflow-menu-nav-07-ffffff-easey.json'
                                    data-loop='0'
                                    data-direction='1'
                                    data-autoplay='0'
                                    data-renderer='svg'
                                    data-default-duration='2.4791666666666665'
                                    data-duration='0'
                                >
                                    
                                </div>
                            </div>
                            {isOpen && (
                                <nav role='navigation' className='myOpenMenu'>
                                    <div className='mySpacer'></div>
                                    <Link href='/'>
                                        <a
                                            aria-current='page'
                                            className={`mobile-nav-link-extra w-nav-link ${
                                                router.pathname == '/'
                                                    ? `w--current`
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            Karte
                                        </a>
                                    </Link>
                                    <Link href='/aktuelles'>
                                        <a
                                            href='news/news-overview.html'
                                            className={`mobile-nav-link-extra w-nav-link ${
                                                router.pathname == '/aktuelles'
                                                    ? `w--current`
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            Aktuelles
                                        </a>
                                    </Link>
                                    <Link href='/geschichte'>
                                        <a
                                            href='/static/history/geschichte.html'
                                            layout='fill'
                                            className={`mobile-nav-link-extra w-nav-link ${
                                                router.pathname == '/geschichte'
                                                    ? `w--current`
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            Geschichte
                                        </a>
                                    </Link>
                                    <Link href='/visionen'>
                                        <a
                                            href='vision/vision.html'
                                            className={`mobile-nav-link-extra w-nav-link ${
                                                router.pathname == '/visionen'
                                                    ? `w--current`
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            VISIONEN
                                        </a>
                                    </Link>
                                    <Link href='/info'>
                                        <a
                                            href='info.html'
                                            className={`mobile-nav-link-extra w-nav-link ${
                                                router.pathname == '/info'
                                                    ? `w--current`
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            info
                                        </a>
                                    </Link>
                                </nav>
                            )}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* <div
                data-collapse='medium'
                data-animation='default'
                data-duration='400'
                data-w-id='68b847b0-6442-084c-8200-708cd136ca5c'
                data-easing='ease'
                data-easing2='ease'
                role='banner'
                className='navbar-2 is-map w-nav'
            >
                <div className='container-2 w-container'>
                    <Link href='/'>
                        <a
                            aria-current='page'
                            className='brand-2 w-nav-brand w--current'
                        >
                            <Image
                                src='/static/images/SpreeBerlin_Logo2.svg'
                                loading='lazy'
                                width='480'
                                height='65'
                                alt=''
                                className='logo-image'
                            ></Image>
                        </a>
                    </Link>
                    <div className='menu-filler'></div>
                    <div className='main-nav-menu'>
                        <Link href='/'>
                            <a
                                className={`nav-link w-nav-link ${
                                    router.pathname == '/' ? `w--current` : ''
                                }`}
                            >
                                KARTE
                            </a>
                        </Link>
                        <Link href='/geschichte'>
                            <a
                                className={`nav-link w-nav-link ${
                                    router.pathname == '/geschichte'
                                        ? `w--current`
                                        : ''
                                }`}
                            >
                                GESCHICHTE
                            </a>
                        </Link>
                        <Link href='/aktuelles'>
                            <a
                                className={`nav-link w-nav-link ${
                                    router.pathname == '/aktuelles'
                                        ? `w--current`
                                        : ''
                                }`}
                            >
                                AKTUELLES
                            </a>
                        </Link>

                        <Link href='/visionen'>
                            <a
                                className={`nav-link w-nav-link ${
                                    router.pathname == '/visionen'
                                        ? `w--current`
                                        : ''
                                }`}
                            >
                                VISIONEN
                            </a>
                        </Link>
                        <Link href='/info'>
                            <a
                                className={`nav-link w-nav-link ${
                                    router.pathname == '/info'
                                        ? `w--current`
                                        : ''
                                }`}
                            >
                                Info
                            </a>
                        </Link>
                    </div>

                    <div className='menu-button w-nav-button myMenu'>
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                        <div
                            data-is-ix2-target='1'
                            className='lottie-animation'
                            data-w-id='68b847b0-6442-084c-8200-708cd136ca6b'
                            data-animation-type='lottie'
                            data-src='documents/lottieflow-menu-nav-07-ffffff-easey.json'
                            data-loop='0'
                            data-direction='1'
                            data-autoplay='0'
                            data-renderer='svg'
                            data-default-duration='2.4791666666666665'
                            data-duration='0'
                        ></div>
                    </div>
                    {isOpen && (
                        <nav role='navigation' className='myOpenMenu'>
                            <div className='mySpacer'></div>
                            <Link href='/'>
                                <a
                                    aria-current='page'
                                    className={`mobile-nav-link-extra w-nav-link ${
                                        router.pathname == '/'
                                            ? `w--current`
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    Karte
                                </a>
                            </Link>
                            <Link href='/aktuelles'>
                                <a
                                    href='news/news-overview.html'
                                    className={`mobile-nav-link-extra w-nav-link ${
                                        router.pathname == '/aktuelles'
                                            ? `w--current`
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    Aktuelles
                                </a>
                            </Link>
                            <Link href='/geschichte'>
                                <a
                                    href='/static/history/geschichte.html'
                                    layout='fill'
                                    className={`mobile-nav-link-extra w-nav-link ${
                                        router.pathname == '/geschichte'
                                            ? `w--current`
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    Geschichte
                                </a>
                            </Link>
                            <Link href='/visionen'>
                                <a
                                    href='vision/vision.html'
                                    className={`mobile-nav-link-extra w-nav-link ${
                                        router.pathname == '/visionen'
                                            ? `w--current`
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    VISIONEN
                                </a>
                            </Link>
                            <Link href='/info'>
                                <a
                                    href='info.html'
                                    className={`mobile-nav-link-extra w-nav-link ${
                                        router.pathname == '/info'
                                            ? `w--current`
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    info
                                </a>
                            </Link>
                        </nav>
                    )}
                </div>
            </div> */}
        </>
    );
};

export default HeaderBar;
