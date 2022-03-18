import React, { useState, useEffect, useRef } from "react";

import { Container, Header, Icon, Image, Modal } from "semantic-ui-react";

import { ImageLoader } from "../index";

import { ProjectImageProps } from "../ProjectItem";

import "./slideshow.css";

type Props = {
  items: ProjectImageProps[];
  item: ProjectImageProps;
  selectedIndex: number;
  title: string;
  alias: string;
};

const inlineStyle = {
  modal: {
    marginTop: "0px !important",
    marginLeft: "auto",
    marginRight: "auto",
  },
};

const Slideshow = function (props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(props.selectedIndex || 0);

  const { item, items, title, alias } = props;

  const slideshowRef = useRef<HTMLDivElement>(null);

  const selectedItem = items[selectedIndex];

  const showPreviousPaginator = selectedIndex !== 0;
  const showNextPaginator = selectedIndex !== items.length - 1;
  // imageContainer: HTMLElement;

  useEffect(() => {
    const slideshow = slideshowRef.current;
    if (slideshow) {
      console.log("asdfas");
      slideshow.scrollTop = 0;
    }
  }, [selectedIndex]);

  function showPrew() {
    const currentIndex = selectedIndex;
    if (currentIndex > 0) {
      setSelectedIndex(currentIndex - 1);
    }
  }

  function showNext() {
    const currentIndex = selectedIndex;
    if (currentIndex < items.length - 1) {
      setSelectedIndex(currentIndex + 1);
    }
  }

  return (
    <Modal
      trigger={
        <Image as="a" className="thumbnail">
          <ImageLoader src={`/images/projects/${alias}/${item.src}`} />
        </Image>
      }
      closeIcon
      style={inlineStyle.modal}
    >
      <Modal.Header>
        <Header>
          {title} - {selectedItem.title}
        </Header>
      </Modal.Header>
      <div className="slideshow wrapper">
        {showPreviousPaginator && (
          <div onClick={showPrew} className="paging prew">
            <Icon name="chevron left" size="huge" circular />
          </div>
        )}
        {showNextPaginator && (
          <div onClick={showNext} className="paging next">
            <Icon name="chevron right" size="huge" circular />
          </div>
        )}

        <Modal.Content
          image
          scrolling
          className="slideshow body"
          ref={slideshowRef}
        >
          <Container textAlign="center" className="slideshow content">
            <Image
              className="slideshow"
              src={`/images/projects/${alias}/${selectedItem.src}`}
            />
            <div
              className="slideshow desc"
              dangerouslySetInnerHTML={{ __html: selectedItem.desc || "" }}
            />
          </Container>
        </Modal.Content>
      </div>
      <Modal.Actions>
        <Container textAlign="center">
          <Image.Group size="tiny">
            {items &&
              items.map((item, index) => (
                <Image
                  src={`/images/projects/${alias}/${item.src}`}
                  key={item.src}
                  as="a"
                  onClick={() => setSelectedIndex(index)}
                  className={
                    index === selectedIndex
                      ? "slideshow thumbnail selected"
                      : "slideshow thumbnail deselected"
                  }
                />
              ))}
          </Image.Group>
        </Container>
      </Modal.Actions>
    </Modal>
  );
};

export default Slideshow;
