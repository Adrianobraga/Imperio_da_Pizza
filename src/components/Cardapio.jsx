import { useState } from "react";
import { pizzas } from "../dados/pizzas";
import CardPizza from "./CardPizza";

function Cardapio() {
  const [soDestaques, setSoDestaques] = useState(false);
  const lista = soDestaques ? pizzas.filter((p) => p.destaque) : pizzas;

  const botao = (ativo) =>
    `rounded-full px-5 py-2 text-sm font-semibold ${ativo ? "bg-[#C8281E] text-white" : "bg-white text-[#1C1714]"}`;

  return (
    <section id="cardapio" className="bg-[#F5EFE6] px-6 py-16 font-[poppins] md:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-[#1C1714]">Nosso cardápio</h2>
        <div className="mt-6 flex gap-3">
          <button onClick={() => setSoDestaques(false)} className={botao(!soDestaques)}>Todas</button>
          <button onClick={() => setSoDestaques(true)} className={botao(soDestaques)}>Mais pedidas</button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cardapio;
