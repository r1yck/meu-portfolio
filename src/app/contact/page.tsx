import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Input from "@/components/Inputs"; 

export default function ContactPage() {
    return (
        <>
            <Header
                title="Contato"
                subtitle="Saiba como entrar em contato comigo"
            />
            <section className="p-8 flex flex-wrap justify-between items-start gap-8 max-w-[1200px] mx-auto">
                {/* Redes Sociais */}
                <div className="text-[#4C70EF] w-full md:w-[45%] lg:w-[40%]">
                    <h2 className="text-2xl font-bold mb-4">Redes Sociais:</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <img src="/assets/ig.png" alt="Instagram" className="w-8 h-8 mr-4" />
                            <a
                                href="https://www.instagram.com/r1yck/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-[#4C70EF]"
                            >
                                Instagram
                            </a>
                        </li>
                        <li className="flex items-center">
                            <img src="/assets/wpp.png" alt="Whatsapp" className="w-8 h-8 mr-4" />
                            <a
                                href="https://wa.me/5573998336602"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-[#4C70EF]"
                            >
                                Whatsapp
                            </a>
                        </li>
                        <li className="flex items-center">
                            <img src="/assets/github.png" alt="Github" className="w-8 h-8 mr-4" />
                            <a
                                href="https://github.com/r1yck"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline hover:text-[#4C70EF]"
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Formulário de Contato */}
                <div className="w-full md:w-[45%] lg:w-[40%]">
                    <h2 className="text-2xl font-bold text-[#4C70EF] mb-4 text-center md:text-left">
                        Envie uma mensagem:
                    </h2>
                    <form
                        action="https://formsubmit.co/henriquefontoura.exe@gmail.com"
                        method="POST"
                        className="flex flex-col gap-4"
                    >
                        <Input placeholder="Digite seu nome e sobrenome" />
                        <Input placeholder="Digite seu e-mail" />
                        <Input placeholder="Digite o assunto" />
                        <Input placeholder="Sua mensagem..." isLarge />
                        <button
                            type="submit"
                            className="w-full bg-[#4C70EF] text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}
