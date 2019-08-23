import React from "react";

class TagInput extends React.Component{
   render() {
      return(
          <div>
             <input type="text" onChange={this.props.action}/>
          </div>
      )
   }
}

export default TagInput;