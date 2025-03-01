const Hero = () => {
  return (
    <section
      id="hero"
      className="relative z-[1] flex min-h-svh flex-col items-center justify-center gap-2 pt-[60px] text-white"
    >
      <p className="text-xl text-gray-300">Novo</p>
      <h2 className="mb-3 text-3xl font-semibold">BMW G20 330i</h2>
      <h1 className="primary-text">Rápido e Melhor</h1>
      <h2 className="flex items-center gap-3 text-3xl font-semibold">
        R$250.000
        <span className="relative text-xl">
          R$330.000
          <span className="absolute top-1/2 -left-[5px] h-1 w-[calc(100%+10px)] rounded-full bg-blue-600"></span>
        </span>
      </h2>

      <div className="mt-5 flex items-center gap-3">
        <button className="cursor-pointer rounded-lg bg-blue-600 px-3 py-1 text-xl font-bold">
          Comprar
        </button>
        <a href="#hero" className="text-xl text-blue-600">
          Saber mais
        </a>
      </div>
    </section>
  );
};

export default Hero;
