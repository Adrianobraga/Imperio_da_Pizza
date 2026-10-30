function Contato() {
  return (
    <section id="contato" className="bg-[#C8281E] px-6 py-16 font-[poppins] text-white md:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Faça seu pedido</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Endereço</h3>
            <p className="text-sm">Rua das Pizzas, 123 - Fortaleza, CE</p>
          </div>
          <div>
            <h3 className="font-semibold">Horário</h3>
            <p className="text-sm">Todos os dias, das 18h às 23h</p>
          </div>
          <div>
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-sm">(85) 99999-9999</p>
          </div>
        </div>
        <a
          href="https://wa.me/5585999999999"
          className="mt-8 inline-block rounded bg-[#1C1714] px-6 py-3 text-sm font-semibold hover:bg-black"
        >
          Pedir pelo WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contato;
