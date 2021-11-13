import styled from "styled-components";

export const Button = styled.button`
    background: #2EA550;
    color: #fff;
    width: 150px;
    border: none;
    border-radius: 8px;
    font-size: 1em;
    font-weight: bold;
    padding: 8px 13px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    &:hover {
        background: #6FBAF7;
        box-shadow: 3px 2px 13px rgba(255, 255, 255, 0.5);
    }
`;