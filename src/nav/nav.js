import './nav.css'

const navbar = () => {
  const component = document.createElement('nav')

  component.classList.add('navbar')

  component.innerHTML = `
    <a href='#home' class='selected'>Home</a>
    <a href='#menu'>Menu</a>
    <a href='#contact'>Contact</a>
  `

  return component
}

export {navbar}