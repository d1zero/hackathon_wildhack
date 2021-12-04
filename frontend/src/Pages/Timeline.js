/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Timeline as LabTimeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TimelineItemStyled from '../components/TimelineItemStyled';
// import { Button } from '@mui/material';

const Timeline = () => {
    const exampleArray = [
        {
            title: 'Example News Title',
            date: '03.11.2021',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            source: 'https://example.com',
        },
        {
            title: 'Example Title 2 very-very long, longer, the longest and etc. but asdasdfasd_;fljasdfvn.,mn213f.123!',
            date: '10.10.2001',
            text: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            source: 'https://example.com',
            sourceName: 'Example Source',
        },
    ];
    const listItems = exampleArray.map((item) =>
        <TimelineItemStyled item={item}/>
    );
    return (
        <>
            <p>sdasdas</p>
            <p>sdasdas</p>
            <p>sdasdas</p>
            <LabTimeline className="timeline">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <ArrowUpwardIcon/>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent/>
                </TimelineItem>
                {listItems}
            </LabTimeline>
        </>
    );
};

export default Timeline;
