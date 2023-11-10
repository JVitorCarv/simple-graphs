import styled from 'styled-components';

export const MainButton = styled.button`
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 16px;
    background-color: var(--colors-blue, #007AFF);
    padding: 14px 20;
    color: white;
    border-radius: 12px;
    padding: 10px 20px;
    cursor: pointer;
`;

export const SeconButton = styled.button`
    border: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 16px;
    background-color: var(--fills-tertiary, rgba(0, 0, 0, 0.12));
    padding: 14px 20;
    margin: 5px;
    color: var(--colors-blue, #007AFF);
    border-radius: 12px;
    padding: 10px 20px;
    cursor: pointer;
`;