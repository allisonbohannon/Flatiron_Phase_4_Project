import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;


export const Card = styled.div`
  display: inline-grid;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1em;
  margin: 2em;
  width: 24em;
  height: 40em;
  font-family: Quicksand, arial, sans-serif;
  border: 1px solid gray;
  box-shadow: 5px 10px #888888
  border-radius: 5px;
`;

export const DetailCard = styled.div`
  display: inline-grid;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1em;
  margin: 2em;
  width: 40em;
  height: 80em;
  font-family: Quicksand, arial, sans-serif;
  border: 1px solid gray;
  box-shadow: 5px 10px #888888
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  display: flex; 
  justify-contents: 
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 8px;
  padding-left: 8px;
`;

export const CardImage = styled.image`
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardScroller = styled.div`
  margin: 0 auto;
  height: 25%;
  width: 80%;
  border: 1px solid black
  overflow: auto;
`

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  margin: 3px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background-color: rgb(101,62,82);
  border: 1 px solid;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;
