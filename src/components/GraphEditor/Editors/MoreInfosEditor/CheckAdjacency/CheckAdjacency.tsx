import React, { useEffect, useState, useCallback } from 'react';
import { useCy } from '../../../../../providers/useCy';
import InstructionBox from '../../../EditorContainer/components/InstructionBox/InstructionBox';
import { Container, InfoBox, InfoLabel, StyledButton } from './styles';

const CheckAdjacency: React.FC = () => {
    const cy = useCy();

    const [sourceNode, setSourceNode] = useState<string>('');
    const [targetNode, setTargetNode] = useState<string>('');
    const [isAdjacent, setIsAdjacent] = useState<boolean>(false);


    const registerNode = useCallback((node: any) => {
      if (sourceNode === '') {
        setSourceNode(node);
        return;
      }
      setTargetNode(node);
    }, [sourceNode, setTargetNode]);
  
    const handleTap = (e: any) => registerNode(e.target.id());
  
    useEffect(() => {
      const cyRef = cy.current;
  
      cyRef.nodes().on('tap', handleTap);

      checkAdjacency();
  
      return () => {
        cyRef.nodes().off('tap', handleTap);
      };
    }, [cy, handleTap]);

    const checkAdjacency = (() => {
        const cyRef = cy.current;

        const source = cyRef.getElementById(sourceNode)
        const target = cyRef.getElementById(targetNode)
        const isAdj = source.neighborhood().contains(target)

        setIsAdjacent(isAdj);
    });

    const clearSelection = (() => {
      setSourceNode('');
      setTargetNode('');
    });

    const getNodeLabel = ((nodeId: string) => {
      const cyRef = cy.current;
      const nodeLabel = cyRef.getElementById(nodeId).data('label');

      return nodeLabel;
    });

    return (
      <>
        <Container>
          {sourceNode === '' && <InstructionBox content={'Click source node'} />}
          {sourceNode !== '' && targetNode === '' && <InstructionBox content={'Click target node to check adjacency'} />}

          {sourceNode !== '' && targetNode !== '' && isAdjacent == false && 
            <InfoBox>
              <InfoLabel>Nodes {getNodeLabel(sourceNode)} and {getNodeLabel(targetNode)} are NOT adjacent</InfoLabel>
            </InfoBox>
          }

          {sourceNode !== '' && targetNode !== '' && isAdjacent == true && 
            <InfoBox>
              <InfoLabel>Nodes {getNodeLabel(sourceNode)} and {getNodeLabel(targetNode)} ARE adjacent</InfoLabel>
            </InfoBox>
          }

          {sourceNode !== '' && targetNode !== '' &&
            <StyledButton onClick={clearSelection} variant='primary'>
              Clear
            </StyledButton>
          }
        </Container>
      </>
    );
};

export default CheckAdjacency;
