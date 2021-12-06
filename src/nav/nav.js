import './nav.css'

const navbar = () => {
  const component = document.createElement('nav')

  component.classList.add('navbar')

  component.innerHTML = `
    <a href='#home' class='selected' data-component='home'>Home</a>
    <a href='#menu' data-component='menu'>Menu</a>
    <a href='#contact' data-component='contact'>Contact</a>
  `

  return component
}

export {navbar}