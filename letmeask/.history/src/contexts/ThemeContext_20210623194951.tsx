import { createContext, ReactNode } from 'react-dom';

type ThemeContextType = 'ligth' | 'dark';

type ThemeContextProviderProps = {
    children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType('ligth');

export function ThemeContextProvider(props: ThemeContextProviderProps) {

}

return (
    <ThemeContext.Provider value={'ligth'}>
        {props.children}
    </ThemeContext.Provider>
)

