import React from "react";
import Figure from "./Figure";
import styled from "styled-components";

const StyledCard = styled.div`
    border: 2px solid black;
    border-radius: 12px;
    padding: 2rem;


    h2 {
        color: royalblue;
        font-size: 2em;
    }
    p {
        margin:  0 0 1.5rem 0;
        &::first-line {
            font-size: 1.3em;
        }
    }

`

export default function Card({ title, text, imageURL, date }) {
    return (
      <StyledCard className='card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <Figure 
        imageURL={imageURL}
        dateOf={date}
        />
      </StyledCard>
    )
  }