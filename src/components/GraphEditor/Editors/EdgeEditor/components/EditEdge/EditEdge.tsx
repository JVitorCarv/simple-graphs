import { useCy } from '../../../../../../providers/useCy';
import { useEffect, useState } from 'react';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import { Button } from '../../../../EditorContainer/components/Button/Button';
import React from 'react';

const EditEdge: React.FC = () => {
  const cy = useCy();

  const [selectedEdge, setSelectedEdge] = useState<string>('');
  const [enableEdit, setEnableEdit] = useState<boolean>(false);
  const [newWeight, setNewWeight] = useState<string>(''); 

  const editEdge = () => {
    const weight = parseFloat(newWeight);
    if (!Number.isNaN(weight) && weight >= 0) {
      cy.current.$(`#${selectedEdge}`).data('weight', weight);
    }
    setEnableEdit(false);
    setSelectedEdge('');
    setNewWeight('');
  };

  const handleTap = (e: any) => {
    setEnableEdit(true);
    setSelectedEdge(e.target.id());
  };

  useEffect(() => {
    const cyRef = cy.current;

    cyRef.edges().on('tap', handleTap);

    return () => {
      cyRef.edges().off('tap', handleTap);
    };
  }, [cy]);

  return (
    <>
      {!enableEdit && <InstructionBox content={"Click on the edge you wish to edit"} />}
      {enableEdit && (
        <InstructionBox
          content={
            <input
              type="text"
              value={newWeight} 
              onChange={(e) => setNewWeight(e.target.value)}
              placeholder={`Insert new label...`}
            />
          }
          button={
            <Button onClick={editEdge} variant='primary'>Change</Button>
          }
        />
      )}
    </>
  );
};

export default EditEdge;
