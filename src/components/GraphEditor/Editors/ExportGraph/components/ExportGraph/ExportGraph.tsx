import React, { useCallback } from 'react';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';

const ExportGraph: React.FC = () => {
    const cy = useCy();

    const handleExportClick = useCallback(() => {
        const graphJson = cy.current.json();
        const blob = new Blob([JSON.stringify(graphJson)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'graph.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [cy]);

    return (
        <>
            <button onClick={handleExportClick}>Exportar gráfico</button>
            <InstructionBox content="Graph Exported" />
        </>
    );
};

export default ExportGraph;