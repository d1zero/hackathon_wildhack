import React from 'react';
import { Timeline as Timelline } from '@mui/lab';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Button } from '@mui/material';

const Timeline = () => {
    return (
        <div>
            <p>sdasdas</p>
            <p>sdasdas</p>
            <p>sdasdas</p>
            <Timelline>
                <TimelineItem>
                    <TimelineSeparator>
                        <Button onClick>
                            <TimelineDot />
                        </Button>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Eat</TimelineContent>
                </TimelineItem>
            </Timelline>
        </div>
    );
};

export default Timeline;
