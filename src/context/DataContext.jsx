import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext ();

const DataProvider = ({children}) => {
        const [data, setData] = useState ([]);

        useEffect (() => {
            axios.get("dummy-data.json").then((res)=> setData(res.data.courses));
            
        },[])


    return(
        <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
    )
};

export default DataProvider;