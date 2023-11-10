import React, { ChangeEvent, useCallback } from 'react';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';

const ExportImportGraph: React.FC = () => {
    const cy = useCy();

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
        <>
            <button onClick={handleExportClick}>Exportar JSON</button>
            <button onClick={handleExportPngClick}>Exportar PNG</button>
            <input type="file" accept=".json" onChange={handleFileChange} />
            <InstructionBox content="Choose to Upload or Export (JSON or SVG) " />
        </>
    );
};

export default ExportImportGraph;