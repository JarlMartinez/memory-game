import React, { useState } from 'react'
import { connect } from 'react-redux'

import SettingsMenu from '../SettingsComponents/SettingsMenu'
import SelectNumOfPairsBoard from '../SettingsComponents/SelectNumOfPairsBoard'
import SelectCardsSizeBoard from '../SettingsComponents/SelectCardsSizeBoard'
import ChangeColorsThemeBoard from '../SettingsComponents/ChangeThemeBoard'

import { IconContext } from 'react-icons'
import { IoIosSettings } from 'react-icons/io'
import { IoMdCloseCircleOutline } from 'react-icons/io'


import './index.scss'

const Settings = () => {

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

        return <SettingsMenu showBoardToSetSometting={showBoardToSetSometting} />
    }

    const SettingsModal = () => {
        return (
            <div className='settingsModal'
                onClick={closeAll}>
                <IoMdCloseCircleOutline 
                    size={45}
                    className='closeButton'/>
                <Boards />
            </div> 
        )
    }

    return <>
        {
            !settings.opened
            ? <IconContext.Provider value={{className: 'settingsGear'}}>
                    <IoIosSettings size={50} onClick={() => setSettings(prev => ({...prev, opened: true}))}/> 
                </IconContext.Provider>
            : <SettingsModal />
        }
    </>
} 

export default connect(null, null)(Settings)