import React from 'react';
import { useCy } from '../../../../../providers/useCy';
import { Button } from '../../../EditorContainer/components/Button/Button';
import { Container, InfoContainer, Heading, Value } from './style';

const SizeOrderEditor: React.FC = () => {
  const cy = useCy();
  const order = cy.current.nodes().length;
  const size = cy.current.edges().length;

  return (
    <>
      <Button variant="tertiary">Get Order & Size</Button>

      <Container>
        <InfoContainer>
          <Heading>Order:</Heading>
          <Value>{order}</Value>
        </InfoContainer>
        <InfoContainer>
          <Heading>Size:</Heading>
          <Value>{size}</Value>
        </InfoContainer>
      </Container>
    </>
  );
};

export default SizeOrderEditor;