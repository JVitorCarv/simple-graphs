import React from 'react';
import { useCy } from '../../../../../providers/useCy';
import { Container, InfoContainer, Heading, Value } from './style';

const SizeOrderEditor: React.FC = () => {
  const cy = useCy();
  const order = cy.current.nodes().length;
  const size = cy.current.edges().length;

  return (
    <>
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