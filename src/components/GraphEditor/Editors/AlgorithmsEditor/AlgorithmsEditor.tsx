import React, { useState } from "react"
import InstructionBox from "../../EditorContainer/components/InstructionBox/InstructionBox"
import MenuButton from "../../EditorContainer/components/MenuButton/MenuButton"
import DijkstraAlgorithm from "./components/DijkstraAlgorithm/DijkstraAlgorithm"

const AlgorithmsEditor: React.FC = () => {
	const [mode, setMode] = useState<string>("")

	return (
		<>
			<MenuButton setMode={setMode} mode="dijkstra" currentMode={mode}>
				Dijkstra
			</MenuButton>
			{mode === '' && <InstructionBox content={"Select an Algorithm"} />}
			{mode === "dijkstra" && <DijkstraAlgorithm />}
		</>
	)
}

export default AlgorithmsEditor
