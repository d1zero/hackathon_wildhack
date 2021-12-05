import React from 'react';
import {
    Timeline as LabTimeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@mui/lab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {
    CircularProgress,
    Dialog,
    // DialogTitle
} from '@mui/material';
// import Slide from '@mui/material/Slide';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TimelineItemStyled from '../components/TimelineItemStyled';
import CardBox from '../components/CardBox';
import fetchData from '../utils/fetchData';

const Timeline = () => {
    const [data, setData] = React.useState();
    const [loader, setLoader] = React.useState(true);
    const [activeCard, setActiveCard] = React.useState({ id: null });

    React.useEffect(() => {
        fetchData('api/timeline/', setData, setLoader);
    }, []);

    const handleDialogClose = () => {
        setActiveCard({ id: null });
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

    // const Transition = React.forwardRef((props, ref) => {
    //     return <Slide direction="left" ref={ref} {...props} />;
    // });

    return (
        <>
            <h2>Таймлайн</h2>
            <p>Text of description</p>

            {loader ? (
                <CircularProgress />
            ) : (
                <>
                    <LabTimeline className="timeline">
                        <TimelineItem>
                            <TimelineOppositeContent
                                sx={{
                                    m: 'auto 0',
                                    maxWidth: '70px',
                                    minWidth: '70px',
                                }}
                            />
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
                                    visibleCard={item.id === activeCard}
                                    setVisibleCard={(card) => {
                                        setActiveCard(card);
                                    }}
                                />
                            );
                        })}
                    </LabTimeline>
                    {/* <CardFadeIn>
                        {visibleCard && (
                            <CardBox
                                styles={{
                                    position: 'relative',
                                    marginRight: '30px',
                                    marginTop: '50px',
                                    visibility: visibleCard
                                        ? 'visible'
                                        : 'hidden',
                                }}
                                item={item}
                            />
                        )}
                    </CardFadeIn> */}
                    {(activeCard.id, isMobile)}
                    <Dialog
                        open={activeCard.id !== null}
                        onClose={handleDialogClose}
                        scroll="paper"
                        // TransitionComponent={Transition}
                        // onBackdropClick={isMobile ? handleDialogClose : null}
                        // BackdropComponent={null}
                    >
                        {activeCard.id !== null && (
                            <CardBox
                                styles={{
                                    position: 'relative',
                                    // marginRight: '30px',
                                    // marginTop: '50px',
                                }}
                                item={activeCard}
                            />
                        )}
                    </Dialog>
                </>
            )}
        </>
    );
};

export default Timeline;
