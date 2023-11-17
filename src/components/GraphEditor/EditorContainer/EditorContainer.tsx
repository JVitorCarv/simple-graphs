import React, { useEffect, useState } from 'react';
import { Container, SelectedModeContainer, Navbar, Title } from './styles';
import { Button } from './components/Button/Button';
import EdgeEditor from '../Editors/EdgeEditor/EdgeEditor';
import NodeEditor from '../Editors/NodeEditor/NodeEditor';
import ReturnArrow from './components/ReturnArrow/ReturnArrow';
import AlgorithmsEditor from '../Editors/AlgorithmsEditor/AlgorithmsEditor';
import MoreInfosEditor from '../Editors/MoreInfosEditor/MoreInfosEditor';

const EditorContainer: React.FC = () => {
  const [mode, setMode] = useState<string>('');
  const [displayArrow, setDisplayArrow] = useState<boolean>(false);

  useEffect(() => {
    if (mode !== '') {
      setDisplayArrow(true);
    } else {
      setDisplayArrow(false);
    }
  }, [mode]);

  return (
    <Container>
      <Title>Simple Graphs</Title>
      <Navbar>
        {mode === '' && (
          <Button onClick={() => setMode('node')} variant='primary'>Node</Button>
        )}
        {mode === '' && (
          <Button onClick={() => setMode('edge')} variant='primary'>Edge</Button>
        )}
        {mode === '' && (
          <Button onClick={() => setMode('algorithms')} variant='primary'>Algorithms</Button>
        )}
        {mode === '' && (
          <Button onClick={() => setMode('moreinfos')} variant='primary'>More Infos</Button>
        )}
        <SelectedModeContainer>
          {displayArrow && <ReturnArrow onClick={() => setMode('')} />}
          {mode === 'node' && <NodeEditor />}
          {mode === 'edge' && <EdgeEditor />} 
          {mode === 'algorithms' && <AlgorithmsEditor />}  
          {mode === 'moreinfos' && <MoreInfosEditor />}        
        </SelectedModeContainer>
      </Navbar>
    </Container>
  );
};

export default EditorContainer;
