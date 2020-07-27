const menu = () => {
  const menu = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "Menu";

  const content = document.createElement("div");
  content.innerHTML = `
  <ul style="list-style-type:none;">
    <li>menu item 1</li>
    <li>menu item 2</li>
  </ul>
  `;

  menu.style.textAlign = "center";

  menu.appendChild(title);
  menu.appendChild(content);

  return menu;
};

export default menu;
