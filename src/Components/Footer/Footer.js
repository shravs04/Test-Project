import React from 'react';
import classes from './Footer.module.css';
import Appstore from '../../Assets/Appstore.png';
import Googleplay from '../../Assets/Googleplay.png';
import Microsoft from '../../Assets/Microsoft.png';


export function Footer(props) {
    

    return (
        <div className={classes.Footer}>

            <div className={classes.UpperItems}>
                <p>Home</p><span>|</span>  
                <p>Terms and Conditions</p><span>|</span>  
                <p>Privacy Policy</p><span>|</span>  
                <p>Collection Statement</p><span>|</span>  
                <p>Help</p><span>|</span>  
                <p>Manage Account</p><span>|</span>   
            </div>

            <div className={classes.Copyright}>
                <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
            </div>

         <div className={classes.Bottomwrapp}> 

            <div className={classes.Icons}>
               <i class="fab fa-facebook-f"></i>
               <i class="fab fa-twitter"></i>
               <i class="fab fa-instagram"></i>
            </div>

            <div className={classes.Images}>
               <img src={Appstore} alt="Appstore"/>  
               <img src={Googleplay} alt="Googleplay"/> 
               <img src={Microsoft} alt="Microsoft"/> 
            </div>

         </div>   

            
        </div>
    )
}
