import { useCy } from '../../../../../../providers/useCy';
import { Button } from '../../../../EditorContainer/components/Button/Button';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import React from 'react';

const CleanEdges: React.FC = () => {
    const cy = useCy();

    const deleteAllEdges = () => cy.current.edges().remove();

    return (
        <InstructionBox
            content={"Are you sure you want to delete all edges? This cannot be undone."}
            button={
                <Button onClick={deleteAllEdges} variant='primary'>Yes</Button>
            }
        />
    );
};

export default CleanEdges;
