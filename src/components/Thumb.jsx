import React from "react";
import '../styles/Thumb_styles.css';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';



function Thumb(props) {


        return (


                  
                  <Link className="card_div" to={"/fiche-logement/"+ props.id} key={ props.id}>
                      
            <div className="title_div">
              <h5>{props.title}</h5>
              </div>
                      
                    <div className="div_img">
                          
                <div className="mask_img"></div>
              
                        <img src={props.cover} alt={props.description}></img>
                          
                    </div>
                          

               
                    
                </Link>



          );
        };
    
Thumb.propTypes = {

  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  description: PropTypes.string,


}

export default Thumb


