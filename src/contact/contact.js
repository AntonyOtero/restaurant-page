import './contact.css'

const contact = () => {
  const container = document.createElement('div')

  container.classList.add('contact')

  container.innerHTML = `
    <form action='' method='get' class='form-contact'>
      <legend>Any Questions or Comments?</legend>
      <div>
      <input type='text' name='pronoun' id='pronoun' placeholder='Pronoun'>
      <input type='text' name='name' id='name' placeholder='Name'>
      </div>
      <input type='email' name='email' id='email' placeholder='Email Address'>
      <textarea name='message' id='message' placeholder='Message'></textarea>
      <button>Send</button>
    </form>
    <address>
      <p>
        1150 Broadway Ave<br>
        New York City,<br>
        New York 11101<br>
      </p>
      <a href='tel+15553443447'>555.344.3447</a>
    </address>
  `

  return container
}

export {contact}