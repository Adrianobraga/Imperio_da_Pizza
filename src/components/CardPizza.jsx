function CardPizza({ pizza }) {
  const preco = pizza.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const mensagem = encodeURIComponent(`Olá! Quero pedir a pizza ${pizza.nome}.`);

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <img src={pizza.imagem} alt={pizza.nome} className="h-70 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-bold text-[#1C1714]">{pizza.nome}</h3>
        <p className="mt-1 text-sm text-gray-600">{pizza.ingredientes}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-[#C8281E]">{preco}</span>
          <a
            href={`https://wa.me/5585999999999?text=${mensagem}`}
            className="rounded bg-[#E9A23B] px-4 py-2 text-sm font-semibold text-[#1C1714] hover:bg-[#d18f2e]"
          >
            Pedir
          </a>
        </div>
      </div>
    </article>
  );
}

export default CardPizza;
