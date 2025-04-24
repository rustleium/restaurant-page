function renderHome () {
  const homeContent = document.createElement("div");
  homeContent.innerHTML = `
    <h1 id="headline">Welcome to Rusty Corner</h1>
    <h3>Contrary to popular belief... we don't serve food.</h3>
    <h3>Only Butterbeer.</h3>
    <img id="image-home" src="/assets/butter-beer.jpg" alt="">
  `
  return homeContent;
}

export {renderHome};