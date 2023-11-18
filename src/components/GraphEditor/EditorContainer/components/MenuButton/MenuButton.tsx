import { useEffect, useState } from "react";
import { SelectButton } from "./styles";

interface MenuButtonProps {
    setMode: React.Dispatch<React.SetStateAction<string>>,
    mode: string,
    currentMode: string,
    children: React.ReactNode,
}

const MenuButton: React.FC<MenuButtonProps> = ({setMode, mode, currentMode, children}) => {
    const [selected, setSelected] = useState<boolean>(false);

    useEffect(() => {
        if (mode === currentMode) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [mode, currentMode])

    return (
        <SelectButton 
            onClick={() => setMode(mode)}
            selected={selected}
        >
            {children}
        </SelectButton>
    )
}

export default MenuButton;