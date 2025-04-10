import "./ListItems.css"

const ListItems=(props)=>{
    const {Details}=props
    const {name,img}=Details
    console.log(name);
    return(
        <li>
            <img src={img} alt={name}/>
            <p>{name}</p>
        </li>
    )
}
export default ListItems;