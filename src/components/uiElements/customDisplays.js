import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
export const ScaleCard = ({ src, title, height }) => (
  <Card>
    <Image
      src={src}
      alt={title}
      style={{ height: height || "10rem", padding: "1rem" }}
    />
    <Card.Content>
      <Card.Description>{title}</Card.Description>
    </Card.Content>
  </Card>
);
