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
import CircularProgress from '@mui/material/CircularProgress';
import TimelineItemStyled from '../components/TimelineItemStyled';
import fetchData from '../utils/fetchData';

const Timeline = () => {
    const [data, setData] = React.useState();
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        fetchData('news/timeline/', setData, setLoader);
    }, []);

    return (
        <>
            <h2>Timeline</h2>
            <p>Text of description</p>

            {loader ? (
                <CircularProgress />
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
