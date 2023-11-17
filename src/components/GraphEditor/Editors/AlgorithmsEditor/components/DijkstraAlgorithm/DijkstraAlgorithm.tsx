import React, { useEffect, useState } from 'react';
import { useCy } from '../.././../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import { Container, InfoBox, InfoLabel, InfoValue, ErrorMessage, StyledButton, ClearButton } from './styles';

const DijkstraAlgorithm: React.FC<{ directed: boolean }> = ({ directed }) => {
  const cy = useCy();

  const [sourceNode, setSourceNode] = useState<string>('');
  const [targetNode, setTargetNode] = useState<string>('');
  const [distances, setDistances] = useState<number | null>(null);
  const [path, setPath] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const clearSelection = () => {
    setSourceNode('');
    setTargetNode('');
    setDistances(null);
    setPath(null);
    setErrorMessage('');
  };
  const handleTap = (e: any) => {
    const clickedNode = e.target.id();
    if (sourceNode === '') {
      setSourceNode(clickedNode);
    } else if (targetNode === '') {
      setTargetNode(clickedNode);
    }
  };
  useEffect(() => {
    const cyRef = cy.current;

    cyRef.nodes().on('tap', handleTap);

    return () => {
      cyRef.nodes().off('tap', handleTap);
    };
  }, [cy, sourceNode, targetNode]);


  useEffect(() => {
    if (sourceNode.trim() !== '' && targetNode.trim() !== '') {

      const dijkstraResult = directed
        ? cy.current.elements().dijkstra(`#${sourceNode}`, (edge: any) => edge.data('weight'), true)
        : cy.current.elements().dijkstra(`#${sourceNode}`, (edge: any) => edge.data('weight'));
      const distance = dijkstraResult.distanceTo(`#${targetNode}`);
      const pathToTarget = dijkstraResult.pathTo(`#${targetNode}`);

      if (distance === Infinity) {
        setErrorMessage(`Path does not exist to node ${cy.current.$(`#${sourceNode}`).data('label')} from node ${cy.current.$(`#${targetNode}`).data('label')}.`);
        setDistances(null);
        setPath(null);
      } else {
        setDistances(distance);
        const pathString = pathToTarget
          .map((node: any) => node.data('label'))
          .filter((label: string) => label) 
           .join(' ➔ '); 
        setPath(pathString);
        setErrorMessage('');
      }
    }
  }, [cy, sourceNode, targetNode]);

  return (
    <>
      <StyledButton variant="tertiary" onClick={clearSelection}>
        Dijkstra
      </StyledButton>
  
      {sourceNode === '' && targetNode === '' && <InstructionBox content="Click on the source node" />}
      {sourceNode !== '' && targetNode === '' && <InstructionBox content="Click on the target node" />}
  
      {distances !== null && path !== null && (
        <Container>
          <InfoBox>
            <InfoLabel>Distance to {cy.current.$(`#${targetNode}`).data('label')}:</InfoLabel>
            <InfoValue>{distances}</InfoValue>
          </InfoBox>
  
          <InfoBox>
            <InfoLabel>Path to {cy.current.$(`#${targetNode}`).data('label')}:</InfoLabel>
            <InfoValue>{path}</InfoValue>
          </InfoBox>
  
          <StyledButton onClick={clearSelection} variant="primary">
            Clear
          </StyledButton>
        </Container>
      )}
  
      {errorMessage && (
        <ErrorMessage>
          <h1>{errorMessage}</h1>
          <ClearButton onClick={clearSelection} variant="primary">
            Clear
          </ClearButton>
        </ErrorMessage>
      )}
    </>
  );
};

export default DijkstraAlgorithm;