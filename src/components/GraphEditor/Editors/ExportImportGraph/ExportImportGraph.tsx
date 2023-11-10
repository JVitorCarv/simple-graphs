import React, { useState } from 'react';
import RenderIcon from '../../EditorContainer/components/RenderIcon/RenderIcon';
import ExportImportGraph from './components/ExportImportGraph/ExportImportGraph';

const ExportEditor: React.FC = () => {
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
            {mode === 'Export' && <ExportImportGraph />}
        </>
    );
};

export default ExportEditor;