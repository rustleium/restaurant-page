import mug from './assets/mugs.jpg';

function renderMenu () {
  const menuContent = document.createElement('div');
  menuContent.innerHTML = `
    <h1>Menu</h1>
    <p>Here's our meticulously crafted selection of...Butterbeer.</p>
    <h3>For All Occasions</h3>
    <ul>
      <li>🧈 Classic Butterbeer – served cold and judgy</li>
      <li>🔥 Warm Butterbeer – for when it’s chilly</li>
      <li>❄️ Frozen Butterbeer – quite popular</li>
      <li>🧙 Spiked Butterbeer – for adults who’ve seen things</li>
      <li>🌱 Vegan Butterbeer – just kidding. Try water.</li>
    </ul>
    <img class="image" id="image-menu" src="${mug}" alt="mailbox">
  `
  return menuContent;
}

export { renderMenu };