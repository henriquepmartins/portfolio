import {
    HiCommandLine,
    HiComputerDesktop,
    HiDevicePhoneMobile,
} from "react-icons/hi2"


export function Services() {

    const services = [
        {
            title: "Web",
            description: "Desenvolvimento de sites e sistemas com React.js, HTML5 e CSS3.",
            icon: <HiComputerDesktop className="h-12 w-12" />
        },
        {
            title: "Sistemas",
            description: "Desenvolvimento de sistemas e APIs REST com Node.js e Java Spring.",
            icon: <HiCommandLine className="h-12 w-12" />
        },
        {
            title: "Mobile",
            description: "Desenvolvimento de aplicativos Android e iOS com React native e Expo.",
            icon: <HiDevicePhoneMobile className="h-12 w-12" />,
        },
    ]

    return (
        <section className="container mx-auto my-12 max-w-4xl p-4">
            <div className="p-4 text-center">
                <p className="text-sm-font-semibold uppercase text-blue-600">
                    principais qualidades
                </p>
                <h2 className="mb-2 font-bold text-blue-900">
                    <span className="mr-2 font-headline font-bold text-3xl">Meus</span>
                    <span className="font-handwriting font-bold text-4xl">Serviços</span>
                </h2>
                <p className="relative text-sm text-gray-600">
                    Serviços completos feitos com qualidade, desde o back-end ao front-end, além de integração com API's, frameworks e banco de dados.
                </p>
            </div>
            <div className="mt-6 flex flex-col gap-2 md:flex-row">
                {services.map((service, index) => (
                    <div className="basis-1/3 rounded-lg bg-blue-700 p-4 text-white"
                    key={`service-${index}`}
                    >
                        <div className="mb-2">{service.icon}</div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-sm">{service.description}</p>
                        
                    </div>
                ))}
            </div>
        </section>
    )
}