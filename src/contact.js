const contact = () => {
  const contact = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  const content = document.createElement("div");
  content.innerHTML = `
    Call us @ 916 243 0474
  `;

  contact.style.textAlign = "center";

  contact.appendChild(title);
  contact.appendChild(content);

  return contact;
};

export default contact;
