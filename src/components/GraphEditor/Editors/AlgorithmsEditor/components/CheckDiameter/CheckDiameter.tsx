import React, { useContext, useEffect, useState } from 'react';
import { useCy } from '../../../../../../providers/useCy';
import { Container, InfoBox, InfoLabel } from './styles';
import { DirectionContext } from '../../../../../../providers/DirectionProvider';

const CheckDiameter: React.FC = () => {
    const cy = useCy();

    const [sourceNode, setSourceNode] = useState<string>('');
    const [targetNode, setTargetNode] = useState<string>('');
    const [diameter, setDiameter] = useState<number>(0);
    const { direction } = useContext(DirectionContext);

    useEffect(() => {
      const cyRef = cy.current;

      let diameter = 0;
      let source = '';
      let target = '';

      cyRef.nodes().forEach((node: any) => {
        const dijkstraResult = direction
        ? cy.current.elements().dijkstra(node, (edge: any) => edge.data('weight'), true)
        : cy.current.elements().dijkstra(node, (edge: any) => edge.data('weight'));

        cyRef.nodes().forEach((otherNode: any) => {
          if (node.id() !== otherNode.id()) {
    
            const distance = dijkstraResult.distanceTo(`#${otherNode}`);
            console.log(distance);
            if (distance > diameter) {
              diameter = distance;
              source = node.id();
              target = otherNode.id();
            }
          }
        });
      });

      setSourceNode(getNodeLabel(source));
      setTargetNode(getNodeLabel(target));
      setDiameter(diameter);

    }, []);

    const getNodeLabel = ((node: any) => {
      const cyRef = cy.current;

      return cyRef.getElementById(node).data('label');
    });

    return (
      <>          
        <Container>
          <InfoBox>
            {diameter > 0 && diameter < Infinity &&
              <InfoLabel>Graph Diameter: {diameter}, from {sourceNode} to {targetNode}</InfoLabel>
            }

            {(diameter == 0 || diameter === Infinity) &&
              <InfoLabel>Graph Diameter: {diameter}</InfoLabel>
            }
            
          </InfoBox>
        </Container>
      </>
    );
};

export default CheckDiameter;
