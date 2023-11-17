import React, { useState } from 'react';
import InstructionBox from '../../EditorContainer/components/InstructionBox/InstructionBox';
import { Button } from '../../EditorContainer/components/Button/Button';
import DijkstraAlgorithm from './components/DijkstraAlgorithm/DijkstraAlgorithm';
import { Container, StyledSwitch } from './style';
import {  Slider, SliderBefore, CheckboxInput } from '../../Editors/EdgeEditor/components/AddEdge/styles';

const AlgorithmsEditor: React.FC = () => {
    const [mode, setMode] = useState<string>('');
    const [directed, setDirected] = useState<boolean>(false);

    return (
        <>
            {mode === '' && (
                <>              
                    <Button onClick={() => setMode('dijkstra')} variant='secondary'>Dijkstra</Button>
                    <InstructionBox content={"Select an Algorithm"} />
                    <Container>                    
                        <InstructionBox content={"Directed Graph?"} />
                        <StyledSwitch className={directed ? "round" : ""}>
                            <CheckboxInput
                                type="checkbox"
                                checked={directed}
                                onChange={() => setDirected(!directed)}
                            />
                            <Slider className="slider" />
                            <SliderBefore className="slider-before" />
                        </StyledSwitch>
                    </Container>
                </>
            )}
            {mode === 'dijkstra' && <DijkstraAlgorithm directed={directed} />}
        </>
    );
};

export default AlgorithmsEditor;