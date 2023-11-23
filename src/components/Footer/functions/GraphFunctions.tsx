import cytoscape from 'cytoscape';

export const generateGraphFromUserInput = (cy: cytoscape.Core, input: string) => {
  const lines = input.split('|');
  cy.elements().remove();

  const nodeIds = new Map<string, string>();

  lines.forEach((line, index) => {
    const [source, target, weight] = line.split(' ');

    if (!nodeIds.has(source)) {
      const sourceNodeId = `node${nodeIds.size}`;
      nodeIds.set(source, sourceNodeId);

      cy.add({
        group: 'nodes',
        data: { id: sourceNodeId, label: `${source}` },
        position: { x: 0, y: 0 },
      });
    }

    if (!nodeIds.has(target)) {
      const targetNodeId = `node${nodeIds.size}`;
      nodeIds.set(target, targetNodeId);

      cy.add({
        group: 'nodes',
        data: { id: targetNodeId, label: `${target}` },
        position: { x: 0, y: 0 },
      });
    }

    const edgeId = `edge${index}`;
    cy.add({
      group: 'edges',
      data: {
        id: edgeId,
        source: nodeIds.get(source),
        target: nodeIds.get(target),
        weight: parseInt(`${weight}`),
      },
    });
  });
  return cy.layout({ name: 'grid' }).run();
};
  
  export const handleInputBatch = (cy: cytoscape.Core, generateGraphFromUserInput: (cy: cytoscape.Core, input: string) => void) => {
    const userInput = prompt('Digite as informações para gerar o grafo (por exemplo, "0 2 3|0 1 2|1 2 3"):');
    if (userInput) {
      generateGraphFromUserInput(cy, userInput);
    }
  };

  export const handleFileChange = (cy: cytoscape.Core, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const contents = e.target?.result;
            if (typeof contents === 'string') {
                cy.json(JSON.parse(contents));
            }
        };
        reader.readAsText(file);
    }
};