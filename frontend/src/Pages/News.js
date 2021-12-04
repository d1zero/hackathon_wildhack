import React from 'react';
import CardBox from '../components/Header/CardBox';
import fetchData from '../utils/fetchData';

const News = () => {
    const [value, setValue] = React.useState();
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        fetchData('news/', setValue, setLoader);
    }, []);

    return (
        <div>
            <p>asdsda</p>
            <p>asdsda</p>
            <p>asdsda</p>
            <CardBox />
            {loader ? (
                <div>Loader</div>
            ) : (
                <div>
                    {value.map((news) => {
                        return <div>{news.id}</div>;
                    })}
                </div>
            )}
        </div>
    );
};

export default News;
