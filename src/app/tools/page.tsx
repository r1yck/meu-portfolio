import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function ToolsPage() {
    const tools = [
        { name: "Java", image: "/assets/java.png" },
        { name: "HTML5", image: "/assets/html5.png" },
        { name: "CSS", image: "/assets/css.png" },
        { name: "JavaScript", image: "/assets/js.png" },
        { name: "TypeScript", image: "/assets/ts.png" },
        { name: "React", image: "/assets/react.png" },
        { name: "VSCode", image: "/assets/vscode.png" },
        { name: "Node.js", image: "/assets/nodejs.webp" },
        { name: "MySQL", image: "/assets/mysql.png" },
        { name: "GitHub", image: "/assets/github.png" },
        { name: "Git", image: "/assets/git.png" },
        { name: "Vegas", image: "/assets/vegas.png" },
        { name: "Alight Motion", image: "/assets/alightmotion.png" },
    ];

    return (
        <>
            <Header
                title="Ferramentas"
                subtitle="Ferramentas que utilizo no meu trabalho"
            />
            <section className="p-8">
                {/* Box de ferramentas */}
                <div className="bg-backgroundFooter p-8 rounded-[12px] max-w-[1100px] w-full mx-auto">
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        {tools.map((tool, index: number) => (
                            <div
                                key={index}
                                className="relative group flex flex-col items-center justify-center"
                            >
                                <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden">
                                    <img
                                        src={tool.image}
                                        alt={tool.name}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <span className="mt-2 text-white text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {tool.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Texto "Entre Outras..." */}
                    <h2
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "22px",
                            lineHeight: "60px",
                            color: "#ffffff",
                        }}
                        className="text-center"
                    >
                        Explore meu Github na próxima página para ver essas ferramentas na prática!
                    </h2>
                </div>

                {/* Card de contato */}
                <div
                    className="bg-backgroundFooter mt-12 p-8 rounded-xl flex flex-col items-center gap-4 max-w-[700px] w-full mx-auto"
                >
                    <h3 className="text-textWhite text-2xl font-regular text-center">
                        Tem algum projeto em mente?
                    </h3>
                    <Button text="Entre em contato comigo" link="/contact" />
                </div>
            </section>
            <Footer />
        </>
    );
}
