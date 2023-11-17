import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-right: -30px;
  margin-left: -30px;
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