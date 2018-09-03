import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
import "./slickStyles.css";
// import "slick-carousel/slick/slick-theme.css";

const SliderDiv = styled.div`
  width: 400px;
  border: 1px solid red;
  margin: 3rem auto;
`;
class SimpleSlider extends Component {
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SliderDiv>
        <Slider {...settings} ref={c => (this.slider = c)}>
          <div>
            <h3>1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
              quibusdam necessitatibus sed quos eveniet molestias voluptates
              enim nisi. Provident numquam suscipit dicta dolorum omnis earum
              excepturi cupiditate consectetur a sequi.
            </p>
            <div style={{ width: "100%" }}>
              <button onClick={this.previous}>previous</button>
              <button onClick={this.next}>next</button>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </SliderDiv>
    );
  }
}

export default SimpleSlider;
