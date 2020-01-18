import React from "react";
import styled from "styled-components";

export default function Button() {
  return <SingleButton>Kup produkt</SingleButton>;
}

const SingleButton = styled.button`
  font-family: "sans-serif";
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  background-color: white;
  color: black;
  padding: 10px 20px;
  font-size: 14px;
  text-transform: Uppercase;
  margin: 20px 0;
  text-decoration: none;
  width: 160px;
  height: 40px;
  outline: none;
  border: 1px solid gray;
  overflow: hidden;
  transition: 0.4s all ease-in-out;
  z-index: 0;
  &:hover {
    color: white;
    border: none;
  }
  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: 0;
    height: 100%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: #e8c064;
    z-index: -1;
    transition: 0.5s all ease;
  }
  &:hover::before {
    height: 370%;
    width: 100%;
  }
`;
