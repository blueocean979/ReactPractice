import ListItem from '../listItem/listItem'

export default function List({ list }) {
    return (
        <div style={{width: '50%', padding: "8px 24px"}}>
            <h2>List header</h2>
            {list.map((item) => <ListItem data={item} />)}
        </div>
    )
}