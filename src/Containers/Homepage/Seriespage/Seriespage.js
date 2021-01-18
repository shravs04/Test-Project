import React from 'react';
import classes from './Seriespage.module.css';
import Axios from 'axios';


export function Seriespage(props) {
    
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        Axios.get('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
        .then((res) => {
            console.log(res.data.entries);
            setData(res.data.entries);
        })
        .catch((err) => {
            console.log("Something went Wrong");
        })

    }, [])

    
    return (
        

        <div className={classes.Seriespage}>

            {
                data.map((item) => {
                    if(item["releaseYear"] >= 2010 && item["programType"] === "series"){
                        return (
                            <div className={classes.Card}>
                                <img src={item["images"]["Poster Art"]["url"]} alt="Card"/>
                                <h3>{item.title}</h3>
                            </div>
                            )
                    }
                    
                })
            }

        </div>
    )
}
