import './home.css'
import Cover from '../../images/cover.webp'

const home = () => {
  const container = document.createElement('div')
  const headline = document.createElement('div')
  const coverImage = new Image()

  container.classList.add('home')
  headline.classList.add('headline')
  coverImage.classList.add('cover-image')

  headline.innerHTML = `
    <p><strong>Petite Choufleur</strong> is a original bistro serving dishes based on seasonal products. We often change our menu to welcome you always anew, <strong>not in an obvious manner</strong>.</p>
    <p>There are countries where wine is as natural as water and air, so here you can drink it in a carefree, cosy atmosphere <strong>without bloat</strong>.</p>
  `

  coverImage.src = Cover
  coverImage.alt = "Small round table topped with a wine bottle and glasses."

  container.append(headline)
  container.append(coverImage)

  return container
}

export {home}
