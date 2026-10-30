const itens = [
  { titulo: "Forno a lenha", texto: "Borda crocante e sabor defumado." },
  { titulo: "Ingredientes frescos", texto: "Selecionados todos os dias." },
  { titulo: "Feita com carinho", texto: "Cada pizza é montada na hora." },
  { titulo: "Entrega rápida", texto: "Quentinha até a sua porta." },
];

function Destaques() {
  return (
    <section className="bg-[#2a221d] px-6 py-10 font-[poppins] text-white md:px-16">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-4">
        {itens.map((item) => (
          <div key={item.titulo}>
            <h3 className="font-semibold text-[#E9A23B]">{item.titulo}</h3>
            <p className="mt-1 text-sm text-gray-300">{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destaques;
