import Image from "next/image";

export function Hero() {
  return (
    <section className="grid gap-y-6 place-items-center place-content-center max-w-2xl mx-auto pt-12 md:pt-[4.5rem] pb-14 md:pb-20 col-start-1 col-end-2 row-start-1 row-end-2">
      <div className="rounded-full size-32 md:size-40 xl:size-56 flex items-center justify-center overflow-hidden border-2 border-primary">
        <Image
          src="/mock/hero.jpg"
          fetchPriority="high"
          priority
          width={320}
          height={480}
          alt="Foto de perfil da Fernanda Mascheti"
          className="grayscale object-center object-cover"
        />
      </div>
      <h4 className="text-primary text-center text-base font-bold font-chakra-petch">
        Olá, meu nome é Fernanda_
      </h4>
      <p></p>
      <div className="w-fit text-2xl md:text-4xl xl:text-6xl font-bold whitespace-nowrap">
        <p className="font-chakra-petch inline">Eu ensino</p>{" "}
        <p className="font-chakra-petch bg-gradient-to-r from-[#8C61D5] to-primary bg-clip-text text-transparent inline">
          Programação
        </p>
      </div>
      <div className="text-balance text-center text-foreground text-sm lg:text-base mx-6">
        Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional
        para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento
        computacional usando HTML, CSS e JavaScript. Veja os projetos que já
        desenvolvi!
      </div>
      <div className="mt-12 md:mt-28 w-full h-7 grid grid-cols-2">
        <div className="w-full relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-6 before:h-7 before:border-l before:border-t before:border-primary after:content-[''] after:absolute after:top-0 after:right-0 after:w-3.5 after:h-7 after:border-r after:border-t after:border-primary"></div>
        <div className="w-full relative after:content-[''] after:absolute after:top-0 after:right-0 after:w-6 after:h-7 after:border-r after:border-t after:border-primary before:content-[''] before:absolute before:top-0 before:left-0 before:w-3.5 before:h-7 before:border-t before:border-primary"></div>
      </div>
    </section>
  );
}
