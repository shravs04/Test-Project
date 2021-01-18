import React from 'react';
import classes from './Homepage.module.css';
import {Link} from 'react-router-dom';


export function Homepage(props) {
    
    console.log(window.location.pathname);

    return (
        <div className={classes.Homepage}>

            <div className={classes.Seriesdiv} onClick={() => props.setHeaderTitle("Series")}>
                <Link className={classes.None} to="/seriespage"><div className={classes.Main}>
                    <h1>SERIES</h1> 
                </div></Link>
                <p>Popular Series</p>
            </div>


            <div className={classes.Moviesdiv} onClick={() => props.setHeaderTitle("Movies")}>
                <Link className={classes.None} to="/moviespage"><div className={classes.Main}>
                    <h1>MOVIES</h1> 
                </div></Link>
                <p>Popular Movies</p>
            </div>
             
        </div>
    )
}
