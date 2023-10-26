export function About() {
    return (
        <section className="container mx-auto my-4 max-w-5xl p-4">
           <div className=" relative p-4 text-center">
            <h2 className=" relative text-blue-900 font-bold z-10">
                <span className="mr-2 font-headline text-3xl font-bold">Sobre</span>
                <span className="font-handwriting text-4xl">Mim</span>
            </h2>
            <p className="relative text-sm text-gray-600">
            Estou sempre procurando novos desafios e espero poder contribuir para projetos inovadores.
            </p>

            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40">
            </div>
           </div>

           <div className="relative mx-auto mt-20 max-w-2xl">
            <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-50 md:h-64 md:ps-48">
                <div className="relative h-full w-full rounded-lg bg-gray-50 p-3">
                    <p className="font-handwriting text-lg font-bold"> Olá,</p>
                    <span className="mr-1"> Meu nome é,</span>
                    <span className="font-headline font-bold uppercase text-blue-900"> Henrique Pereira Martins</span>
                    <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Idade:
                  </td>
                  <td>18</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Celular:
                  </td>
                  <td>
                    <a
                      href="tel:+551299999999"
                      className="underline hover:text-blue-800"
                    >
                      +55 (91) 99210-6811
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a
                      href="henriquepermartins@gmail.com"
                      className="underline hover:text-blue-800"
                    >
                      henriquepermartins@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Endereço:
                  </td>
                  <td>
                    <a
                      href="https://www.google.com/maps/place/Bel%C3%A9m,+PA/@-1.3411789,-48.5292649,12z/data=!3m1!4b1!4m6!3m5!1s0x92a461af84756ce1:0x570d540215864c35!8m2!3d-1.4563432!4d-48.501299!16s%2Fg%2F1pxyyzx3r?entry=ttu"
                      target="_blank"
                      className="underline hover:text-blue-800"
                    >
                      Belém - PA
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Disponível:
                  </td>
                  <td>
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
                </div>
                <div className="absolute -left-2 -top-16 h-24 w-20 rounded-lg bg-gray-600
                 bg-[url(https://avatars.githubusercontent.com/u/125284120?v=4)] bg-cover bg-center md:-left-12 md:-top-20 md:h-72 md:w-56">
                </div>
            </div>

           </div>
        </section>
    )
}