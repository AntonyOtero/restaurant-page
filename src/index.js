import {home} from './home/home'
import {menu} from './menu/menu'
import {contact} from './contact/contact'
import './style.css'

const app = document.querySelector('#content')

app.append(home())
// app.append(menu())
// app.append(contact())