import React, { useContext, useEffect, useState } from "react"
import { useCy } from "../../../../../providers/useCy"
import { DirectionContext } from "../../../../../providers/DirectionProvider"
import InstructionBox from "../../../EditorContainer/components/InstructionBox/InstructionBox"
import {
	Container,
	InfoContainer,
	ContainerDirected,
	Heading,
	Value,
} from "../CheckDegree/styles"

const GetAdjacentNodes: React.FC = () => {
	const cy = useCy()
	const [selectedNode, setSelectedNode] = useState<string>("")
	const { direction } = useContext(DirectionContext)

	const handleClick = (e: any) => {
		setSelectedNode(e.target.id())
	}

	const getNodeInformation = (method: any) => {
		const result = cy.current.getElementById(selectedNode)[method]()
			.filter("node")
			.map((node: any) => node.data("label"))
			.join(", ")

		return result ? result : "None"
	}

	const getNeighborhood = () => getNodeInformation("neighborhood")

	const getSourceNodes = () => getNodeInformation("incomers")

	const getTargetNodes = () => getNodeInformation("outgoers")

	useEffect(() => {
		const cyRef = cy.current

		cyRef.nodes().on("tap", handleClick)
		return () => {
			cyRef.nodes().off("tap", handleClick)
		}
	}, [cy])

	return (
		<>
			{!selectedNode && <InstructionBox content={"Click on a node"} />}
			{selectedNode && !direction && (
				<Container>
					<InfoContainer>
						<Heading>Neighbor nodes:</Heading>
						<Value>{getNeighborhood()}</Value>
					</InfoContainer>
				</Container>
			)}
			{selectedNode && direction && (
				<ContainerDirected>
					<InfoContainer>
						<Heading>In:</Heading>
						<Value>{getSourceNodes()}</Value>
					</InfoContainer>
					<InfoContainer>
						<Heading>Out:</Heading>
						<Value>{getTargetNodes()}</Value>
					</InfoContainer>
				</ContainerDirected>
			)}
		</>
	)
}

export default GetAdjacentNodes
