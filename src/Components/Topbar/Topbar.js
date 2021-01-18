import React from 'react';
import classes from './Topbar.module.css';
import {Link} from 'react-router-dom';


export function Topbar(props) {
    
    console.log(window.location.pathname);

    const title = window.location.pathname;

    return (
        <div className={classes.Header}>

          <div className={classes.Topwrapper}>
              
            <Link to="/" className={classes.Leftsection}><div>
                 <h1>DEMO <span>Streaming</span></h1>
             </div></Link>   

             <nav>
                 <a>Log in</a>
                 <div className={classes.Rightitem}>
                     <a>Start your free trial</a>
                 </div>   
             </nav>

           </div>   

             <div className={classes.Tiles}>
                 <h1>Popular {title === "/" ? "Tile" : title === "/seriespage" ? "Series" : "Movies"}</h1>
             </div>

        </div>
    )
}
