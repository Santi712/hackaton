import { useParams } from 'react-router-dom'
import { useContext } from "react";
import { DataContext } from '../context/DataContext';

export default function Course() {
    const {id} = useParams();
    console.log("funciona porfissss");
    
    const { data } = useContext (DataContext);
    console.log("mira este objeto " + data);
    
    const Detail = data.find(item => item.id === parseInt(id));
    console.log("esto retorna el objeto" + Detail);

    return(
        <h1>Goodbye</h1>
    )
}