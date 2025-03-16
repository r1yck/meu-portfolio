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
                <h2 className="text-textBlue text-xl mb-4 text-center">PORTFOLIO</h2>
                <h3 className="text-textWhite text-2xl font-bold mb-8 text-center">
                    ÚLTIMOS PROJETOS
                </h3>
                <div className="flex flex-wrap gap-8 justify-center">
                    <Cards 
                        title="Doe Mais - Plataforma de Doações" 
                        buttonText="Ver Projeto" 
                        link="https://github.com/doemais-ifbaiano" 
                        image="/assets/projeto1.png"
                    />
                    <Cards 
                        title="SafeK8s - Segurança em Kubernetes" 
                        buttonText="Ver Projeto" 
                        link="https://github.com/r1yck/SafeK8s" 
                        image="/assets/projeto2.png"
                    />
                    <Cards 
                        title="App de Vendas" 
                        buttonText="Ver Projeto" 
                        link="https://github.com/r1yck/App-Vendas" 
                        image="/assets/projeto3.png"
                    />
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
                        {/* Botão para página Tools */}
                        <Button text="Ferramentas" link="/tools" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
