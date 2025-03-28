const Speed = () => {
  return (
    <section id="speed" className="container mx-auto">
      <div className="flex h-screen flex-col items-center justify-start gap-2 pt-[100px] text-white md:w-1/2 md:justify-center md:pt-[60px]">
        <h3 className="text--secundary mb-3 text-center">
          0 à 100Km/h em apenas 5,2 segundos
        </h3>
        <h2 className="text--primary">Sinta a Adrenalina</h2>
        <h3 className="text--secundary flex items-center gap-3">
          R$250.000
          <span className="relative text-xl">
            R$330.000
            <span className="absolute top-1/2 -left-[5px] h-1 w-[calc(100%+10px)] rounded-full bg-blue-600"></span>
          </span>
        </h3>

        <div className="mt-5 flex items-center gap-3">
          <button className="cta">Comprar</button>
          <a href="#driver" className="text-xl text-blue-600">
            Saber mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Speed;
