import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function AboutPage() {
    return (
        <>
            <Header
                title="Olá, sou o r1yck!"
                subtitle="Desenvolvedor Back-End e Editor de Vídeos"
            />
            <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-[#212121] max-w-screen-lg mx-auto">
                <div className="relative flex-shrink-0">
                    <div
                        className="absolute top-4 left-4 w-[300px] h-[300px] rounded-[24px_0px] border-2 border-white"
                    ></div>
                    <img
                        src="/assets/minha-foto.png"
                        alt="Minha foto"
                        className="relative w-[300px] h-[300px] object-cover border-2 border-white"
                        style={{ boxSizing: "border-box" }}
                    />
                </div>
                <div className="flex flex-col gap-6 text-left max-w-[600px]">
                    <h2
                        className="text-textBlue"
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "30px",
                            lineHeight: "50px",
                            letterSpacing: "0.1em",
                        }}
                    >
                        SOBRE MIM
                    </h2>
                    <h3
                        className="text-textWhite"
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "30px",
                            lineHeight: "30px",
                        }}
                    >
                        Meu nome é Henrique Fontoura
                    </h3>
                    <p
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "26px",
                            color: "#B0ADAD",
                            textAlign: "justify",
                        }}
                    >
                        Podem me chamar apenas de Rick! Tenho 20 anos, sou graduando em
                        Sistemas de Informação em Itapetinga, Bahia. Atuo como desenvolvedor
                        back-end, criando soluções eficientes, e também edito vídeos,
                        transformando ideias em conteúdos criativos. Além de apaixonado por
                        tecnologia, sou fã de animes e adoro andar de skate para relaxar.,
                        busco desafios que me façam evoluir sempre, com disciplina e foco como
                        meus guias.
                    </p>
                </div>
            </section>
            <section className="p-8 bg-[#212121]">
                <div className="text-center mb-8">
                    <h2
                        className="text-textBlue"
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "30px",
                            lineHeight: "50px",
                            letterSpacing: "0.1em",
                        }}
                    >
                        O QUE EU FAÇO
                    </h2>
                    <h3
                        className="text-textWhite"
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "30px",
                            lineHeight: "30px",
                        }}
                    >
                        ESPECIALIZADO EM
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
                    <div className="bg-backgroundFooter p-6 rounded-[12px] w-full md:w-[400px] flex gap-4 items-start">
                        <img
                            src="/assets/dev-logo.png"
                            alt="Logo Desenvolvimento"
                            className="w-16 h-16"
                        />
                        <div className="flex flex-col">
                            <h4 className="text-textWhite font-semibold text-lg mb-2">
                                Desenvolvimento Back-End
                            </h4>
                            <p
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "26px",
                                    color: "#B0ADAD",
                                    textAlign: "justify",
                                }}
                            >
                                Desenvolvo soluções eficientes, criando a infraestrutura
                                necessária para suportar aplicativos e sistemas robustos.
                            </p>
                        </div>
                    </div>
                    <div className="bg-backgroundFooter p-6 rounded-[12px] w-full md:w-[400px] flex gap-4 items-start">
                        <img
                            src="/assets/vid-logo.png"
                            alt="Logo Edição"
                            className="w-16 h-16"
                        />
                        <div className="flex flex-col">
                            <h4 className="text-textWhite font-semibold text-lg mb-2">
                                Edição de Vídeos
                            </h4>
                            <p
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "16px",
                                    lineHeight: "26px",
                                    color: "#B0ADAD",
                                    textAlign: "justify",
                                }}
                            >
                                Transformo ideias em vídeos impactantes, unindo criatividade e técnica
                                para criar conteúdos envolventes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <Button text="Trabalhos" link="/work" />
                </div>
            </section>
            <Footer />
        </>
    );
}