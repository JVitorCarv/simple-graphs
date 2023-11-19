import React, { useState } from 'react';
import AddNode from './components/AddNode/AddNode';
import CleanNodes from './components/CleanNodes/CleanNodes';
import DeleteNode from './components/DeleteNode/DeleteNode';
import EditNode from './components/EditNode/EditNode';
import InstructionBox from '../../EditorContainer/components/InstructionBox/InstructionBox';
import RenderIcon from '../../EditorContainer/components/RenderIcon/RenderIcon';

const NodeEditor: React.FC = () => {
    const modeList: string[] = ['Add', 'Edit', 'Delete', 'Clean'];

    const [mode, setMode] = useState<string>('');

    return (
        <>
            {modeList.map((selectableMode) => (
                <RenderIcon
                    key={selectableMode}
                    mode={selectableMode}
                    currentMode={mode}
                    onClick={() => setMode(selectableMode)}
                />
            ))}
            {mode === 'Add' && <AddNode />}
            {mode === 'Delete' && <DeleteNode />}
            {mode === 'Clean' && <CleanNodes />}
            {mode === 'Edit' && <EditNode />}
            {mode === '' && <InstructionBox content={"Select a mode"} />}
        </>
    );
};

export default NodeEditor;
