import React, { useState } from 'react';
import RenderIcon from '../../EditorContainer/components/RenderIcon/RenderIcon';
import ExportGraph from './components/ExportGraph/ExportGraph';

const NodeEditor: React.FC = () => {
    const modeList: string[] = ['Export'];

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
            {mode === 'Export' && <ExportGraph />}
        </>
    );
};

export default NodeEditor;