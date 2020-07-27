const tabs = () => {
  const tabs = document.createElement("div");
  tabs.className = "tabs";

  for (let i = 0; i < 3; i++) {
    let tabBtn = document.createElement("button");
    tabBtn.textContent = `tab-${i}`;
    tabBtn.className = `tab-${i}`;
    tabs.appendChild(tabBtn);
  }

  tabs.style.textAlign = "center";

  return tabs;
};

export default tabs;
