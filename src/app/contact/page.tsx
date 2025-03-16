"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Input from "@/components/Inputs";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.from_name,
                    from_email: formData.from_email,
                    subject: formData.subject,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            alert("Mensagem enviada com sucesso!");
            setFormData({ from_name: "", from_email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error);
            alert("Ocorreu um erro ao enviar a mensagem.");
        }
    };

    return (
        <>
            <Header title="Contato" subtitle="Saiba como entrar em contato comigo" />
            <section className="p-8 flex flex-wrap justify-between items-start gap-8 max-w-[1200px] mx-auto">
                {/* Redes Sociais */}
                <div className="text-textBlue w-full md:w-[45%] lg:w-[40%]">
                    <h2 className="text-2xl font-bold mb-4">Redes Sociais:</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <img src="/assets/ig.png" alt="Instagram" className="w-8 h-8 mr-4" />
                            <a href="https://www.instagram.com/r1yck/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-textBlue">
                                Instagram
                            </a>
                        </li>
                        <li className="flex items-center">
                            <img src="/assets/wpp.png" alt="Whatsapp" className="w-8 h-8 mr-4" />
                            <a href="https://wa.me/5573998336602" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-textBlue">
                                Whatsapp
                            </a>
                        </li>
                        <li className="flex items-center">
                            <img src="/assets/github.png" alt="Github" className="w-8 h-8 mr-4" />
                            <a href="https://github.com/r1yck" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-textBlue">
                                Github
                            </a>
                        </li>
                        <li className="flex items-center">
                            <img src="/assets/yt.png" alt="YouTube" className="w-8 h-8 mr-4" />
                            <a href="https://www.youtube.com/@rick.mp4" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-textBlue">
                                YouTube (portfólio de editor de vídeos)
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Formulário de Contato */}
                <div className="w-full md:w-[45%] lg:w-[40%]">
                    <h2 className="text-2xl font-bold text-textBlue mb-4 text-center md:text-left">Envie uma mensagem:</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <Input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            placeholder="Digite seu nome e sobrenome"
                            required />
                        <Input
                            type="email"
                            name="from_email"
                            value={formData.from_email}
                            onChange={handleChange}
                            placeholder="Digite seu e-mail"
                            required />
                        <Input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Digite o assunto"
                            required />
                        <Input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Sua mensagem..."
                            isLarge
                            required />
                        <button type="submit" className="w-full bg-textBlue text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600">
                            Enviar
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}
