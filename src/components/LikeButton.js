import React, { Component } from 'react';

class LikeButton extends Component {
incrementLike = () =>{
  console.log("clicked")
  this.props.increment();
}
render(){
  return (
    <div onClick={()=> this.incrementLike()}>
        &hearts;
    </div>
  )
}

}

export default LikeButton;
