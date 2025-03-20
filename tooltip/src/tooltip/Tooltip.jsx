import {useEffect, useRef, useState} from 'react';

function Tooltip ({text, domRect}) { 
    let [position, setPosition] =useState({x:0 , y:0})

    let tooltipElement = useRef();

    useEffect(() => {
        if (tooltipElement.current) {
            let { width, height } = tooltipElement.current.getBoundingClientRect();
            let coords={}
            if(domRect.y <height ){
                coords.y = domRect.y + height
            }else{
                coords.y = domRect.y - height
            }

            coords.x= domRect.x + (domRect.width / 2 ) - (width / 2)
            setPosition(coords)
        }
    }, [domRect]);

    return( 
        <span ref={tooltipElement} className="tooltip" style={{left:position.x,top:position.y, position :'absolute'}}>{text}</span> 
    ); 
} 

export default Tooltip;