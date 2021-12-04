import React from 'react';
import {
    Timeline as LabTimeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';
import { Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { headShake } from 'react-animations';

const HeadShake = styled.div`
    animation: 2s ${keyframes`${headShake}`} infinite;
`;

const Timeline = () => {
    return (
        <>
            <p>sdasdas</p>
            <p>sdasdas</p>
            <p>sdasdas</p>
            <LabTimeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <HeadShake>
                            <Button>
                                <TimelineDot />
                            </Button>
                        </HeadShake>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
            </LabTimeline>
        </>
    );
};

export default Timeline;
