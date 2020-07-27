import pageLoad from "./pageLoad";
import tabs from "./tabs";
import about from "./about";
import menu from "./menu";
import contact from "./contact";

pageLoad();

const tabSwitch = () => {
  const siteContents = document.querySelector(".site-contents");
  const tabs = document.querySelector(".tabs");

  tabs.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-0")) {
      siteContents.innerHTML = "";
      siteContents.appendChild(about);
    }
    if (e.target.classList.contains("tab-1")) {
      siteContents.innerHTML = "";
      siteContents.appendChild(menu());
    }
    if (e.target.classList.contains("tab-2")) {
      siteContents.innerHTML = "";
      siteContents.appendChild(contact());
    }
  });
};
tabSwitch();
