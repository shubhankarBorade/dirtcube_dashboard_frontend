import React from "react";
import Card from '../card/card.component';
import './card-list.styles.css';

// function getRandomInt(max) {
//    return Math.floor(Math.random() * Math.floor(max));
// }

// export const CardList = props => (
//     <div className="card-list">
//        {props.imagesPreviewUrls.map((imagePreviewUrl) => {
//           return <Card key={imagePreviewUrl} imagePreviewUrl={imagePreviewUrl} collectionNames={props.collectionNames}/>
//        })}
//     </div>
//
// );

export default class CardList extends React.Component {
   render() {
      return (
          <div className="card-list">
             {this.props.imagesPreviewUrls.map((imagePreviewUrl) => {
                return <Card key={imagePreviewUrl} imagePreviewUrl={imagePreviewUrl}
                             collectionNames={this.props.collectionNames}/>
             })}
          </div>
      )
   }
}
