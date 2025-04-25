import mailBox from './assets/mail.jpg';

function renderContact () {
  const contactContent = document.createElement('div');
  contactContent.innerHTML = `
    <h1>Contact Us</h1>
    <p>We prefer owls... but you may use one of these terribly mundane methods:</p>
    <ul>
      <li>📧 Email: rustymagic@butterbrew.fake</li>
      <li>📍 Location: Nowhere near you think.</li>
      <li>📞 Phone: No. Just no.</li>
    </ul>
    <img class="image" id="image-contact" src="${mailBox}" alt="mailbox">

  `
  return contactContent;
}

export { renderContact };