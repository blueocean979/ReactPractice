import { Theme } from '../../contexts/contexts'

export default function ThemeProvider ({children, theme}) {

    return(
        <Theme.Provider value={theme} >
            {children}
        </Theme.Provider>
    )
    
}