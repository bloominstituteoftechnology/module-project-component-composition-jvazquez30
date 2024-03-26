import React from "react";

export default function Figure({ imageURL, dateOf }) {
    return (
      <figure>
        <img src={imageURL} />
        <figcaption>Captured on {dateOf}</figcaption>
      </figure>
    )
  }