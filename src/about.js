// Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.

const about = (() => {
  const about = document.createElement("div");
  about.className = "about";
  const title = document.createElement("h1");
  title.textContent = "About Us";
  const content = document.createElement("p");
  content.textContent = "Welcome to the best restaurant in town!";

  about.style.textAlign = "center";

  about.appendChild(title);
  about.appendChild(content);

  return about;
})();

export default about;
