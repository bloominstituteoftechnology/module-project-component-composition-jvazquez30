import React from "react";
import styled from "styled-components";

const StyledFigure = styled.figure`
max-width: 50%;

figcaption {
    font-style: italic;
}

`

export default function Figure({ imageURL, dateOf }) {
    return (
        <StyledFigure>
            <img src={imageURL} />
            <figcaption>Captured on {dateOf}</figcaption>
        </StyledFigure>
    )
}