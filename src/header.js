const header = (() => {
  const header = document.createElement("h1");
  header.textContent = "My Restaurant";

  header.style.textAlign = "center";

  return header;
})();

export default header;
