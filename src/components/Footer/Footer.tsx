import React, { ChangeEvent, useCallback, useState } from 'react';
import RenderIcon from '../GraphEditor/EditorContainer/components/RenderIcon/RenderIcon';
import GithubLogo from '../../assets/github.png';
import CytoscapeLogo from '../../assets/cytoscape.png';
import { useCy } from '../../providers/useCy';
import {
  FooterContainer,
  IconsContainer,
  IconGroupContainer,
  LogoContainer,
  SelectedDirectionContainer,
} from './styles';
import ExportModal from './components/ModalComponents/ExportModalComponent';
import ImportModal from './components/ModalComponents/ImportModalComponent';
import SelectDirection from '../GraphEditor/EditorContainer/components/SelectDirection/SelectDirection';
import { handleInputBatch, generateGraphFromUserInput, handleFileChange } from './functions/GraphFunctions'


const Footer: React.FC = () => {
  const cy = useCy();
  const [modalIsOpen, setModalIsOpen] = useState(false);
    
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [modalIsOpenImport, setModalIsOpenImport] = useState(false);

  const openModalImport = () => {
    setModalIsOpenImport(true);
  };

  const closeModalImport = () => {
    setModalIsOpenImport(false);
  };

  const handleExportClick = useCallback(() => {
    const graphJson = cy.current.json();
    const blob = new Blob([JSON.stringify(graphJson, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'graph.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}, [cy]);

const handleExportPngClick = useCallback(() => {
    const pngContent = cy.current.png({output: 'blob', full: true, scale: 1});
    const url = URL.createObjectURL(pngContent);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'graph.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}, [cy]);


const inputFileRef = React.useRef<HTMLInputElement>(null);

const handleFileClick = () => {
    inputFileRef.current?.click();
  };
  
const onGenerateClick = () => {
    handleInputBatch(cy.current, generateGraphFromUserInput);
  };

  return (
    <FooterContainer>
      <IconsContainer>
        <IconGroupContainer>
          <a href="https://github.com/JVitorCarv/simple-graphs" target="_blank" rel="noopener noreferrer">
            <LogoContainer src={GithubLogo} />
          </a>
          <a href="https://js.cytoscape.org/" target="_blank" rel="noopener noreferrer">
            <LogoContainer src={CytoscapeLogo} />
          </a>
        </IconGroupContainer>
        <SelectedDirectionContainer>
          <SelectDirection />
        </SelectedDirectionContainer>
        <IconGroupContainer>
          <RenderIcon currentMode="Export" mode="Export" onClick={openModal} />
          <ExportModal isOpen={modalIsOpen} closeModal={closeModal} handleExportClick={handleExportClick} handleExportPngClick={handleExportPngClick} />
          <RenderIcon currentMode="Import" mode="Import" onClick={openModalImport} />
          <input type="file" ref={inputFileRef} onChange={(event) => handleFileChange(cy.current, event)} style={{ display: 'none' }} />
          <ImportModal isOpenImport={modalIsOpenImport} closeModalImport={closeModalImport} handleFileClick={handleFileClick} onGenerateClick={onGenerateClick}/>
        </IconGroupContainer>
      </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;