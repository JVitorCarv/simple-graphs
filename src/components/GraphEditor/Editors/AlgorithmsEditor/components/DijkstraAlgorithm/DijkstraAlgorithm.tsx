import React, { useEffect, useState } from 'react';
import { useCy } from '../.././../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import { Button } from '../../../../EditorContainer/components/Button/Button';

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div style={{ position: 'absolute', top: '170px', color: 'red' }}>
    <h1>{message}</h1>
  </div>
);

const DijkstraAlgorithm: React.FC = () => {
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

  const resetAlgorithm = () => {
    setSourceNode('');
    setTargetNode('');
    setDistances(null);
    setPath(null);
    setErrorMessage('');
  };

  useEffect(() => {
    const cyRef = cy.current;

    const handleTap = (e: any) => {
      const clickedNode = e.target.id();
      if (sourceNode === '') {
        setSourceNode(clickedNode);
      } else if (targetNode === '') {
        setTargetNode(clickedNode);
      }
    };

    cyRef.nodes().on('tap', handleTap);

    return () => {
      cyRef.nodes().off('tap', handleTap);
    };
  }, [cy, sourceNode, targetNode]);

  useEffect(() => {
    if (sourceNode.trim() !== '' && targetNode.trim() !== '') {
      const dijkstraResult = cy.current.elements().dijkstra(`#${sourceNode}`, (edge: any) => edge.data('weight'), true);

      const distance = dijkstraResult.distanceTo(`#${targetNode}`);
      const pathToTarget = dijkstraResult.pathTo(`#${targetNode}`);

      if (distance === Infinity) {
        setErrorMessage('Sem caminhos disponíveis. Não é possível executar o algoritmo para os nós selecionados.');
        setDistances(null);
        setPath(null);
      } else {
        setDistances(distance);
        const pathString = pathToTarget
          .map((node: any) => node.data('label'))
          .filter((label: string) => label) // Filtrar labels vazias
          .join(' ➔ ');

        setPath(pathString);
        setErrorMessage('');
      }
    }
  }, [cy, sourceNode, targetNode]);

  return (
    <>
      <Button variant="tertiary" onClick={resetAlgorithm}>
        Dijkstra
      </Button>
  
      {sourceNode === '' && targetNode === '' && <InstructionBox content="Click on the source node" />}
      {sourceNode !== '' && targetNode === '' && <InstructionBox content="Click on the target node" />}
  
      {distances !== null && path !== null && (
        <div style={{ marginTop: '30px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>     
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginRight: '10px' }}>
            <h2 style={{ marginRight: '10px', color: 'black', lineHeight: '1.5' }}>Distance to {cy.current.$(`#${targetNode}`).data('label')}:</h2>
            <h2 style={{ margin: '0', color: 'var(--colors-blue, #007AFF)', lineHeight: '1.5' }}>{distances}</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <h2 style={{ marginRight: '10px', color: 'black', lineHeight: '1.5' }}>Path to {cy.current.$(`#${targetNode}`).data('label')}:</h2>
            <h2 style={{ margin: '0', color: 'var(--colors-blue, #007AFF)', lineHeight: '1.5' }}>{path}</h2>
          </div>

          <Button onClick={clearSelection} style={{ marginLeft: '10px' }} variant="primary">
            Clear
          </Button>
        </div>
      )}

      {errorMessage && (
        
        <ErrorMessage message={`Sem caminhos disponíveis. Não é possível executar o algoritmo do nó ${cy.current.$(`#${sourceNode}`).data('label')} para o nó ${cy.current.$(`#${targetNode}`).data('label')}.`} />
      )}
    </>
  );
};

export default DijkstraAlgorithm;
