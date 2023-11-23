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
import ExportModal from './components/ModalComponent/ModalComponent';
import SelectDirection from '../GraphEditor/EditorContainer/components/SelectDirection/SelectDirection';

const Footer: React.FC = () => {
  const cy = useCy();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleExportClick = useCallback(() => {
    const graphJson = cy.current.json();
    const blob = new Blob([JSON.stringify(graphJson, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'graph.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [cy]);

  const handleExportPngClick = useCallback(() => {
    const pngContent = cy.current.png({ output: 'blob', full: true, scale: 1 });
    const url = URL.createObjectURL(pngContent);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'graph.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [cy]);

  const handleJsonImport = useCallback((contents: string) => {
    cy.current.json(JSON.parse(contents));
  }, [cy]);

  const generateGraphFromUserInput = useCallback(
    (input: string) => {
      const lines = input.split('|');
      cy.current.elements().remove();
  
      const nodeIds = new Map<string, string>();
  
      lines.forEach((line, index) => {
        const [source, target, weight] = line.split(' ');
  
        if (!nodeIds.has(source)) {
          const sourceNodeId = `node${nodeIds.size}`;
          nodeIds.set(source, sourceNodeId);
  
          cy.current.add({
            group: 'nodes',
            data: { id: sourceNodeId, label: `${source}` },
            position: { x: 0, y: 0 },
          });
        }
  
        if (!nodeIds.has(target)) {
          const targetNodeId = `node${nodeIds.size}`;
          nodeIds.set(target, targetNodeId);
  
          cy.current.add({
            group: 'nodes',
            data: { id: targetNodeId, label: `${target}` },
            position: { x: 0, y: 0 },
          });
        }
  
        const edgeId = `edge${index}`;
        cy.current.add({
          group: 'edges',
          data: {
            id: edgeId,
            source: nodeIds.get(source),
            target: nodeIds.get(target),
            weight: parseInt(`${weight}`),
          },
        });
      });
      cy.current.layout({ name: 'grid' }).run();
    },
    [cy]
  );

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const contents = e.target?.result;
          if (typeof contents === 'string') {
            handleJsonImport(contents);
          }
        };
        reader.readAsText(file);
      }
    },
    [handleJsonImport]
  );

  const handleInputBatch = useCallback(() => {
    const userInput = prompt('Digite as informações para gerar o grafo (por exemplo, "0 2 3|0 1 2|1 2 3"):');
    if (userInput) {
      generateGraphFromUserInput(userInput);
    }
  }, [generateGraphFromUserInput]);

  

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
          <RenderIcon currentMode="" mode="Export" onClick={openModal} />
          <ExportModal isOpen={modalIsOpen} closeModal={closeModal} handleExportClick={handleExportClick} handleExportPngClick={handleExportPngClick} />
          <label>
            <RenderIcon currentMode="file" mode="Import" onClick={handleFileChange} />
            <input type="file" accept=".json" onChange={handleFileChange} style={{ display: 'none' }} />
          </label>
          <RenderIcon currentMode="input" mode="Generate" onClick={handleInputBatch} />
          <label>
            <input type="button" value="Generate Graph" onClick={handleInputBatch} />
          </label>
        </IconGroupContainer>
      </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;