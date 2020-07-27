import header from "./header";
import about from "./about";
import menu from "./menu";
import contact from "./contact";
import tabs from "./tabs";

const pageLoad = () => {
  const content_div = document.querySelector("#content");

  const siteContents = document.createElement("div");
  siteContents.className = "site-contents";

  content_div.appendChild(header);

  content_div.appendChild(tabs());

  siteContents.appendChild(about);
  // siteContents.appendChild(menu());
  // siteContents.appendChild(contact());

  content_div.appendChild(siteContents);

  // return content_div;
};

export default pageLoad;
