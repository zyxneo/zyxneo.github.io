// @flow

import React from 'react';

import {
  Loader,
} from 'semantic-ui-react'

import './ImageLoader.css';

type ImageLoaderProps = {
  src: string
}

type ImageLoaderState = {
  isLoading: boolean
}

class ImageLoader extends React.Component<ImageLoaderProps, ImageLoaderState> {
  props: ImageLoaderProps;
  state: ImageLoaderState;

  constructor(props) {
    super(props);
    this.ImageLoaderHd = null;

    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {

    const hdLoaderImg = new Image();

    hdLoaderImg.src = `${this.props.src}`;

    hdLoaderImg.onloadstart = () => {
      this.setState({ isLoading: true });
    }

    hdLoaderImg.onload = () => {

      this.setState({ isLoading: false });

      this.ImageLoaderHd.setAttribute(
        'src',
        this.props.src
      );
      this.ImageLoaderHd.classList.add('image-loader-fade-in');
    }


  };

  render() {
    const { isLoading } = this.state
    const isLoadingClass = isLoading ? 'isLoading' : ''
    return (
      <div className={`image-loader-container ${isLoadingClass}`}>

        <img
          className="image-loader-loaded"
          ref={imageLoadedElem => this.ImageLoaderHd = imageLoadedElem}
        />

        <Loader active={isLoading} />

      </div>
    )
  }

}

export default ImageLoader;
