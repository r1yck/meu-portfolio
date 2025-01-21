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
            <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-background max-w-screen-lg mx-auto">
                {/* Foto */}
                <div className="relative flex-shrink-0">
                    <div className="absolute top-4 left-4 w-[300px] h-[300px] rounded-[24px_0px] border-2 border-textWhite"></div>
                    <img
                        src="/assets/minha-foto.png"
                        alt="Minha foto"
                        className="relative w-[300px] h-[300px] object-cover border-2 border-textWhite"
                        style={{ boxSizing: "border-box" }}
                    />
                </div>
                {/* Sobre Mim */}
                <div className="flex flex-col gap-6 text-left max-w-[600px]">
                    <h2 className="text-textBlue font-semibold text-2xl">SOBRE MIM</h2>
                    <h3 className="text-textWhite font-semibold text-2xl">
                        Meu nome é Henrique Fontoura
                    </h3>
                    <p className="text-textGray text-sm leading-6">
                        Podem me chamar apenas de Rick! Tenho 20 anos, sou graduando em
                        Sistemas de Informação em Itapetinga, Bahia. Atuo como desenvolvedor
                        back-end, criando soluções eficientes, e também edito vídeos,
                        transformando ideias em conteúdos criativos. Além de apaixonado por
                        tecnologia, sou fã de animes e adoro andar de skate para relaxar.
                        Busco desafios que me façam evoluir sempre, com disciplina e foco como
                        meus guias.
                    </p>
                </div>
            </section>
            <section className="p-8 bg-background">
                {/* O que eu faço */}
                <div className="text-center mb-8">
                    <h2 className="text-textBlue font-semibold text-2xl">O QUE EU FAÇO</h2>
                    <h3 className="text-textWhite font-semibold text-2xl">ESPECIALIZADO EM</h3>
                </div>
                {/* Cards de especialização */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
                    <div className="bg-backgroundFooter p-6 rounded-lg w-full md:w-[400px] flex gap-4 items-start">
                        <img
                            src="/assets/dev-logo.png"
                            alt="Logo Desenvolvimento"
                            className="w-16 h-16"
                        />
                        <div className="flex flex-col">
                            <h4 className="text-textWhite font-semibold text-lg mb-2">
                                Desenvolvimento Back-End
                            </h4>
                            <p className="text-textGray text-sm leading-6">
                                Desenvolvo soluções eficientes, criando a infraestrutura
                                necessária para suportar aplicativos e sistemas robustos.
                            </p>
                        </div>
                    </div>
                    <div className="bg-backgroundFooter p-6 rounded-lg w-full md:w-[400px] flex gap-4 items-start">
                        <img
                            src="/assets/vid-logo.png"
                            alt="Logo Edição"
                            className="w-16 h-16"
                        />
                        <div className="flex flex-col">
                            <h4 className="text-textWhite font-semibold text-lg mb-2">
                                Edição de Vídeos
                            </h4>
                            <p className="text-textGray text-sm leading-6">
                                Transformo ideias em vídeos impactantes, unindo criatividade e técnica
                                para criar conteúdos envolventes.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Botão */}
                <div className="mt-8 text-center">
                    <Button text="Trabalhos" link="/work" />
                </div>
            </section>
            <Footer />
        </>
    );
}
