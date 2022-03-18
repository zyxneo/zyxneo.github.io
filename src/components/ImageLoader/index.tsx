import React from "react";

import { Loader, HtmlImageProps } from "semantic-ui-react";

import "./ImageLoader.css";

type ImageLoaderProps = {
  src: string;
};

type ImageLoaderState = {
  isLoading: boolean;
  ImageLoaderImg?: null;
};

class ImageLoader extends React.Component<ImageLoaderProps, ImageLoaderState> {
  props: ImageLoaderProps;
  state: ImageLoaderState;
  ImageLoaderImg: HtmlImageProps;

  constructor() {
    super();
    this.ImageLoaderImg = null;

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    const LoaderImg = new Image();

    LoaderImg.src = `${this.props.src}`;

    LoaderImg.onloadstart = () => {
      this.setState({ isLoading: true });
    };

    LoaderImg.onload = () => {
      this.setState({ isLoading: false });

      this.ImageLoaderImg.setAttribute("src", this.props.src);
      this.ImageLoaderImg.classList.add("image-loader-fade-in");
    };
  }

  render() {
    const { isLoading } = this.state;
    const isLoadingClass = isLoading ? "isLoading" : "";
    return (
      <div className={`image-loader-container ${isLoadingClass}`}>
        <img
          className="image-loader-loaded"
          ref={(imageLoadedElem) => (this.ImageLoaderImg = imageLoadedElem)}
        />

        <Loader active={isLoading} />
      </div>
    );
  }
}

export default ImageLoader;
