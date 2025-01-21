interface CardProps {
    title: string;
    buttonText: string;
}

export default function Cards({ title, buttonText }: CardProps) {
    return (
        <div className="w-80">
            {/* Parte cinza do card */}
            <div
                className="bg-gray-300 rounded-t-xl h-72"
                style={{ backgroundColor: "#D9D9D9" }}
            ></div>
            {/* Parte preta do card */}
            <div
                className="bg-gray-900 rounded-b-xl p-4 text-left"
                style={{ backgroundColor: "#292C36" }}
            >
                <h3 className="text-white text-lg font-medium">{title}</h3>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}
