import React from "react";
import { Card, Image } from "semantic-ui-react";

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
