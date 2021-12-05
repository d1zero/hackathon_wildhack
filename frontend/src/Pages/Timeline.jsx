import React from 'react';
import {
    Timeline as LabTimeline,
    TimelineItem,
    TimelineContent,
    TimelineOppositeContent,
} from '@mui/lab';
import { CircularProgress, Typography } from '@mui/material';
import TimelineItemStyled from '../components/TimelineItemStyled';
import fetchData from '../utils/fetchData';
import SetTitle from '../hooks/setTitle';

const Timeline = () => {
    const [data, setData] = React.useState();
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        fetchData('api/timeline/', setData, setLoader);
    }, []);

    SetTitle('Таймлайн');

    return (
        <>
            <Typography variant="h2" align="center" gutterBottom>
                Таймлайн Камчатки
            </Typography>
            <Typography
                variant="body1"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
                gutterBottom
            >
                Данный Таймлайн проведёт вас за руку сквозь природные события
                Камчатского края.
                <br />
                Вы сможете увидеть и прочитать, что происходило на Камчатке за
                долго до этого
            </Typography>

            {loader ? (
                <CircularProgress
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                />
            ) : (
                <LabTimeline className="timeline">
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{
                                m: 'auto 0',
                                maxWidth: '70px',
                                minWidth: '70px',
                            }}
                        />

                        <TimelineContent />
                    </TimelineItem>
                    {data.map((item) => {
                        return (
                            <TimelineItemStyled
                                key={data.indexOf(item)}
                                item={item}
                            />
                        );
                    })}
                </LabTimeline>
            )}
        </>
    );
};

export default Timeline;
