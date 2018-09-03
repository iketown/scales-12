import React, { Component } from "react";
import posed from "react-pose";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-areas: "topLeft top topRight" "bottomLeft bottom bottomRight";
  grid-gap: 1rem;
`;

const PosedGridItem = posed.div({
  topLeft: { gridArea: "topLeft" },
  topRight: { gridArea: "topRight" }
});
const GridItem = styled(PosedGridItem)`
  grid-area: ${p => p.area};
  border: 1px solid blue;
`;

export default class AnimatedGrid extends Component {
  render() {
    return (
      <Grid>
        <GridItem area="topLeft">
          <h1 area="">1</h1>
        </GridItem>
        <GridItem area="topLeft">
          <h1 area="">2</h1>
        </GridItem>
        <GridItem area="topLeft">
          <h1 area="">3</h1>
        </GridItem>
        <GridItem area="topLeft">
          <h1 area="">4</h1>
        </GridItem>
        <GridItem area="topLeft">
          <h1 area="">5</h1>
        </GridItem>
        <GridItem area="topLeft">
          <h1 area="">6</h1>
        </GridItem>
      </Grid>
    );
  }
}
