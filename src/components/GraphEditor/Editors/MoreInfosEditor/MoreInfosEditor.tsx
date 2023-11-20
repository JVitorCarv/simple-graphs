import React, { useState } from 'react';
import InstructionBox from '../../EditorContainer/components/InstructionBox/InstructionBox';
import MenuButton from '../../EditorContainer/components/MenuButton/MenuButton';
import SizeOrderEditor from './SizeOrderEditor/SizeOrderEditor';
import CheckAdjacency from './CheckAdjacency/CheckAdjacency';
import CheckDegree from './CheckDegree/CheckDegree';
import GetAdjacentNodes from './GetAdjacentNodes/GetAdjacentNodes';

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
          <MenuButton
            setMode={setMode}
            mode='checkdegree'
            currentMode={mode}
          >
            Get Degree
          </MenuButton>
          <MenuButton
            setMode={setMode}
            mode='getadjacent'
            currentMode={mode}
          >
            Get Adjacent Nodes
          </MenuButton>
          {mode === 'getordersize' && <SizeOrderEditor/>}
          {mode === 'checkadjacency' && <CheckAdjacency/>}
          {mode === 'checkdegree' && <CheckDegree/>}
          {mode === 'getadjacent' && <GetAdjacentNodes />} 
          {mode === '' && <InstructionBox content={"Select a Mode"} />}
        </>
    );
};

export default MoreInfosEditor;