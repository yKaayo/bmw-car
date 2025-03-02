const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-[1] flex min-h-svh flex-col items-center gap-2 content--center text-white"
    >
      <p className="paragraph">Novo</p>
      <h2 className="mb-3 text--secundary">BMW G20 330i</h2>
      <h1 className="text--primary">Rápido e Melhor</h1>
      <h2 className="flex items-center gap-3 text--secundary">
        R$250.000
        <span className="relative text-xl">
          R$330.000
          <span className="absolute top-1/2 -left-[5px] h-1 w-[calc(100%+10px)] rounded-full bg-blue-600"></span>
        </span>
      </h2>

      <div className="mt-5 flex items-center gap-3">
        <button className="cta">
          Comprar
        </button>
        <a href="#speed" className="text-xl text-blue-600">
          Saber mais
        </a>
      </div>
    </section>
  );
};

export default Hero;
