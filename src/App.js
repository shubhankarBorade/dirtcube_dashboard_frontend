import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import axios from "axios";

// import {Card} from "./components/card/card.component";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         files: [],
         imagesPreviewUrls: []
      };
      // this.handleImageChange = this.handleImageChange.bind(this);
      // this._handleSubmit = this._handleSubmit.bind(this);
   }

   _handleSubmit = (e) => {
      //Submit handler
      e.preventDefault();
      const formData = new FormData();
      // for (let file of this.state.files) {
      //    formData.append('image', file);
      // }
      this.state.files.forEach(file => {
         formData.append('image', file);
      })
      console.log("formData", formData);
      console.log("state", this.state.files);
      axios.post('http://10.0.1.6:4000/test-data', formData)
          .then(response => {
             console.log(response)
          });
      // fetch("http://localhost:4000/test-data", {
      //    method: "post",
      //    body: formData
      // }).then(res => console.log(res)).catch(console.error);

   }

   handleImageChange = (e) => {
      e.preventDefault();

      let files = Array.from(e.target.files);

      files.forEach((file) => {
         let reader = new FileReader();
         reader.onloadend = () => {
            this.setState({
               files: [...this.state.files, file],
               imagesPreviewUrls: [...this.state.imagesPreviewUrls, reader.result]
            });
         }
         reader.readAsDataURL(file);
      });
   }

   render() {
      return (
          <div>
             <form onSubmit={this._handleSubmit}>
                <input type="file" accept='image/*' onChange={this.handleImageChange} multiple/>
                <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
                <CardList imagesPreviewUrls={this.state.imagesPreviewUrls}/>
             </form>
          </div>
      )
   }
}

export default App;
