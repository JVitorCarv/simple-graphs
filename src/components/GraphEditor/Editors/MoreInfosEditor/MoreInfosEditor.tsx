import React, { useState } from 'react';
import InstructionBox from '../../EditorContainer/components/InstructionBox/InstructionBox';
import MenuButton from '../../EditorContainer/components/MenuButton/MenuButton';
import SizeOrderEditor from './SizeOrderEditor/SizeOrderEditor';

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
          {mode === 'getordersize' && <SizeOrderEditor/>}
          {mode === '' && <InstructionBox content={"Select a Mode"} />}
        </>
    );
};

export default MoreInfosEditor;
