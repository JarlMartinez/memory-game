import React from 'react'
import { connect } from 'react-redux'

import { changeTheme } from '../../../redux/actions'


import './index.scss'

const Board = (props) => {

    const { themes, currentThemeIndex, changeTheme } = props

    const handleClick = (e, i) => {
        e.stopPropagation()
        changeTheme(i)
    }

    return (
        <div className='boardOfThemes'>
            {themes.map((theme, i) => {
                const classForOption = 
                    i === currentThemeIndex 
                    ? 'selectedTheme' 
                    : ''
                return (
                <div
                    key={i}
                    onClick={(e) => handleClick(e, i)}
                    value={theme}
                    style={{background: theme.gradient}}
                    className={classForOption}>
                </div>
                )
            })}
        </div>
    )
}

const connectActions = {
    changeTheme
}

const connectStore = store => ({
    themes: store.themes,
    currentThemeIndex: store.currentThemeIndex
})

export default connect(connectStore, connectActions)(Board)