import {Component} from "react"
import ListItems from "../placesListItems/ListItems"
import "./place.css"

const Places=[{
    id:1,
    name:"Andaman and Nicobar Islands",
    img:`https://cdn.britannica.com/28/1628-050-50922A3F/Andaman-redwood-trees-Cinque-Islands-Rutland-Island.jpg?w=400&h=300&c=crop`,
},
{   id:2,
    name:"Kerala backwaters",
    img:`https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fkerala.jpg%2Fkerala-1724266265021.jpg&w=2048&q=75`,
},
{   id:3,
    name:"Valley of flowers",
    img:`https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRFbnA0ZaHdHWoojREd6kUkHH6OJhCYVId_1bTvwSfQ7T68cmXNX0mqO2liAddDFUkS`,
},
{   id:4,
    name:"Alleppey",
    img:`https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQPjy4pruptPfaYkjdeA0m3isGTAdX5ocGzGfxZ7aUmEeCCjVaClCKh1QxYhGnSvi2R`,
},
{   id:5,
    name:"Ladakh",
    img:`https://cdn.britannica.com/23/262123-050-B115C23E/Ladakh-India-Confluence-of-the-Zanskar-river-and-Indus-river-photographed-from-a-viewpoint-along-the-Srinigar-to-Leh-highway.jpg`,
},
{   id:6,
    name:"Lakshadweep",
    img:`https://cdn.britannica.com/32/1632-050-940FB0E6/Beach-resort-Bangaram-Island-India-Lakshadweep.jpg?w=400&h=300&c=crop`
}]

class Place extends Component{
    render(){
      
        console.log(Places);
       return( 
       <div>
            <ul>
                {Places.map(Item=>(
                    <ListItems Details={Item} key={Item.id}/>
                ))}
            </ul>
        </div>
    )}
}
export default Place;

