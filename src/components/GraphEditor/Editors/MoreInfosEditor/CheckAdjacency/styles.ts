import styled from 'styled-components';
import { Button } from '../../../EditorContainer/components/Button/Button';

export const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-right: 10px;
`;

export const InfoLabel = styled.h2`
  margin-right: 10px;
  color: black;
  line-height: 1.5;
`;

export const StyledButton = styled(Button)`
  margin-left: 10px;
`;