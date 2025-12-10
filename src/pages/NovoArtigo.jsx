import { useContext, useState } from "react";
import ArtigoFormulario from '../components/artigos/ArtigoFormulario';
import Nav from "../components/Navigation";
import axios from "axios";

export default function NovoArtigo() {

    const baseUrl = "http://localhost:8080/api";

    const handleSubmit = (titulo, conteudo, tags, user) => {
        console.log("T:", titulo);
        console.log("C:", conteudo);
        console.log("G:", tags);
        console.log("U:", user);
        axios.post(`${baseUrl}/posts/`, {
            "title": titulo,
            "content": conteudo,
            "tags": tags,
            "author": user
        })
    }

    return (
        <div className="grid grid-cols-24 gap-0">
            <div className={`h-screen bg-[#f6f4f0] text-2xl col-span-1`}>
                <Nav />
            </div>
            <div className={`flex flex-row justify-center items-center col-span-23 bg-gray-700 text-white`}>
                <ArtigoFormulario action={handleSubmit} actionText={"Publicar"} />
            </div>
        </div>
    );
}