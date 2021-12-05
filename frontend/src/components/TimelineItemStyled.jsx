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
import { headShake, fadeInLeft } from 'react-animations';
import CardBox from './CardBox';

const TimelineItemStyled = ({ item }) => {
    const [visibleCard, setVisibleCard] = React.useState(false);
    const HeadShake = styled.div`
        animation: 2s ${keyframes`${headShake}`} 1;
    `;
    const CardFadeIn = styled.div`
        animation: 2s ${keyframes`${fadeInLeft}`} 1;
    `;

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{
                    m: 'auto 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}
            >
                <CardFadeIn>
                    <CardBox
                        styles={{
                            position: 'relative',
                            marginRight: '30px',
                            marginTop: '50px',
                            visibility: visibleCard ? 'visible' : 'hidden',
                        }}
                        item={item}
                    />
                </CardFadeIn>
                {item.publish_datetime}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <HeadShake
                    onClick={() => {
                        setVisibleCard(!visibleCard);
                    }}
                >
                    <TimelineDot
                        variant={visibleCard ? 'outlined' : 'filled'}
                    />
                </HeadShake>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ m: 'auto 0' }}>{item.title}</TimelineContent>
        </TimelineItem>
    );
};

export default TimelineItemStyled;
