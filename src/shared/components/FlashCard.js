import React from 'react'

const FlashCard = ({symbol, element}) => {
    return <div style = {{
        width: '200px', 
        height: '200px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        border: '1px solid black',
        fontSize: '2em',
        margin: '10px'
    }}>{symbol}</div>

}

export default FlashCard