import React from "react";
import {Card} from '../card/card.component';
import './card-list.styles.css';

// function getRandomInt(max) {
//    return Math.floor(Math.random() * Math.floor(max));
// }

export const CardList = props => (
    <div className="card-list">
       {props.imagesPreviewUrls.map((imagePreviewUrl) => {
          return <Card key={imagePreviewUrl} imagePreviewUrl={imagePreviewUrl}/>
          // return <img key={imagePreviewUrl} alt='previewImg' src={imagePreviewUrl} height="100" width="100"/>
       })}
    </div>
);