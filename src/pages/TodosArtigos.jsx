import { useEffect, useState } from "react";
import Template from "../components/Template";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import ArtigoComponent from "../components/artigos/ArtigoComponent";

export default function TodosArtigos() {

    const [posts, setPosts] = useState([]);
    const baseUrl = "http://localhost:8080/api"

    useEffect(() => {
        axios.get(`${baseUrl}/posts/`)
        .then((res) => {
            setPosts(res.data);
            console.log(res);
        }).catch((e) => {
            console.log(e);
            alert("Houve um erro ao tentar buscar os posts. Por favor, tente novamente.")
        })
    }, []);

    return (
        <Template>
            <div className="pt-5 col-span-12">
                <SearchBar setResponse={setPosts}/>
            </div>
            <div className="flex pt-0 flex-col col-span-12 gap-10 overflow-y-scroll h-213">
                {posts ? posts.length > 0? posts.map((post, i) => (
                  
                <ArtigoComponent article={post} key={i}/>
                )) : "Não há posts." 
                : "Carregando..."
                }
            </div>
        </Template>
    );
}