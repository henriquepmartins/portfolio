import { HiDownload } from "react-icons/hi"

export function Hero() {
  return (
    <>
      <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-12 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="font-handwriting block text-3xl text-center md:text-left">Olá, me chamo</span>
              <span className="font-headline text-5xl font-semibold">Henrique</span>
              <span className="font-headline text-5xl font-light text-blue-400"> Martins</span>
            </h1>
            <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
              <div className="h-1 w-12 rounded-full bg-blue-800"></div>
              Desenvolvedor FullStack Java | JavaScript | React.js
            </h2>

            <p className="text-gray-400 my-7 text-center md:text-left">
              Desenvolvedor FullStack com uma grande paixão pela aprendizagem,
              sou capaz de aprender rapidamente e me adaptar às novas tecnologias.
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <a href="#contact" className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700">
                Fale comigo
              </a>
              <span className="italic text-gray-500">ou</span>
              <a href="https://docs.google.com/document/d/172VwEM4EZ3V9FLHDzSOHSJTml5bbUl8__4c6maontX4/edit?usp=sharing" className="button text-gray-600 hover:text-blue-700 flex items-center gap-2 ">
              <HiDownload />
                Baixe meu CV
              </a>
            </div>
          </div>
          <div className="basis-1/2"></div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-1/3"></div>
    </>
  );
}

