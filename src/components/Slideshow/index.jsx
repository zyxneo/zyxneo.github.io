// @flow

import React from 'react'
// import Link from 'gatsby-link';

import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Modal,
} from 'semantic-ui-react'

import {
  ImageLoader,
} from '../index.js'

import './slideshow.css';

type SlideshowImage = {
  src: string
}

type SlideshowProps = {
  items: Array<SlideshowImage>,
  item: SlideshowImage,
  selectedIndex: number,
  title: string,
  alias: string,
}

type SlideshowState = {
  selectedIndex: number
}

const inlineStyle = {
  modal : {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

class Slideshow extends React.PureComponent<SlideshowProps, SlideshowState> {
  props: SlideshowProps;
  state: SlideshowState;

  imageContainer: HTMLElement;

  state = {
    selectedIndex: this.props.selectedIndex || 0
  };

  componentDidUpdate = () => {
    document.getElementById('slideshowUniquId').scrollTop = 0
  }

  setSelected = (id: Number) => {
    this.setState({ selectedIndex: id });
  }

  showPrew = () => {
    const currentIndex = this.state.selectedIndex;
    if (currentIndex > 0) {
      this.setState({ selectedIndex: currentIndex - 1 });
    }
  }

  showNext = () => {
    const currentIndex = this.state.selectedIndex;
    if (currentIndex < this.props.items.length - 1) {
      this.setState({ selectedIndex: currentIndex + 1 });
    }
  }

  render() {
    const { selectedIndex } = this.state;
    const {
      item,
      items,
      title,
      alias
    } = this.props;

    const selectedItem = items[selectedIndex]

    const showPreviousPaginator = (selectedIndex !== 0)
    const showNextPaginator = (selectedIndex !== items.length - 1)

    return (
      <Modal
        trigger={
          <Image
            as='a'
            className="thumbnail"
          >
            <ImageLoader src={`/images/projects/${alias}/${item.src}`}/>
          </Image>
        }
        closeIcon
        style={inlineStyle.modal}
      >
        <Modal.Header>
          <Header>{title} - {selectedItem.title}</Header>
        </Modal.Header>
        <div className="slideshow wrapper">

          {showPreviousPaginator && <div onClick={this.showPrew} className="paging prew">
            <Icon name="chevron left" size="huge" circular/>
          </div>}
          {showNextPaginator && <div onClick={this.showNext} className="paging next">
            <Icon name="chevron right" size="huge" circular/>
          </div>}

          <Modal.Content image scrolling className="slideshow body" id="slideshowUniquId">
            <Container textAlign='center' className="slideshow content">
              <Image className="slideshow" src={`/images/projects/${alias}/${selectedItem.src}`} />
              <div className="slideshow desc" dangerouslySetInnerHTML={{__html: selectedItem.desc}} />
            </Container>
          </Modal.Content>
        </div>
        <Modal.Actions>
          <Container textAlign='center'>
            <Image.Group size='tiny'>
            {
              items && items.map((item, index) => (
                <Image
                  src={`/images/projects/${alias}/${item.src}`}
                  key={item.src}
                  as='a'
                  onClick={() => (this.setSelected(index))}
                  className={(index === selectedIndex) ? 'slideshow thumbnail selected' : 'slideshow thumbnail deselected'}
                />
              ))
            }
            </Image.Group>
          </Container>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default Slideshow
