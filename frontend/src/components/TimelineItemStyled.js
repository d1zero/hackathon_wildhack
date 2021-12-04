import React from 'react';
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@mui/lab';
import styled, { keyframes } from 'styled-components';
import { headShake } from 'react-animations';
import CardBox from './CardBox';

const TimelineItemStyled = (props) => {
    const [visibleCard, setVisibleCard] = React.useState(false);
    const { item } = props;
    const HeadShake = styled.div`
        animation: 2s ${keyframes`${headShake}`} 1;
    `;
    return (
        <>
            <TimelineItem>
                <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                    {item.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <HeadShake>
                        <TimelineDot
                            onMouseEnter={() => {
                                setVisibleCard(true);
                            }}
                            onMouseLeave={() => {
                                setVisibleCard(false);
                            }}
                        />
                    </HeadShake>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ m: 'auto 0' }}>
                    {item.title}
                </TimelineContent>
            </TimelineItem>
            {visibleCard ? (
                <CardBox style={{ position: 'absolute', top: '0' }} />
            ) : (
                <div />
            )}
        </>
    );
};

// TimelineItemStyled.defaultProps = {
//     title: 'Title is not defined',
// };

export default TimelineItemStyled;
