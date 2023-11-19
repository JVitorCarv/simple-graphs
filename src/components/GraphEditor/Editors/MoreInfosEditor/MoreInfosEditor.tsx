import React, { useState } from 'react';
import InstructionBox from '../../EditorContainer/components/InstructionBox/InstructionBox';
import MenuButton from '../../EditorContainer/components/MenuButton/MenuButton';
import SizeOrderEditor from './SizeOrderEditor/SizeOrderEditor';
import CheckAdjacency from './CheckAdjacency/CheckAdjacency';

const MoreInfosEditor: React.FC = () => {

    const [mode, setMode] = useState<string>('');
    
    return (
        <>
          <MenuButton
            setMode={setMode}
            mode='getordersize'
            currentMode={mode}
          >
            Get Order & Size
          </MenuButton>
          <MenuButton
            setMode={setMode}
            mode='checkadjacency'
            currentMode={mode}
          >
            Check Adjacency of 2 Nodes
          </MenuButton>
          {mode === 'getordersize' && <SizeOrderEditor/>}
          {mode === 'checkadjacency' && <CheckAdjacency/>}
          {mode === '' && <InstructionBox content={"Select a Mode"} />}
        </>
    );
};

export default MoreInfosEditor;
