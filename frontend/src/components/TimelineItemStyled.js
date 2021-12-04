import React from 'react';
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@mui/lab';

const TimelineItemStyled = (props) => {
    const { item } = props;
    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                {item.publish_datetime.split(' ')[0]}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ m: 'auto 0' }}>{item.title}</TimelineContent>
        </TimelineItem>
    );
};

// TimelineItemStyled.defaultProps = {
//     title: 'Title is not defined',
// };

export default TimelineItemStyled;
