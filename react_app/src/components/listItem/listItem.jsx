import './listItem.css'
import { useContext } from 'react'
import { Theme } from '../../contexts/contexts'

export default function ListItem ({ data }) {
    const theme = useContext(Theme)
    console.log('theme', theme);
    return (
        <div className={`itemStyle ${theme}`} >
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.info}</p>
        </div>
    )
}