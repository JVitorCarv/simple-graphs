import React, { useContext } from 'react';
import { NodeLabelContext } from '../../../../../../providers/NodeLabelProvider';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import { Button } from '../../../../EditorContainer/components/Button/Button';

const CleanNodes: React.FC = () => {
    const cy = useCy();
    const { setNodeLabel } = useContext(NodeLabelContext);

    const deleteAllNodes = () => {
        cy.current.nodes().remove();
        setNodeLabel(0);
    }

    return (
        <>
            <InstructionBox
                content={'Are you sure want to delete all nodes? This cannot be undone.'}
                button={
                    <Button onClick={deleteAllNodes} variant='primary'>Yes</Button>
                }
            />
        </>
    )
}

export default CleanNodes;
