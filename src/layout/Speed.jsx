const Speed = () => {
  return (
    <section id="hero" className="container mx-auto pt-[60px]">
      <div className="flex min-h-svh flex-col items-center justify-center gap-2 text-white md:w-1/2">
        <h3 className="mb-3 text-center text-3xl font-semibold text-balance">
          0 à 100Km/h em apenas 5,2 segundos
        </h3>
        <h2 className="primary-text">Sinta a Adrenalina</h2>
        <h3 className="flex items-center gap-3 text-3xl font-semibold">
          R$250.000
          <span className="relative text-xl">
            R$330.000
            <span className="absolute top-1/2 -left-[5px] h-1 w-[calc(100%+10px)] rounded-full bg-blue-600"></span>
          </span>
        </h3>

        <div className="mt-5 flex items-center gap-3">
          <button className="cursor-pointer rounded-lg bg-blue-600 px-3 py-1 text-xl font-bold">
            Comprar
          </button>
          <a href="#driver" className="text-xl text-blue-600">
            Saber mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Speed;
