import React from 'react';
import Modal from 'react-modal';
import { IconsContainer, modalStyle } from '../../styles';
import { Button } from '../../../GraphEditor/EditorContainer/components/Button/Button';
import { IconSpan } from '../../../GraphEditor/EditorContainer/components/IconSpan/IconSpan';

interface ExportModalProps {
    isOpen: boolean;
    closeModal: () => void;
    handleExportClick: () => void;
    handleExportPngClick: () => void;
}

const ExportModal: React.FC<ExportModalProps> = ({ isOpen, closeModal, handleExportClick, handleExportPngClick }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Export Modal"
            style={modalStyle}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <IconsContainer>
                        <Button onClick={handleExportClick} variant='secondary'>JSON</Button>
                    </IconsContainer>
                    <IconsContainer>
                        <Button onClick={handleExportPngClick} variant='secondary'>PNG</Button>
                    </IconsContainer>
                </div>
                <IconSpan 
                    className='material-symbols-outlined' 
                    onClick={closeModal} 
                    style={{ position: 'absolute', display:'flex', right:'8%', top:'5%' ,overflow: 'visible' }} >
                    {'close'}
                </IconSpan>
            </div>
        </Modal>
    );
};

export default ExportModal;