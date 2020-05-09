import React, {useState, useEffect} from 'react';
import DataDisplay from "../../components/data-display-component/data-display.component";
import photos from "../../data/photos.data";

// import userData from "../../data/user.data";

function DataPage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [columnNames, setColumnNames] = useState([])
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                console.log('results', result);
                setColumnNames(photos)
                setCurrentData(result);
            }, (error) => {
                setIsLoaded(false);
                setError(error);
            })
    }, [])

    if (!isLoaded) {
        return <div><h1>Loading....</h1></div>
    } else if (error) {
        return <div>{error}</div>
    } else {
        return (
            <div>
                <DataDisplay columnNames={columnNames} usersData={currentData}/>
            </div>
        )
    }
}

export default DataPage;