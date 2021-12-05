import React from 'react';
import { CircularProgress, Box, Pagination, Typography } from '@mui/material';
import CardBox from '../components/CardBox';
import fetchData from '../utils/fetchData';
import SetTitle from '../hooks/setTitle';

const News = () => {
    const [data, setData] = React.useState();
    const [loader, setLoader] = React.useState(true);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        fetchData(`api/?page=${page}`, setData, setLoader);
    }, [page]);

    SetTitle('Новости');

    return (
        <div>
            <Typography variant="h2" gutterBottom align="center">
                Новости
            </Typography>
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
            <Pagination
                variant="outlined"
                color="primary"
                count={data?.pages}
                showFirstButton
                showLastButton
                onChange={(event, val) => {
                    setPage(val);
                }}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '40px 0 0 0',
                    paddingBottom: '20px',
                }}
            />
        </div>
    );
};

export default News;
