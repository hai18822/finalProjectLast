import SearchForm from "./searchForm/SearchForm";
import District from "./district/District.js";
import Listroom from "./listroom/Listroom.js";
import React, {useState,useEffect} from "react";
import axios from 'axios'

function Body() {
    const [districts,setDistricts] = useState([])
    console.log(districts);
    useEffect(()=>{
        axios.get('http://localhost:8000/district')
                .then(res => setDistricts(res.data))
                .catch(error=>console.log(error))
    })
    return (
        <div>
            <div className="container">
                
                <SearchForm />
                  
                <District districts={districts}/>
                
                <Listroom/>
                
                
            </div>
        </div >
    );
}

export default Body;
