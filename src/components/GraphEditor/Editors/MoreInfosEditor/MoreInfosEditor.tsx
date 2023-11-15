import React, { useState } from 'react';
import InstructionBox from '../../EditorContainer/components/InstructionBox/InstructionBox';
import { Button } from '../../EditorContainer/components/Button/Button';
import SizeOrderEditor from './SizeOrderEditor/SizeOrderEditor';

const MoreInfosEditor: React.FC = () => {

    const [mode, setMode] = useState<string>('');
    
    return (
        <>   

        {mode === '' && (
          <Button onClick={() => setMode('getordersize')} variant='secondary'>Get Order & Size</Button>
        )}
         {mode === '' && (
          <Button onClick={() => setMode('getvalency')} variant='secondary'>Get Valency</Button>
        )}
         {mode === '' && (
          <Button onClick={() => setMode('getadjacency')} variant='secondary'>Get Adjacency</Button>
        )}
            {mode === 'getordersize' && <SizeOrderEditor/>}            
            {mode === '' && <InstructionBox content={"Select a Mode"} />}
        </>
    );
};

export default MoreInfosEditor;
