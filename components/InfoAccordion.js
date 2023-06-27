import React from 'react';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material';

const InfoAccordion = (props, { children }) => {
    return (
        <>
            <Accordion
                elevation={0}
                sx={{
                    backgroundColor: '#2473ff',
                    color: '#ffffff',
                    '&:before': {
                        display: 'none',
                    },
                    border: 'red solid 3px',
                }}
                // expanded={expandedPanel === 'panel5'}
                // onChange={props.expand()}
                TransitionProps={{ unmountOnExit: true }}
            >
                <AccordionSummary>
                    <Typography className='infoAccordionText'>
                        {props.name}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails elevation={0}>{children}</AccordionDetails>
            </Accordion>
        </>
    );
};

export default InfoAccordion;
