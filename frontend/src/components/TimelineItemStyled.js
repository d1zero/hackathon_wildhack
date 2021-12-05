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

const HeadShake = styled.div`
    animation: 2s ${keyframes`${headShake}`} 1;
`;

const TimelineItemStyled = (props) => {
    const [visibleCard, setVisibleCard] = React.useState(false);
    const [onHover, setHover] = React.useState(false);
    const { item } = props;
    const handleClick = () => {
        setVisibleCard(!visibleCard);
    };
    const handleHover = () => {
        setHover(!onHover);
    };
    return (
        <>
            <TimelineItem
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={handleClick}
            >
                <TimelineOppositeContent
                    sx={{ m: 'auto 0', maxWidth: 'fit-content' }}
                >
                    {item.publish_datetime}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    {onHover ? (
                        <HeadShake>
                            <TimelineDot
                                variant={visibleCard ? 'outlined' : 'filled'}
                            />
                        </HeadShake>
                    ) : (
                        <TimelineDot
                            variant={visibleCard ? 'outlined' : 'filled'}
                        />
                    )}
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ m: 'auto 0' }}>
                    {item.title}
                </TimelineContent>
            </TimelineItem>
            {visibleCard && <CardBox item={item} />}
        </>
    );
};

// TimelineItemStyled.defaultProps = {
//     title: 'Title is not defined',
// };

export default TimelineItemStyled;
