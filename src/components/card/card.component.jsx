import React from 'react';
import './card.styles.css';


// export const Card = props => (
//     <div className="card-container">
//        <img alt='previewImg' src={props.imagePreviewUrl} height="200" width="200"/>
//        <div>
//           {console.log("Card props", props)};
//           <input type="text" placeholder="collection name" onChange={props.collectionNames}/>
//           <input type="text" placeholder="tag"/>
//        </div>
//     </div>
// );

class Card extends React.Component {

   render() {
      return (
          <div className="card-container">
             <img alt='previewImg' src={this.props.imagePreviewUrl} height="200" width="200"/>
             <div>
                {console.log("Card props", this.props)}
                <input type="text" placeholder="collection name" onChange={this.props.collectionNames}/>
                <input type="text" placeholder="tag"/>
             </div>
          </div>
      )
   }
}

export default Card;
