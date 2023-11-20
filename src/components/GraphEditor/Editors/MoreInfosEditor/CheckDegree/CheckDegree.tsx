import React, { useContext, useEffect, useState} from 'react';
import { useCy } from '../../../../../providers/useCy';
import InstructionBox from '../../../EditorContainer/components/InstructionBox/InstructionBox';
import { DirectionContext } from '../../../../../providers/DirectionProvider';
import { Container, InfoContainer, ContainerDirected, Heading, Value} from './styles';

const CheckDegree:React.FC = () => {

    const cy = useCy();

    const [enableEdit, setEnableEdit] = useState(false);
    const [selectedNode, setSelectedNode] = useState<string>('');
    const { direction } = useContext(DirectionContext);

    const handleClick = (e: any) => {
        setEnableEdit(true);
        setSelectedNode(e.target.id());
    }

    useEffect(() => {
        const cyRef = cy.current;

        cyRef.nodes().on('tap', handleClick);
        return () => {
            cyRef.nodes().off('tap', handleClick);
        }
    }, [cy]);
 
    const cyRef = cy.current;

    var nodeValency = cyRef.getElementById(selectedNode);
    if(direction) {
        var valencyIndegree = nodeValency.indegree();
        var valencyOutdegree = nodeValency.outdegree();
    } else {
        var valency = nodeValency.degree();
    }

    return(
        <>
            {!enableEdit && (<InstructionBox content={"Click on the node you wish to see the degree"} />)}
            {enableEdit && !direction && 
            <Container>
                <InfoContainer>
                    <Heading>Valency:</Heading>
                    <Value>{valency}</Value>
                </InfoContainer>
            </Container>}
            {enableEdit && direction && 
            <ContainerDirected>
                <InfoContainer>
                    <Heading>In:</Heading>
                    <Value>{valencyIndegree}</Value>
                </InfoContainer>
                <InfoContainer>
                    <Heading>Out:</Heading>
                    <Value>{valencyOutdegree}</Value>
                </InfoContainer>
            </ContainerDirected>}
        </>
    );
};

export default CheckDegree;