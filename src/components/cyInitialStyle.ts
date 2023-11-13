export const cyInitialStyle: cytoscape.Stylesheet[] = [
    {
      selector: 'node',
      style: {
        'background-color': '#007AFF',
        'label': 'data(label)',
        'text-halign': 'center',
        'text-valign': 'center',
        'color': '#FFF',
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#00578a',
        'curve-style': 'bezier',
        'label': 'data(weight)',
        'text-halign': 'center',
        'text-valign': 'top',
        'text-outline-color': '#000',
        'text-outline-width': 1,
        'color': '#FFF',
      }
    }
  ];
  