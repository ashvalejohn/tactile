import React, { Component } from 'react';

class ImageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({ images: this.props.photoRoll() });
    console.log("******");
    console.log(this.state.images);
  }

  render() {
    console.log(this.state.images);
    return (
      <img alt="Test outfit" src="http://res.cloudinary.com/ashvalejohn/image/upload/v1511394433/2017-dec1-lwl-img5_uca9mz.jpg" />
    );
  }
}

export default ImageIndex;
