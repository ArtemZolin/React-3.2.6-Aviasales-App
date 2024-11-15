import React from "react";

import './card.scss';
import { formatDuration, formatTime } from './formatTime'




function Card ({ data }) {
  const { price, carrier, segments } = data

  const logoUrl = `https://pics.avs.io/99/36/${carrier}.png`

  const [outboundSegment, returnSegment] = segments

  const stopsInfo = (stops) => {
    if (stops.length === 0) return ' '
    return stops.join(', ')
  }

  const stopsCountText = (stops) => {
    if (stops.length === 0) return '0 пересадок'
    return `${stops.length} ${stops.length === 1 ? 'пересадка' : 'пересадки'}`
  }


  return(
    <div className="card"> 


      

      <div className="card-header">
        {/* <div className="price">13 400 P</div> */}
        <div className="price">{price.toLocaleString('ru-RU')} Р</div>
        <div className="brend">
          {/* <img src="http://pics.avs.io/99/36/SU.png" alt="brend"></img> */}
          <img src={logoUrl} alt="brend"></img>
        </div>
      </div>
      
      
      <div className="card-row">
        
        <div className='mow-htk row__style'>
          {outboundSegment.origin} – {outboundSegment.destination}
        </div>
          
        <div className='time-mow-htk row__style-1'>
          {formatTime(outboundSegment.date)} –{' '}
          {formatTime(new Date(new Date(outboundSegment.date).getTime() + outboundSegment.duration * 60000))}
        </div>

        <div className='on-the-way row__style'>В пути</div>
        <div className='transfers row__style'>{stopsCountText(outboundSegment.stops)}</div>
        <div className='cities row__style-1'>{stopsInfo(outboundSegment.stops)}</div>
        <div className='time-on-the-way row__style-1'>{formatDuration(outboundSegment.duration)}</div>

      </div>




      <div className=''>
        {formatTime(returnSegment.date)} –{' '}
        {formatTime(new Date(new Date(returnSegment.date).getTime() + returnSegment.duration * 60000))}
      </div>
          
      
      <div className=''>
        {returnSegment.origin} – {returnSegment.destination}
      </div>
                
      <div className=''>В пути</div>
      <div className=''>{formatDuration(returnSegment.duration)}</div>
            
       
      <div className=''>{stopsCountText(returnSegment.stops)}</div>
      <div className=''>{stopsInfo(returnSegment.stops)}</div>
        
    </div>
    
   
  
    
  )
}

export default Card