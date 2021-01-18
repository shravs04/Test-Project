import React from 'react';
import classes from './Moviespage.module.css';
import Axios from 'axios';


export function Moviespage(props) {
    
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
        

        <div className={classes.Moviespage}>

            {
                data.map((item) => {
                  
                        if(item["releaseYear"] >= 2010 && item["programType"] === "movie"){
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
