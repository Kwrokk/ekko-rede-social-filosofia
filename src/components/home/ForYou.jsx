import { useNavigate } from "react-router-dom";
import Artigo from "../artigos/ArtigoComponent";
import Container from "./Container";
import { Lightbulb } from "lucide-react";
import Callout from "../Callout";
import { useEffect, useState } from "react";
import axios from "axios";
import ArtigoComponent from "../artigos/ArtigoComponent";

// Conteúdo principal da página "home"
export default function ForYou() {

    const [posts, setPosts] = useState(null);
    const baseUrl = "http://localhost:8080/api";

    useEffect(() => {
        axios.get(`${baseUrl}/posts/recommendations/5`)
        .then((res) => setPosts(res.data))
        .catch((e) => alert("Houve um erro"));
    }, []);

    return (
        <Container className="col-span-10 gap-3 py-10 pb-10 row-span-9 h-screen grid grid-rows-10">
            <div className="grid grid-cols-1 gap-4 pb-10">
                {posts && posts.length > 0 ? posts.map((post, i) => (
                    <ArtigoComponent article={post} key={i}/>
                )) : "Não há posts"}
                <div className="flex flex-row justify-center p-10">
                    <Callout>
                        <Lightbulb className="text-[#FFFF00]" fill="#FFFF00"/>
                        <div>
                            <span className="hover:scale-105 cursor-pointer text-sky-400">Por favor, pesquise algo para nos ajudar a trazer mais conteúdos para você.</span>
                        </div>
                    </Callout>
                </div>
            </div>          
        </Container>
    );
}