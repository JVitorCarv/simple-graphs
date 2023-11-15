import React from 'react';
import { useCy } from '../../../../../providers/useCy';
import { Button } from '../../../EditorContainer/components/Button/Button';


const SizeOrderEditor: React.FC = () => {

  const cy = useCy();

  const order = cy.current.nodes().length;

  // Calcule o tamanho do grafo
  const size = cy.current.edges().length;


  return (
    <>
      <Button variant="tertiary">Get Order & Size</Button>
      <div style={{ marginTop: '30px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>     
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginRight: '10px' }}>
          <h2 style={{ marginRight: '10px', color: 'black', lineHeight: '1.5' }}>Order:</h2>
          <h2 style={{ margin: '0', color: 'var(--colors-blue, #007AFF)', lineHeight: '1.5' }}>{order}</h2>
        </div>
  
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginLeft: '-70px'}}>
          <h2 style={{ marginRight: '10px', color: 'black', lineHeight: '1.5' }}>Size:</h2>
          <h2 style={{ margin: '0', color: 'var(--colors-blue, #007AFF)', lineHeight: '1.5' }}>{size}</h2>
        </div>
      </div>
    </>
  );
  
};

export default SizeOrderEditor;
