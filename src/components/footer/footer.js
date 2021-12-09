import './footer.css'

export const footer = () => {
  const component = document.createElement('footer')
  
  component.innerHTML = `
    <address>
      <p>
        1150 Broadway Ave<br>
        New York City,<br>
        New York 11101<br>
      </p>
      <a href='tel+15553443447'>555.344.3447</a>
    </address>
    <p class='schedule'>
      MON–SAT<br>
      14:00–22:00
    </p>
  `

  return component
}