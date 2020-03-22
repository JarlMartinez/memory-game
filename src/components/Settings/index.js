import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import { IconContext } from 'react-icons'
import { IoIosSettings } from 'react-icons/io'

import { changePairsOnBoard } from '../../actions'

import './index.scss'

const Settings = ({ boardStatus, setBoardStatus }) => {

    const [settings, setSettings] = useState({
        opened: false,
        isBoardToChangeNumOfPairsOpened: false,
    })

    const closeAll = () => {
        setSettings(prev => ({
            ...prev,
            opened: false,
            isBoardToChangeNumOfPairsOpened: false
        }))
    }

    const showBoardToSelectNumOfPairs = e => {
        e.stopPropagation()
        setSettings(prev => ({
            ...prev,
            isBoardToChangeNumOfPairsOpened: true
        }))
    } 

    const changeNumOfPairs = e => {
        const pairsSelected = parseInt(e.target.attributes.value.value)
        setBoardStatus(prev => ({
            ...prev,
            pairsPlaying: pairsSelected
        }))
        closeAll()
    }

    const SelectNumOfPairsBoard = () => {
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

    const SettingsModal = () => {
        return <>
            <div className='settingsModal'
                onClick={closeAll}>
                {settings.isBoardToChangeNumOfPairsOpened 
                    ? <SelectNumOfPairsBoard />
                    : <>
                        <p onClick={showBoardToSelectNumOfPairs}>
                            Change number of pairs to guess
                        </p>
                        <p>change theme</p>
                    </>
                }
            </div> 
        </>
    }

    return <>
        {
            !settings.opened
            ? <IconContext.Provider value={{className: 'settingsGear'}}>
                    <IoIosSettings size={40} onClick={() => setSettings(prev => ({...prev, opened: true}))}/> 
                </IconContext.Provider>
            : <SettingsModal />
        }
    </>
} 


const connectStore = store => store

export default connect(connectStore, null)(Settings)