import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";
import Button from "@/components/Button";

export default function WorkPage() {
    return (
        <>
            <Header
                title="Meu Trabalho"
                subtitle="Portfolio com alguns projetos que já fiz"
            />
            <section className="p-8">
                {/* Título */}
                <h2 className="text-textBlue text-xl mb-4 text-center">PORTFOLIO</h2>
                <h3 className="text-textWhite text-2xl font-bold mb-8 text-center">
                    ÚLTIMOS PROJETOS
                </h3>
                {/* Cards de projetos */}
                <div className="flex flex-wrap gap-8 justify-center">
                    <Cards title="Em Construção" buttonText="Ver Projeto" />
                    <Cards title="Em Construção" buttonText="Ver Projeto" />
                    <Cards title="Em Construção" buttonText="Ver Projeto" />
                </div>
                {/* Card ferramentas */}
                <div
                    className="bg-backgroundFooter mt-12 p-8 rounded-xl flex flex-col items-center gap-4 max-w-[700px] w-full mx-auto"
                >
                    <div className="flex flex-row items-center justify-center gap-20">
                        <img
                            src="/assets/ferramentas.png"
                            alt="Ferramentas"
                            className="w-16 h-16"
                        />
                        {/* Botão */}
                        <Button text="Ferramentas" link="/tools" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
