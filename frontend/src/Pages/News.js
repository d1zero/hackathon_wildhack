import React from 'react';
import { CircularProgress, Box, Pagination, Typography } from '@mui/material';
import CardBox from '../components/CardBox';
import fetchData from '../utils/fetchData';

const News = () => {
    const [data, setData] = React.useState();
    const [loader, setLoader] = React.useState(true);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        fetchData(`api/?page=${page}`, setData, setLoader);
    }, [page]);

    return (
        <div>
            <h2>Новости</h2>
            {loader ? (
                <CircularProgress />
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
                    {data.data.map((item) => {
                        return <CardBox item={item} key={item.id} />;
                    })}
                </Box>
            )}
            <Typography>{page}</Typography>
            <Pagination
                count={data?.pages}
                showFirstButton
                showLastButton
                onChange={(event, val) => {
                    setPage(val);
                }}
            />
        </div>
    );
};

export default News;
