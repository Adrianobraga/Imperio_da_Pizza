function Sobre() {
  return (
    <section id="sobre" className="bg-[#1C1714] px-6 py-16 font-[poppins] text-white md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row">
        <img src="Pizzaiolo.jpg" alt="Pizzaiolo preparando a massa" className="w-full max-w-md rounded-3xl object-cover" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Sobre nós</h2>
          <p className="mt-4 text-gray-300">
            A Império da Pizza nasceu da paixão por pizza de verdade: massa de fermentação lenta,
            molho caseiro e queijo de qualidade.
          </p>
          <p className="mt-3 text-gray-300">
            Aqui você encontra só pizza, feita com todo o cuidado para juntar a família e os amigos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
