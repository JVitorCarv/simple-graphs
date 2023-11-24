import React, { useState } from "react"
import InstructionBox from "../../EditorContainer/components/InstructionBox/InstructionBox"
import MenuButton from "../../EditorContainer/components/MenuButton/MenuButton"
import DijkstraAlgorithm from "./components/DijkstraAlgorithm/DijkstraAlgorithm"
import CheckDiameter from "./components/CheckDiameter/CheckDiameter"

const AlgorithmsEditor: React.FC = () => {
	const [mode, setMode] = useState<string>("")

	return (
		<>
			<MenuButton setMode={setMode} mode="dijkstra" currentMode={mode}>
				Dijkstra
			</MenuButton>
      <MenuButton setMode={setMode} mode="diameter" currentMode={mode}>
				Diameter
			</MenuButton>
			{mode === '' && <InstructionBox content={"Select an Algorithm"} />}
			{mode === "dijkstra" && <DijkstraAlgorithm />}
      {mode === "diameter" && <CheckDiameter />}
		</>
	)
}

export default AlgorithmsEditor
