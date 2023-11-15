import React, { useState } from 'react';
import InstructionBox from '../../EditorContainer/components/InstructionBox/InstructionBox';
import { Button } from '../../EditorContainer/components/Button/Button';
import DijkstraAlgorithm from './components/DijkstraAlgorithm/DijkstraAlgorithm';

const AlgorithmsEditor: React.FC = () => {

    const [mode, setMode] = useState<string>('');
    
    return (
        <>   

            {mode === '' && (
                <Button onClick={() => setMode('dijkstra')} variant='secondary'>Dijkstra</Button>
             )}
             
            {mode === 'dijkstra' && <DijkstraAlgorithm />}            
            {mode === '' && <InstructionBox content={"Select an Algorithm"} />}
        </>
    );
};

export default AlgorithmsEditor;
