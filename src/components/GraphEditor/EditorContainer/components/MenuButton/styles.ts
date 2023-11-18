import styled from "styled-components";
import { Button } from "../Button/Button";

interface SelectButtonProps {
    selected: boolean,
}

const getBackgroundColor = (selected: boolean) => {
    if (selected) {
        return 'rgba(0, 122, 255, 0.15);'
    }
    return 'var(--fills-tertiary, rgba(0, 0, 0, 0.12))';
}

export const SelectButton = styled(Button)<SelectButtonProps>`
    background-color: ${(props) => getBackgroundColor(props.selected)};
    transition: all 0.3s;
`