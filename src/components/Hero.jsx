function Hero() {
  return (
    <section id="inicio" className="bg-[#1C1714] px-6 py-16 font-[poppins] text-white md:px-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
        <div className="flex-1">
          <h1 className="text-4xl font-bold md:text-6xl">
            Pizza quente.
            <br />
            <span className="text-[#C8281E]">Momentos felizes.</span>
          </h1>
          <p className="mt-4 max-w-md text-gray-300">
            Massa artesanal, ingredientes frescos e forno a lenha. Direto na sua mesa.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#cardapio" className="rounded bg-[#C8281E] px-6 py-3 text-sm font-semibold hover:bg-[#a82018]">
              Ver cardápio
            </a>
            <a href="#contato" className="rounded border border-white/40 px-6 py-3 text-sm hover:border-[#E9A23B] hover:text-[#E9A23B]">
              Fazer pedido
            </a>
          </div>
        </div>
        <img src="./Pizza_Saindo_Do_Forno.jpg" alt="Pizza saindo do forno" className="w-full max-w-md flex-1 rounded-3xl object-cover" />
      </div>
    </section>
  );
}

export default Hero;
