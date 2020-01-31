import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([])
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/location/")
        .then(resizeBy => {
            console.log("response", response.data.results)
            setLocations(res.data.results)
        })
        .catch(error => {
            console.log("server error", error)
        })





    }, [])
    return(
        <section className="location-list">
            <div>
                {locations.map((location)=>{
                    return <LocationCard  key={location.id} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents}/>
                })}
            </div>
        </section>
    )

}
