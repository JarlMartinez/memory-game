import React from 'react'

import './index.scss'

export default ({handleChangeSizeOfCards}) => {
    return (
        <div className='selectCardsSizeBoard'>
            <div onClick={handleChangeSizeOfCards} value='40px'>25%</div>
            <div onClick={handleChangeSizeOfCards} value='70px'>50%</div>
            <div onClick={handleChangeSizeOfCards} value='100px'>75%</div>
            <div onClick={handleChangeSizeOfCards} value='140px'>100%</div>
        </div>
    )
}