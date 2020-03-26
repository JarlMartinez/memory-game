import React, { useState } from 'react'
import { connect } from 'react-redux'

import { showOrHideFoundedCars } from '../../redux/actions'

import SelectNumOfPairsBoard from '../../components/SettingsComponents/SelectNumOfPairsBoard'
import SelectCardsSizeBoard from '../../components/SettingsComponents/SelectCardsSizeBoard'
import ChangeColorsThemeBoard from '../../components/SettingsComponents/ChangeThemeBoard'

import { IconContext } from 'react-icons'
import { IoIosSettings } from 'react-icons/io'


import './index.scss'

const Settings = (props) => {

    const { showOrHideFoundedCars,
            displayingPairsFounded } = props

    const [settings, setSettings] = useState({
        opened: false,
        isBoardToChangeThemeOpened: false,
        isBoardToChangeNumOfPairsOpened: false,
        isBoardToChangeCardsSizeOpened: false
    })

    const closeAll = () => {
        setSettings(prev => ({
            ...prev,
            opened: false,
            isBoardToChangeNumOfPairsOpened: false,
            isBoardToChangeCardsSizeOpened: false,
            isBoardToChangeThemeOpened: false   
        }))
    }

    const showBoardToSetSometting = e => {
        e.stopPropagation()
        switch (e.target.attributes.value.value) {
            case 'changeNumOfPairs':
                setSettings(prev => ({
                    ...prev,
                    isBoardToChangeNumOfPairsOpened: true
                }))
                return
            case 'changeCardsSize':
                setSettings(prev => ({
                    ...prev,
                    isBoardToChangeCardsSizeOpened: true
                }))   
                return
            case 'changeTheme':
                setSettings(prev => ({
                    ...prev,
                    isBoardToChangeThemeOpened: true
                }))
                return
            default:
                return
        }
    } 

    const Boards = () => {
        if (settings.isBoardToChangeNumOfPairsOpened) 
            return <SelectNumOfPairsBoard />

        if (settings.isBoardToChangeCardsSizeOpened)
            return <SelectCardsSizeBoard />

        if (settings.isBoardToChangeThemeOpened)
            return <ChangeColorsThemeBoard />

        return (
            <div>
                <p value='changeTheme'
                    onClick={showBoardToSetSometting}>
                    Change theme</p>
                <p value='changeNumOfPairs'
                    onClick={showBoardToSetSometting}>
                    Change number of pairs to guess</p>
                <p value='changeCardsSize'
                    onClick={showBoardToSetSometting}>
                    Change cards size</p>
                <div onClick={showOrHideFoundedCars}>
                    {displayingPairsFounded
                        ? <p>Hide founded cards</p>
                        : <p>Show founded cards</p>}
                </div>
            </div>
        )
    }

    const SettingsModal = () => {
        return (
            <div className='settingsModal'
                onClick={closeAll}>
                <Boards />
            </div> 
        )
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
    showOrHideFoundedCars
}

const connectStore = store => ({
    displayingPairsFounded: store.game.displayingPairsFounded
})

export default connect(connectStore, connectActions)(Settings)