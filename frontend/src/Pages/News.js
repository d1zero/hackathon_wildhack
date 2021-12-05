import React from 'react';
import {
    CircularProgress,
    Box,
    Pagination,
    // Typography
} from '@mui/material';
import CardBox from '../components/CardBox';
import fetchData from '../utils/fetchData';

const News = () => {
    const [data, setData] = React.useState();
    const [loader, setLoader] = React.useState(true);
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        fetchData(`api/?page=${page}`, setData, setLoader);
    }, [page]);

    const urlParams = Number(
        new URLSearchParams(window.location.search).get('page')
    );
    if (urlParams && urlParams !== page) {
        setPage(urlParams);
    }

    return (
        <div>
            <h2>Новости</h2>
            {loader ? (
                <CircularProgress />
            ) : (
                <>
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
                    <Pagination
                        count={data?.pages}
                        showFirstButton
                        showLastButton
                        page={page}
                        onChange={(event, val) => {
                            if (val !== page) {
                                setPage(val);
                                window.history.pushState(
                                    '',
                                    '',
                                    `?page=${val}`
                                );
                            }
                        }}
                    />
                </>
            )}
            {/* <Typography>{page}</Typography> */}
        </div>
    );
};

export default News;
