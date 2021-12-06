import {navbar} from './nav/nav'
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

App.append(navbar())
App.append(components.home)

const Navbar = document.querySelector('.navbar')

Navbar.addEventListener('click', (e) => {
  const active = document.querySelector('.selected')
  if(e.target !== active){
    active.classList.remove('selected')
    e.target.classList.add('selected')

    document.querySelector('.' + active.dataset.component).remove()
    App.append(components[e.target.dataset.component])
  }
})
