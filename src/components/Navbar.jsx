import { useState } from "react";
import bmwLogo from "../assets/bmw_logo_icon.svg";
import menuIcon from "../assets/menu_fill_icon.svg";
import closeMenuIcon from "../assets/x_lg_icon.svg";
import searchIcon from "../assets/search_strong_icon.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "home" },
    { name: "Velocidade", link: "speed" },
    { name: "Detalhes", link: "driver" },
    { name: "Experimente", link: "end" },
  ];

  return (
    <div className="container mx-auto flex items-center justify-between px-10 py-[10px] sm:px-0">
      <a href="#">
        <img className="size-10" src={bmwLogo} alt="Logo da BMW" />
      </a>

      {window.innerWidth <= 768 && (
        <button
          className="h-full cursor-pointer"
          onClick={() => setMenuOpen((prevMenu) => !prevMenu)}
        >
          <img
            className="size-8 cursor-pointer"
            src={!menuOpen ? menuIcon : closeMenuIcon}
            alt={!menuOpen ? "Abrir o menu" : "Fechar o menu"}
          />
        </button>
      )}

      {menuOpen && (
        <div className="absolute top-[60px] left-0 w-full px-10">
          <div className="rounded-lg bg-blue-600 px-5 py-2">
            <nav>
              <ul className="mb-5 flex flex-col gap-1 font-semibold text-white">
                {navLinks.map((item, i) => (
                  <a key={i} href={`#${item.link}`}>
                    <li>{item.name}</li>
                  </a>
                ))}
              </ul>
            </nav>

            <ul>
              <li>
                <button className="cursor-pointer">
                  <img className="h-5" src={searchIcon} alt="Buscar" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}

      {window.innerWidth > 768 && (
        <>
          <nav>
            <ul className="flex items-center gap-8 font-semibold text-black">
              {navLinks.map((item, i) => (
                <a key={i} href={`#${item.link}`}>
                  <li className="text-lg font-semibold text-black duration-300 hover:text-blue-600">
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
          </nav>

          <ul>
            <li>
              <button className="cursor-pointer">
                <img className="h-5" src={searchIcon} alt="Buscar" />
              </button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
