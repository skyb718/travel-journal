import React from "react"

export default function Card(props) {
    // <img src="/images/location-mark.png" className="location-mark" />
    return (
        <div className="card">
            <img src={`./images/${props.img}`} className="card-img" />
            
            <div className="card-info">
                
                <span className="location">{props.location}</span>
                <span className="maps-link"><a href={props.map}>View on Google Maps</a></span>
                <h3 className="card-title">{props.title}</h3>
                <span className="date">{props.start} - </span>
                <span className="date">{props.end}</span>
                <p className="plain-text">{props.info}</p>
            </div>
        </div>
    )
}
// title: 'Barcelona',
//     location: 'Spain',
//     googleMapsUrl:'https://www.google.com/maps/place/Barcelona,+Spain/@41.3923112,1.8531001,11z/data=!3m1!4b1!4m5!3m4!1s0x12a49816718e30e5:0x44b0fb3d4f47660a!8m2!3d41.3873974!4d2.168568',
//     startDate: '20, May, 2022',
//     endDate: '22, May, 2022',
//     description: 'Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.',
//     imageUrl:'skybarc.jpeg'