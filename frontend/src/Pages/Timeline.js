import React from 'react';
import './Timeline.css';
import {
    Timeline as LabTimeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
} from '@mui/lab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CircularProgress from '@mui/material/CircularProgress';
import TimelineItemStyled from '../components/TimelineItemStyled';
import fetchData from '../utils/fetchData';

const Timeline = () => {
    const [value, setValue] = React.useState();
    const [loader, setLoader] = React.useState(true);

    // React.useEffect(() => {
    //     fetchData('news/timeline/', setValue, setLoader);
    // }, []);

    // debug
    React.useEffect(() => {
        fetchData('news', setValue, setLoader);
    }, []);

    return (
        <>
            <h2>Timeline</h2>
            <p>Text of description</p>

            {loader ? (
                <p>
                    {value !== null ? <CircularProgress /> : <b>Error 404</b>}
                </p>
            ) : (
                <LabTimeline className="timeline">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined">
                                <ArrowUpwardIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent />
                    </TimelineItem>
                    {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Убрать .data после дебага */}
                    {value.data.map((item) => {
                        return <TimelineItemStyled item={item} key={item.id} />;
                    })}
                </LabTimeline>
            )}
        </>
    );
};

export default Timeline;
