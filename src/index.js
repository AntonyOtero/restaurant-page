import {navbar} from './nav/nav'
import {header} from './header/header'
import {footer} from './footer/footer'
import {home} from './home/home'
import {menu} from './menu/menu'
import {contact} from './contact/contact'
import './style.css'

const components = {
  home: home(),
  menu: menu(),
  contact: contact()
}

const App = document.querySelector('#content')

App.append(header())
App.append(navbar())
App.append(components.home)
App.append(footer())

const Navbar = document.querySelector('.navbar')

Navbar.addEventListener('click', (e) => {
  const active = document.querySelector('.selected')
  if(e.target !== active){
    active.classList.remove('selected')
    e.target.classList.add('selected')

    document.querySelector('.' + active.dataset.component).remove()
    App.append(components[e.target.dataset.component])
    document.querySelector('footer').remove()
    App.append(footer())

    if(e.target.dataset.component !== 'home') {
      document.querySelector('header').classList.add('logo-sm')
    } else {
      document.querySelector('header').classList.remove('logo-sm')
    }
  }
})
