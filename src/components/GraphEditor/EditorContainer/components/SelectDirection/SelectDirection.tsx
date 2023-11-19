import React, { useContext } from "react"
import { Container } from "./styles"
import { CheckboxInput, Slider, SliderBefore, StyledSwitch } from "../../../Editors/EdgeEditor/components/AddEdge/styles"
import { DirectionContext } from "../../../../../providers/DirectionProvider"
import { useCy } from "../../../../../providers/useCy"

const SelectDirection: React.FC = () => {
    const cy = useCy();
    const { direction, setDirection } = useContext(DirectionContext);

    const handleToggle = () => {
        if (!direction) {
            cy.current.edges().style({
                'target-arrow-shape': 'triangle',
                'target-arrow-color': '#00578a',
            })
        } else {
            cy.current.edges().style({
                'target-arrow-shape': 'none'
            })
        }
        setDirection(!direction);
    }
	return (
		<Container>
			<StyledSwitch className={direction ? "round" : ""}>
				<CheckboxInput
					type="checkbox"
					checked={direction}
					onChange={handleToggle}
                    />
				<Slider className="slider" />
				<SliderBefore className="slider-before" />
			</StyledSwitch>
            <p>Directed</p>
		</Container>
	)
}

export default SelectDirection
