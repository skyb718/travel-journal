import React from 'react'
// import ReactDOM from 'react-dom'
import Navbar from './Navbar'
import Data from './data'
import Card from './card'


export default function App() {
    const places = Data.map(item => {
        return (
            <Card
            key=""
                title={item.title}
                location={item.location}
                map={item.googleMapsUrl}
                start={item.startDate}
                end={item.endDate}
                info={item.description}
                img={item.imageUrl}
            />
        )
    })
        return (
        <div>
            <Navbar />
            
            <section className="cards-list">
               {places}
            </section>
        </div>
    )
}  

