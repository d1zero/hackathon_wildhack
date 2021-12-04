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

const Timeline = () => {
    return (
        <>
            <p>sdasdas</p>
            <p>sdasdas</p>
            <p>sdasdas</p>
            <LabTimeline>
                <TimelineItem>
                    <TimelineSeparator>
                        <Button onClick>
                            <TimelineDot />
                        </Button>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
            </LabTimeline>
        </>
    );
};

export default Timeline;
