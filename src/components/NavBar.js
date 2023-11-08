import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const newElements = links.map((item) => {return <a key={item} href={`#${item}`}>{item}</a>});
  return <nav>{newElements}</nav>;
}

export default NavBar;
