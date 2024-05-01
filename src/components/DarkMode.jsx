// import { ReactComponent } from 'react'
// import { ReactComponent as Sun } from '../assets/Sun.svg'
// import { ReactComponent as Moon } from '../assets/Moon.svg'

import { Moon, Sun } from '../assets/index'

import './DarkMode.css'

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  }
  const setLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }

  const selectedTheme = localStorage.getItem('theme')

  if (selectedTheme === 'dark') setDarkMode()

  const toggleTheme = (e) => {
    // e.PreventDefault()
    if (e.target.checked) setDarkMode()
    else setLightMode()
  }

  return (
    <div className='dark_mode'>
      <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
      />
      <label
        className='dark_mode_label'
        htmlFor='darkmode-toggle'
      >
        <Sun />
        <Moon />
      </label>
    </div>
  )
}

export default DarkMode
