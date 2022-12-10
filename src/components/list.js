import ListItem from "./list-item";

const List = ({posts, onDone, onDelete, onRedact, onRedactLabel}) => {
    if (posts.length > 0){
        return(
            <ul className="list">
               {
                    posts.map((item)=>{
                        return (<ListItem 
                                key={item.id} 
                                {...item} 
                                onDone={()=>onDone(item.id)} 
                                onDelete={()=>onDelete(item.id)}
                                onRedact={()=>onRedact(item.id)}
                                onRedactLabel={onRedactLabel}
                                />)
                    })
                }
            </ul>
        )
    } else {
        return (
            <div className="list">нет задач...</div>
        )
    }
}

export default List;