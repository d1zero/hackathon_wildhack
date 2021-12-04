import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
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
            <p>asdsda</p>
            <p>asdsda</p>
            <p>asdsda</p>
            <CardBox />
            {loader ? (
                <p>
                    {value !== null ? <CircularProgress /> : <b>Error 404</b>}
                </p>
            ) : (
                <div>
                    {value.map((item) => {
                        return <CardBox key={item.id} />;
                    })}
                </div>
            )}
        </div>
    );
};

export default News;
