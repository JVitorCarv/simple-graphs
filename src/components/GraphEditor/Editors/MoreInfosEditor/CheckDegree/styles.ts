import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerDirected = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Heading = styled.h2`
  margin-right: 10px;
  color: black;
  line-height: 1.5;
`;

export const Value = styled.h2`
  margin: 0;
  color: var(--colors-blue, #007AFF);
  line-height: 1.5;
`;