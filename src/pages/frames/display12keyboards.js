const frame2 = (
    <div>
      <p>
        Each of the 12 Major Scales has its own unique pattern of UPs and
        DOWNs.
      </p>

      <Button>continue</Button>
      <ScaleGrid pose={"in"}>
        {Object.keys(fullScales).map(s => {
          return (
            <ScaleGridItem key={s}>
              <KeyboardDisplayOnly
                bottomKey={edgeKeys[s].bottom}
                topKey={edgeKeys[s].top}
                keysToLabel={""}
                notesToShow={fullScales[s]}
                keyboardScale={0.2}
                scaleShapes={scaleShapes[s]}
                shapeToShow={this.state.shapeSelected}
                showCircles={true}
                fadeKeys={fadeKeys}
                displayText={fullScales[s][0].slice(0, -1)}
                displayTitleCircle
              />
            </ScaleGridItem>
          );
        })}
      </ScaleGrid>

      <p>
        ... but there is an easier way. First, let's{" "}
        <Button onClick={this.toggleFadeKeys}>isolate the shapes</Button>
      </p>
    </div>