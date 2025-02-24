const Hero = () => {
  return (
    <section className="flex min-h-[calc(100svh-60px)] flex-col items-center justify-center gap-2 text-white">
      <p className="text-gray-300 text-xl">Novo</p>
      <h2 className="text-3xl font-semibold mb-3">BMW G20 330i</h2>
      <h1 className="primary-text">
        Rápido e Melhor
      </h1>
      <h2 className="flex items-center gap-3 text-3xl font-semibold">
        R$250.000
        <span className="relative text-xl">
          R$330.000
          <span className="absolute top-1/2 -left-[5px] h-1 w-[calc(100%+10px)] rounded-full bg-blue-600"></span>
        </span>
      </h2>

      <div className="flex items-center gap-3 mt-5">
        <button className="cursor-pointer bg-blue-600 font-bold px-3 py-1 text-xl rounded-lg">Comprar</button>
        <a href="#hero" className="text-xl text-blue-600">Saber mais</a>
      </div>
    </section>
  );
};

export default Hero;
