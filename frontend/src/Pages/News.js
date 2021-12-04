import React from 'react';
import fetchData from '../utils/fetchData';

const News = () => {
    const [value, setValue] = React.useState();
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        fetchData('news/', setValue, setLoader);
    }, []);

    return (
        <div>
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
