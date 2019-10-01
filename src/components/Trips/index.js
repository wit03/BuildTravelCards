import React from 'react'
import response from '../../response/response'
import Card from '../Card'
import './trips.css'

const Trips = () => (
  <div className="trips-wrap">
    <h4 className="heading">view latest trips</h4>
    <div className="trips-cards-wrap">
      {response.map(trip => (
        <Card props={trip} />
      ))}
    </div>
  </div>
)

export default Trips
