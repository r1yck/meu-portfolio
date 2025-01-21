import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cards from "@/components/Cards";

export default function WorkPage() {
    return (
        <>
            <Header
                title="Meu Trabalho"
                subtitle="Portfolio com alguns projetos que já fiz"
            />
            <section className="p-8">
                {/* Título da seção */}
                <h2 className="text-blue-500 text-xl mb-4">PORTFOLIO</h2>
                <h3 className="text-white text-2xl font-bold mb-8">ÚLTIMOS PROJETOS</h3>
                
                {/* Cards de projetos */}
                <div className="flex flex-wrap gap-8 justify-center">
                    <Cards title="Em Construção" buttonText="Ver Projeto" />
                    <Cards title="Em Construção" buttonText="Ver Projeto" />
                    <Cards title="Em Construção" buttonText="Ver Projeto" />
                </div>

                {/* Card com ferramentas */}
                <div
                    className="bg-gray-900 mt-12 p-8 rounded-xl flex items-center justify-between"
                    style={{ backgroundColor: "#292C36" }}
                >
                    <img
                        src="/assets/ferramentas.png"
                        alt="Ferramentas"
                        className="w-16 h-16"
                    />
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
                        Ferramentas
                    </button>
                </div>
            </section>
            <Footer />
        </>
    );
}
