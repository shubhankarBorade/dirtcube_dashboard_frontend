import React from 'react';
import './card.styles.css';


export const Card = props => (
    <div className="card-container">
       <img alt='previewImg' src={props.imagePreviewUrl} height="200" width="200"/>
       <div>
          <input type="text" placeholder="description"/>
          <input type="text" placeholder="tag"/>
       </div>
    </div>
);