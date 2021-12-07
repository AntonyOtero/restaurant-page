import './header.css'
import logoSrc from '../images/logo-lg.png'

export const header = () => {
  const component = document.createElement('header')
  const logo = new Image()

  logo.src = logoSrc
  logo.classList.add('logo')

  component.append(logo)

  return component
}