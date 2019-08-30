import React, {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';
import axios from "axios";
import {Route, Switch} from 'react-router-dom';

import SignUp from "./components/signup/signup.component";


// import {Card} from "./components/card/card.component";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         files: [],
         imagesPreviewUrls: [],
         text: '',
         collectionNames: [],
         tags: []
      };
      // this.handleImageChange = this.handleImageChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit = (e) => {
      //Submit handler
      e.preventDefault();
      const formData = new FormData();
      // for (let file of this.state.files) {
      //    formData.append('image', file);
      // }
      this.state.files.forEach(file => {
         formData.append('image', file);
         formData.append("collection", this.state.collectionNames.indexOf(this.state.files[file]))
      });
      for (const [key, value] of formData) {
         console.log("key", key, "value", value);
      }
      console.log("files", this.state.files);
      console.log("formData", formData);
      axios.post('http://10.0.1.6:4000/background', formData)
          .then(response => {
             console.log(response)
          });

   };

   handleCollectionNames = (e) => {
      console.log("e.target.value", e.target.value)
      this.setState({collectionNames: [...this.state.collectionNames, e.target.value]}, () => {
         console.log("this.state.collectionNames", this.state.collectionNames);
      });
   };

   handleTags = (e) => {
      this.setState({tags: [...this.state.tags, e.target.value]}, () => {
         console.log(this.state.tags);
      });
   };

   handleImageChange = (e) => {
      e.preventDefault();

      let files = Array.from(e.target.files);

      files.forEach((file) => {
         let reader = new FileReader();
         reader.onloadend = () => {
            this.setState({
               files: [...this.state.files, file],
               imagesPreviewUrls: [...this.state.imagesPreviewUrls, reader.result]
            }, () => {
               console.log("this.state.file", this.state.files);
            });
         };
         reader.readAsDataURL(file);
      });
   };

   background = () => (
       <form onSubmit={this.handleSubmit}>
          <input type="file" accept='image/*' onChange={this.handleImageChange} multiple/>
          <button type="submit" onClick={this.handleSubmit}>Upload Image</button>
          <CardList imagesPreviewUrls={this.state.imagesPreviewUrls} collectionNames={this.state.handleCollectionNames}/>
       </form>
   );

   sticker = () => (
       <form onSubmit={this.handleSubmit}>
          <input type="file" accept='image/*' onChange={this.handleImageChange} multiple/>
          <button type="submit" onClick={this.handleSubmit}>Upload Image</button>
          <CardList imagesPreviewUrls={this.state.imagesPreviewUrls} collectionNames={this.state.handleCollectionNames} tags={this.state.handleTags}/>
       </form>
   );


   render() {
      return (
          <div>
             <Switch>
                <Route exact path='/background' component={this.background}/>
                <Route exact path='/sticker' component={this.sticker}/>
                <Route exact path='/signup' component={SignUp}/>
             </Switch>
          </div>
      )
   }
}

export default App;
