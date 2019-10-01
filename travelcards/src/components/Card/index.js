import React from 'react'






const Card = ({props}) => {
const { name, dateFrom, dateTo, guests, transport, category, image, copy } = props;
console.log(image)
    return (<div className='card-wrap'>
      <h4 className='card-name'>{name}</h4>
      <div className='img-row'>
      <img className='image' src = {require(`../../assets/${image}`)}/>
      </div>
      <p className='category'>{category}</p>

      <div className='date-row'>
      <p className='card-text'>{dateFrom} - {dateTo}</p>
      </div>

      <div className='card-row'>
      <p className='card-text'>guests: {guests}</p>
      <p className='card-copy'>{copy}</p>
      </div>
  </div>)
}
  


  export default Card;