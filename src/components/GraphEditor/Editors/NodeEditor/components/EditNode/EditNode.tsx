import React, { useEffect, useState } from 'react';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import { Button } from '../../../../EditorContainer/components/Button/Button';

const EditNode: React.FC = () => {
    const cy = useCy();

    const [enableEdit, setEnableEdit] = useState(false);
    const [selectedNode, setSelectedNode] = useState<string>('');
    const [newNodeLabel, setNewNodeLabel] = useState<string>('');

    const addNewLabel = () => {
        if (newNodeLabel.trim() === '') return;
        cy.current.$(`#${selectedNode}`).data('label', newNodeLabel);
        setSelectedNode('');
        setNewNodeLabel('');
        setEnableEdit(false);
    }

    const handleClick = (e: any) => {
        setEnableEdit(true);
        setSelectedNode(e.target.id());
    }

    useEffect(() => {
        const cyRef = cy.current;

        cyRef.nodes().on('tap', handleClick);
        return () => {
            cyRef.nodes().off('tap', handleClick);
        }
    }, [cy]);

    return (
        <>
            {!enableEdit && (<InstructionBox content={"Click on the node you wish to edit"} />)}
            {enableEdit && (
                <InstructionBox 
                    content={
                        <input
                            type="text"
                            onChange={(e) => setNewNodeLabel(e.target.value)}
                            placeholder={`Insert new label...`}
                        />
                    }
                    button={
                        <Button onClick={addNewLabel} variant='primary'>Change</Button>
                    }
                />
            )}
        </>
    );
}

export default EditNode;
