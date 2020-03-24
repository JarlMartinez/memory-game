import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { changeSizeOfCards } from '../../actions'

import SelectNumOfPairsBoard from '../../components/SettingsComponents/SelectNumOfPairsBoard'
import SelectCardsSizeBoard from '../../components/SettingsComponents/SelectCardsSizeBoard'

import { IconContext } from 'react-icons'
import { IoIosSettings } from 'react-icons/io'


import './index.scss'

const Settings = ({ setBoardStatus, changeSizeOfCards }) => {

    const [settings, setSettings] = useState({
        opened: false,
        isBoardToChangeNumOfPairsOpened: false,
        isBoardToChangeCardsSizeOpened: false
    })

    const closeAll = () => {
        setSettings(prev => ({
            ...prev,
            opened: false,
            isBoardToChangeNumOfPairsOpened: false,
            isBoardToChangeCardsSizeOpened: false
        }))
    }

    const showBoardToSetSometting = e => {
        e.stopPropagation()
        switch (e.target.attributes.value.value) {
            case ('changeNumOfPairs'):
                setSettings(prev => ({
                    ...prev,
                    isBoardToChangeNumOfPairsOpened: true
                }))
                return
            case ('changeCardsSize'): {
                setSettings(prev => ({
                    ...prev,
                    isBoardToChangeCardsSizeOpened: true
                }))   
                return
            }
            default:
                return
        }
    } 

    const changeNumOfPairs = e => {
        const pairsSelected = parseInt(e.target.attributes.value.value)
        setBoardStatus(prev => ({
            ...prev,
            pairsPlaying: pairsSelected
        }))
    }

    const handleChangeSizeOfCards = e => {
        const sizeSelected = e.target.attributes.value.value
        changeSizeOfCards(sizeSelected)
    }

    const Boards = () => {
        if (settings.isBoardToChangeNumOfPairsOpened) {
            return <SelectNumOfPairsBoard changeNumOfPairs={changeNumOfPairs}/>
        }
        if (settings.isBoardToChangeCardsSizeOpened) {
            return <SelectCardsSizeBoard handleChangeSizeOfCards={handleChangeSizeOfCards}/>
        }
        return (
            <div>
                <p value='changeNumOfPairs'
                    onClick={showBoardToSetSometting}>
                    Change number of pairs to guess</p>
                <p value='changeCardsSize'
                    onClick={showBoardToSetSometting}>
                    Change cards size</p>
            </div>
        )
    }

    const SettingsModal = () => {
        return <>
            <div className='settingsModal'
                onClick={closeAll}>
                <Boards />
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

const connectActions = {
    changeSizeOfCards
}

const connectStore = store => store

export default connect(connectStore, connectActions)(Settings)