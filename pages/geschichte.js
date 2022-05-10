import Head from 'next/head';
import Image from 'next/image';

//import styles from '../styles/Home.module.css';

export default function Geschichte() {
    return (
        <>
            <div className='content'>
                <div className='container-rubriken'>
                    <h1 className='heading-3'>GESCHICHTE</h1>
                    <div className='w-layout-grid grid'>
                        <a
                            id='w-node-_4758e559-fda7-80fa-c36d-1020ad5f3e87-04cec08d'
                            href='../history/historisches-flussbad.html'
                            className='link-block-stadtb-der w-inline-block'
                        >
                            <h3 className='heading-10'>Historische Stadtbäder</h3>
                            <h4 className='heading-11'>
                                Vergessene Nutzung der Spree
                            </h4>
                        </a>
                        <a
                            id='w-node-feba3e4d-5210-c92e-b5c9-3987c4fdccad-04cec08d'
                            href='../history/spreekanal-und-spreeinseln.html'
                            className='link-block-spreekanal w-inline-block'
                        >
                            <h3 className='heading-10'>
                                Spreekanal &amp; Spreeinseln
                            </h3>
                            <h4 className='heading-11'>Die Wiege Berlins</h4>
                        </a>
                        <a
                            id='w-node-_4c84a528-79aa-e33c-a750-78b630de9993-04cec08d'
                            href='../history/die-rosa-rohre.html'
                            className='link-block-rosar-hre w-inline-block'
                        >
                            <h3 className='heading-10'>Die Rosa Röhre</h3>
                            <h4 className='heading-11'>
                                Die Forschungseinrichtung des Kaisers
                            </h4>
                        </a>
                        
                    </div>
                </div>
                <div className='container-rubriken'>
                    <div
                        data-hover='false'
                        data-delay='0'
                        data-w-id='6d69fd2e-6599-3690-d5d8-89a8224017c4'
                        // style='height:80px'
                        className='accordion-item-2 w-dropdown'
                    >
                        <div className='accordion-toggle-2 w-dropdown-toggle'>
  
                            <div className='text-block-5'>WEITERES</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='div-block-20'></div>
        </>
    );
}
