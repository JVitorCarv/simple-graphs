import { useCallback, useEffect, useState } from 'react';
import { useCy } from '../../../../../../providers/useCy';
import InstructionBox from '../../../../EditorContainer/components/InstructionBox/InstructionBox';
import { Button } from '../../../../EditorContainer/components/Button/Button';
import { CheckboxInput, SelectDirectionContainer, Slider, SliderBefore, StyledSwitch } from './styles';


const AddEdge: React.FC = () => {
  const cy = useCy();

  const [sourceNode, setSourceNode] = useState<string>('');
  const [targetNode, setTargetNode] = useState<string>('');
  const [directed, setDirected] = useState<boolean>(false);
  const [weight, setWeight] = useState<number>(0);

  const addEdge = (isDirected: boolean = false) => {
    if (sourceNode.trim() === '' || targetNode.trim() === '') return;

    const newEdgeId = Date.now();

    cy.current.add({
      group: 'edges',
      data: {
        id: `${newEdgeId}`,
        source: sourceNode,
        target: targetNode,
        weight: weight,
      },
    });

    if (isDirected) {
      cy.current.$(`#${newEdgeId}`)
        .style('target-arrow-shape', 'triangle')
        .style('target-arrow-color', '#00578a');
    }

    setSourceNode('');
    setTargetNode('');
    setWeight(0);
  };

  const registerNode = useCallback((node: any) => {
    if (sourceNode === '') {
      setSourceNode(node);
      return;
    }
    setTargetNode(node);
  }, [sourceNode, setTargetNode]);

  const handleTap = (e: any) => registerNode(e.target.id());

  useEffect(() => {
    const cyRef = cy.current;

    cyRef.nodes().on('tap', handleTap);

    return () => {
      cyRef.nodes().off('tap', handleTap);
    };
  }, [cy, handleTap]);

  return (
    <>
      {sourceNode == '' && <InstructionBox content={"Click on the source node"} />}
      {sourceNode != '' && targetNode == '' && <InstructionBox content={"Click on the target node"} />}
      {sourceNode != '' && targetNode != '' && (
        <InstructionBox
          content={
            <input
              type="text"
              onChange={(e) => setWeight(parseInt(e.target.value))}
              placeholder={`Insert weight...`}
            />
          }
          button={
            <>
              <SelectDirectionContainer>
                <p>Directed</p>
                <StyledSwitch className={directed ? "round" : ""}>
                  <CheckboxInput
                    type="checkbox"
                    checked={directed}
                    onChange={() => setDirected(!directed)}
                  />
                  <Slider className="slider" />
                  <SliderBefore className="slider-before" />
                </StyledSwitch>
              </SelectDirectionContainer>
              <Button onClick={() => addEdge(directed)} variant='primary'>Add</Button>
            </>
          }
        />
      )}
    </>
  );
};

export default AddEdge;
