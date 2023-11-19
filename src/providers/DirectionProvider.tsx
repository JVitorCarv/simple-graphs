import React, { createContext, useState, ReactNode } from 'react';

interface DirectionContextType {
    direction: boolean,
    setDirection: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DirectionContext = createContext<DirectionContextType>({
    direction: false,
    setDirection: () => {},
});

interface DirectionProviderProps {
    children: ReactNode;
}

export const DirectionProvider: React.FC<DirectionProviderProps> = ({ children }) => {
    const [direction, setDirection] = useState<boolean>(false);

    return (
        <DirectionContext.Provider value={{ direction, setDirection }}>
            {children}
        </DirectionContext.Provider>
    )
}
