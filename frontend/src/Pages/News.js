import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CardBox from '../components/CardBox';
import fetchData from '../utils/fetchData';

const News = () => {
    const [value, setValue] = React.useState();
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        fetchData(window.location.pathname.substr(1), setValue, setLoader);
    }, []);

    return (
        <div>
            <h2>Новости</h2>
            {loader ? (
                <p>{value !== null ? <CircularProgress /> : <b>Error</b>}</p>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        columnGap: '10px',
                        rowGap: '15px',
                        flexWrap: 'wrap',
                        width: '100%',
                    }}
                >
                    {value.map((item) => {
                        return <CardBox item={item} key={item.id} />;
                    })}
                </Box>
            )}
        </div>
    );
};

export default News;
