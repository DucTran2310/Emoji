import styled from "styled-components";

export const EmojiCopy = styled.span`
    float: right;
    visibility: hidden;
`;

export const EmojiItem = styled.div`
    border: 1px solid black;
    padding: 20px;
    font-size: 20px;
    background-color: white;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }

    &:hover > ${EmojiCopy} {
        visibility: visible;
        color: rgba(0, 0, 0, 0.5);
    }
`;

export const EmojiSymbol = styled.span`
    width: 70vw;
    margin: 0 auto;
`;

export const EmojiTitle = styled.span``;
