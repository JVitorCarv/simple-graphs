import React from 'react';
import Modal from 'react-modal';
import { IconsContainer, modalStyle } from '../../styles';
import { Button } from '../../../GraphEditor/EditorContainer/components/Button/Button';
import { IconSpan } from '../../../GraphEditor/EditorContainer/components/IconSpan/IconSpan';

interface ImportModalProps {
    isOpenImport: boolean;
    closeModalImport: () => any;
    handleFileClick: () => any;
    onGenerateClick: () => any;
}

  const ImportModal: React.FC<ImportModalProps> = ({ isOpenImport, closeModalImport, handleFileClick, onGenerateClick }) => {
    return (
        <Modal
            isOpen={isOpenImport}
            onRequestClose={closeModalImport}
            contentLabel="Import Modal"
            style={modalStyle}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <IconsContainer>
                        <Button onClick={handleFileClick} variant='secondary'>JSON</Button>  
                    </IconsContainer>
                    <IconsContainer>
                        <Button onClick={onGenerateClick} variant='secondary'>INPUT</Button>
                    </IconsContainer>
                </div>
                <IconSpan 
                    className='material-symbols-outlined' 
                    onClick={closeModalImport} 
                    style={{ position: 'absolute', display:'flex', right:'8%', top:'5%' ,overflow: 'visible' }} >
                    {'close'}
                </IconSpan>
            </div>
        </Modal>
    );
};

export default ImportModal;