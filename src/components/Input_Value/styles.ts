import styled from "styled-components";

export const SearchBar = styled.div`
    width: 100%;
`;

export const SearchBarForm = styled.form`
    width: 100%;
    font-size: 15px;
`;

export const InputSearch = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;

    &::placeholder {
        font-size: 15px;
        color: #333;
        font-weight: bold;
    }
`;
