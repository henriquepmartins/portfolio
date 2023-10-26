import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import projectImage1 from "../assets/siteSalvus.png";
import projectImage2 from "../assets/ProjetoJogo.png";
import projectImage3 from "../assets/todoList.png";
import projectImage5 from "../assets/dividirConta.png";

export function Projects() {
  const projects = [
    {
      title: "Site Salvus",
      description: "Site desenvolvido para um começo de startup, feito com HTML,CSS e JavaScript",
      image: projectImage1,
      link: "https://github.com/henriquepmartins/Salvus360",
      colSpan: "col-span-1",
    },
    {
      title: "Dungirotto - jogo",
      description: "Jogo desenvolvido com HTML, CSS e JavaScript, onde um personagem 2D precisa resolver puzzles para passsar de fase.",
      image: projectImage2,
      link: "https://github.com/henriquepmartins/Dungirotto",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "To Do List",
      description: "Lista de tarefas diárias feitas em React & TypeScript",
      image: projectImage3,
      link: "#",
      colSpan: "col-span-1",
    },
    {
      title: "Ecommerce em Java",
      description: "Foi feito em Java um projeto de ecommerce, que envolve API's, CRUD & interface gráfica.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "https://github.com/henriquepmartins/projeto-ecommerce",
      colSpan: "col-span-1",
    },
    {
      title: "Dividir a conta",
      description: "Aplicativo mobile com o objetivo de calcular um valor da conta de X pessoas (feito em React & Expo).",
      image: projectImage5,
      link: "#",
      colSpan: "col-span-1",
    },
  ]

    return (
        <>
        <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
                <div className="container mx-auto max-w-4xl p-4 py-12">
                    <div className="relative p-4 text-center">
                        <h2 className="relative z-50 mb-2 text-white">
                            <span className="mr-2 font-headline text-3xl font-semibold">Projetos &</span>
                            <span className="mr-2 font-handwriting text-4xl">Portifólio</span>
                        </h2>
                        <p className="relative text-sm text-gray-400">
                            Alguns projetos pessoais que venho realizando ao longo da minha jornada!</p>
                            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {
                        projects.map((project, index) => (
                            <div className={`group relative h-52 cursor-default
                             rounded-lg ${project.colSpan} bg-cover bg-center`}
                             key={`project-${index}`}
                             style={{ backgroundImage: `url('${project.image}')`}}
                             >
                                <div className="absolute inset-0 flex h-full w-full flex-col
                                 items-center justify-center rounded-lg bg-blue-600 text-white 
                                 opacity-0 transition-opacity group-hover:opacity-100">
                                    <h4 className="font font-headline text-lg font-semibold">
                                        {project.title}
                                    </h4>
                                    <p className="mb-4 text-sm text-center">{project.description}</p>
                                    <a href={project.link} target="blank">
                                        <HiArrowTopRightOnSquare classname="h-6 w-6" />
                                    </a>
                                 </div>
                            </div>
                        ))}
                    </div>

                </div>
        </section>
        </>
    )
}