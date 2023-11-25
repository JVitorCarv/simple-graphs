import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    gap: 5px;
    align-content: start;
    justify-content: center;
    align-items: center;
    max-width: fit-content;
`

export const Container = styled.nav`
    align-content: start;
    margin-top: 25px;
    display: flex;
    flex-flow: column;
    gap: 20px;
    align-items: center;
    height: 200px;
`

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
`

export const SelectedModeContainer = styled.div`
    display: flex;
    column-gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const SelectedDirectionContainer = styled.div`
  display: none;

  @media (min-width: 550px) {
    display: flex;
    column-gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;