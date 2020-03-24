import React from 'react'

import './index.scss'

export default ({changeNumOfPairs}) => {
    return(
        <div className='selectNumOfPairsBoard'>
            <div onClick={changeNumOfPairs} value='4'>4</div>
            <div onClick={changeNumOfPairs} value='6'>6</div>
            <div onClick={changeNumOfPairs} value='8'>8</div>
            <div onClick={changeNumOfPairs} value='10'>10</div>
            <div onClick={changeNumOfPairs} value='12'>12</div>
            <div onClick={changeNumOfPairs} value='14'>14</div>
            <div onClick={changeNumOfPairs} value='16'>16</div>
            <div onClick={changeNumOfPairs} value='18'>18</div>
            <div onClick={changeNumOfPairs} value='20'>20</div>
        </div>
    )
}