import React, { ChangeEvent, useCallback, useState } from 'react'
import RenderIcon from '../GraphEditor/EditorContainer/components/RenderIcon/RenderIcon'
import GithubLogo from '../../assets/github.png'
import CytoscapeLogo from '../../assets/cytoscape.png'
import { useCy } from '../../providers/useCy'
import { FooterContainer, IconsContainer, IconGroupContainer, LogoContainer, modalStyle } from './styles'
import Modal from 'react-modal';
import { Button } from '../GraphEditor/EditorContainer/components/Button/Button'
import { IconSpan } from '../GraphEditor/EditorContainer/components/IconSpan/IconSpan'

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
    
    const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const contents = e.target?.result;
                if (typeof contents === 'string') {
                    cy.current.json(JSON.parse(contents));
                }
            };
            reader.readAsText(file);
        }
    }, [cy]);

    return (
        <FooterContainer>
            <IconsContainer>
                <IconGroupContainer>
                    <a href="https://github.com/JVitorCarv/simple-graphs" target="_blank" rel="noopener noreferrer">
                        <LogoContainer src={GithubLogo} /></a>
                    <a href="https://js.cytoscape.org/" target="_blank" rel="noopener noreferrer">
                        <LogoContainer src={CytoscapeLogo} /></a>
                </IconGroupContainer>
                <IconGroupContainer>
                    <RenderIcon currentMode="" mode="Export" onClick={openModal} />
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Export Modal"
                        style={modalStyle}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <IconsContainer>
                                    <Button onClick={handleExportClick} variant='secondary' >JSON</Button>
                                </IconsContainer>
                                <IconsContainer>
                                    <Button onClick={handleExportPngClick} variant='secondary'>PNG</Button>
                                </IconsContainer>
                            </div>
                            <IconSpan 
                                className='material-symbols-outlined' 
                                onClick={closeModal} 
                                style={{ position: 'absolute', display:'flex', right:'20%', top:'5%' ,overflow: 'visible' }} >
                                {'close'}
                            </IconSpan>
                        </div>
                    </Modal>
                <label>
                    <RenderIcon currentMode="file" mode="Import" onClick={handleFileChange}/>
                    <input type="file" accept=".json" onChange={handleFileChange} style={{display: 'none'}} />
                </label>
            </IconGroupContainer>
            </IconsContainer>
        </FooterContainer>
    )
}

export default Footer