const fetchData = async (uri, setter, loader) => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/${uri}`, {
        headers: {
            'Content-Type': 'Application/json',
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setter(data);
            console.log(data);
            loader(false);
        })
        .catch((e) => {
            console.log(e);
            setter(null);
            loader(true);
        });
};

export default fetchData;
