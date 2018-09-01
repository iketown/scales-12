import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import posed from "react-pose";
import Key from "./Key.jsx";
import DumbKey from "./DumbKey";
import { keyObject, keyList, noteConverter } from "../../keySVGs/keyboardUtils";
import { scale } from "style-value-types";

const KeyboardDiv = styled.div`
  display: flex;
  padding: 3px;
  width: ${({ keysWide, keyboardScale }) =>
    keysWide * 79 * keyboardScale + 30}px;
  z-index: 10;
  position: relative;
`;

const WhiteKeyDiv = styled.div`
  position: relative;
  margin: ${p => p.keyboardScale * 1}px;
`;
const keyConfig = {
  in: { x: "0vw", opacity: 1, delayChildren: 50 },
  out: { x: "50vw", opacity: 0 }
};
const keyboardConfig = {
  in: { staggerChildren: 20 },
  out: { staggerChildren: 30, staggerDirection: -1 }
};

class Keyboard extends Component {
  state = {
    keyGroups: [],
    selected: false
  };

  componentDidMount() {
    const { bottomKey, topKey } = this.props;
    this.setState({
      keyGroups: keyList(bottomKey, topKey)
    });
  }

  getCircleShape = noteName => {
    const { scaleShapes, notesToShow, shapeToShow } = this.props;
    const colorBottom = scaleShapes.bottom === shapeToShow;
    const colorTop = scaleShapes.top === shapeToShow;
    const firstFour = notesToShow.filter((n, i) => i < 4);
    const lastFour = notesToShow.filter((n, i) => i >= 4);
    if (colorBottom && firstFour.includes(noteName)) return "yellow";
    if (colorTop && lastFour.includes(noteName)) return "yellow";
    if (notesToShow.includes(noteName)) return "outline";
    return null;
  };

  render() {
    const {
      bottomKey,
      keysToLabel,
      keyboardId,
      showShapeBackground,
      keyboardScale,
      scaleShapes,
      showCircles,
      fadeInactive,
      notesToShow
    } = this.props;
    return (
      <KeyboardDiv>
        {this.state.keyGroups.map(key => {
          const sharedProps = {
            keyboardId,
            showCircles
          };
          return (
            <WhiteKeyDiv
              key={`${key[0]} whiteKeyDiv`}
              keyboardScale={keyboardScale}
            >
              <DumbKey
                {...sharedProps}
                key={`${key[0]} whiteKey`}
                noteShape={keyObject[key[0]].shape}
                noteName={key[0]}
                circleType={this.getCircleShape(key[0])}
                showLabel={keysToLabel && keysToLabel.includes(key[0])}
                showShapeBackground={showShapeBackground}
                keyboardScale={keyboardScale}
                fade={fadeInactive}
                numberOfScale={notesToShow.findIndex(n => n === key[0]) + 1}
              />
              {key.length > 1 && (
                <DumbKey
                  {...sharedProps}
                  noteShape="flat"
                  key={`${key[0]} blackKey`}
                  noteName={key[1]}
                  hide={key[0] === bottomKey}
                  circleType={this.getCircleShape(key[1])}
                  showLabel={keysToLabel && keysToLabel.includes(key[1])}
                  showShapeBackground={showShapeBackground}
                  keyboardScale={keyboardScale}
                  numberOfScale={notesToShow.findIndex(n => n === key[1]) + 1}
                  fade={fadeInactive}
                />
              )}
            </WhiteKeyDiv>
          );
        })}
      </KeyboardDiv>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Keyboard);
