import { useEffect, useState } from "react"
import "./locations.css"

export const LocationsList = () => {

    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
        },
        []
    )
        return <>
            <h2>List of Locations</h2>
            <article className="locations">
            {locations.map(
                (location) => {
                    return <section className="location" key={`location--${location.id}`}>
                        <header>{location.address}</header>
                        <footer>SqFootage: {location.sqFootage}</footer>
                    </section>
                }
            )}

            </article>
        
        </>



}