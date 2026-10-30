import { useState } from "react";

function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="relative flex justify-between bg-[#1C1714] p-6 items-center">
      <a href="#inicio" className="text-[1rem] text-white font-[poppins]">Império da <span className="text-[#E9A23B] font-bold">Pizza</span></a>

      
      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="flex flex-col gap-1.5 md:hidden"
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuAberto}
      >
        <span className="h-0.5 w-7 rounded bg-white" />
        <span className="h-0.5 w-7 rounded bg-white" />
        <span className="h-0.5 w-7 rounded bg-white" />
      </button>

      
      <nav
        className={`${
          menuAberto ? "flex" : "hidden"
        } absolute left-0 top-full z-50 w-full flex-col bg-[#1C1714] md:static md:flex md:w-auto md:flex-row`}
      >
        <ul className="flex flex-col items-center md:flex-row md:gap-8 font-[poppins] text-[14px]">
          <li>
            <a
              href="#inicio"
              onClick={() => setMenuAberto(false)}
              className="block px-5 py-4 text-white transition hover:text-[#e9a23b] md:px-0"
            >
              Início
            </a>
          </li>

          <li>
            <a
              href="#cardapio"
              onClick={() => setMenuAberto(false)}
              className="block px-5 py-4 text-white transition hover:text-[#e9a23b] md:px-0"
            >
              Cardápio
            </a>
          </li>

          <li>
            <a
              href="#sobre"
              onClick={() => setMenuAberto(false)}
              className="block px-5 py-4 text-white transition hover:text-[#e9a23b] md:px-0"
            >
              Sobre nós
            </a>
          </li>

          <li>
            <a
              href="#contato"
              onClick={() => setMenuAberto(false)}
              className="block px-5 py-4 text-white transition hover:text-[#e9a23b] md:px-0"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>

      
    </header>
  );
}

export default Menu;