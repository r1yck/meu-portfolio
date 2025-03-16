interface CardProps {
    title: string;
    buttonText: string;
    link: string; // Adiciona o link do projeto
    image?: string; // Torna a imagem opcional
}

export default function Cards({ title, buttonText, link, image }: CardProps) {
    return (
        <div className="w-80">
            {/* Parte superior do card (imagem do projeto) */}
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div
                    className="rounded-t-xl h-72 bg-gray-300 flex items-center justify-center"
                    style={{ backgroundColor: "#D9D9D9" }}
                >
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover rounded-t-xl"
                        />
                    ) : (
                        <p className="text-gray-500">Sem imagem</p>
                    )}
                </div>
            </a>
            {/* Parte inferior do card (detalhes do projeto) */}
            <div
                className="bg-gray-900 rounded-b-xl p-4 text-left"
                style={{ backgroundColor: "#292C36" }}
            >
                <h3 className="text-white text-lg font-medium">{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        {buttonText}
                    </button>
                </a>
            </div>
        </div>
    );
}
