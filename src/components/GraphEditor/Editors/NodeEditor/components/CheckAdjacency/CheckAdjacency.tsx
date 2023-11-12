import React, { useEffect, useState, useCallback } from 'react';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';

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
        let isAdj = cy.current.$(`#${sourceNode}`).neighborhood().some((node: { id: () => string; }) => node.id() === targetNode && node.id() !== sourceNode)
        setIsAdjacent(isAdj)
    });

    return (
      <>
        {sourceNode === '' && <InstructionBox content={'Click two nodes to check if they are adjacent'} />}
        {sourceNode !== '' && targetNode === '' && <InstructionBox content={'Click target node to check if they are adjacent'} />}
        {sourceNode !== '' && targetNode !== '' && <InstructionBox content={`Adjacency: ${isAdjacent}`} />}
      </>
    );
};

export default CheckAdjacency;
