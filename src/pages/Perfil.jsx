import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Template from "../components/Template";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Divider from "../components/Divider";
import ArtigoPrevia from "../components/artigos/ArtigoPrevia";
import { Lightbulb, Pencil } from "lucide-react";

export default function Perfil() {
    const baseUrl = "http://localhost:8080/api";
    const { user, setUser } = useContext(UserContext);
    const [nome, setNome] = useState(user.name);
    const [senha, setSenha] = useState(user.password);
    const [email, setEmail] = useState(user.email);
    const [biografia, setBiografia] = useState(user.bio);
    const [artigos, setArtigos] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get(`${baseUrl}/posts/author/${user.id}`)
        .then((res) => {
            console.log(res);
            if(res.status == 200) {
                console.log(res.data);
                setArtigos(res.data);
                console.log("should set articles");
            } else {
                alert("Algo deu erradoTM. Por favor, tente novamente.");
            }
        }).catch((e) => {
            console.log(e);
            alert("Algo deu errado. Por favor, tente novamente.");
        })
    }, []);

    const handleSubmit = () => {
        axios.put(`${baseUrl}/users/${user.id}`, {
            "name": nome,
            "password": senha,
            "email": email,
            "bio": biografia
        }).then((res) => {
            if (res.status == 200) {
                setUser(res.data);
                alert("Alterações Salvas com Sucesso. Volte aqui para verificar!");
                navigate("/home");
            } else {
                alert("Houve um erro. Por favor, tente novamente mais tarde");
            }
        }).catch((e) => {
            alert("Houve um erro. Por favor, tente novamente mais tarde.\n Código: " + e.status);
        })
    }

    const resetForm = () => {
        setNome("");
        setSenha("");
        setEmail("");
        setBiografia("");
    }

    const handleDelete = () => {
        axios.delete(`${baseUrl}/users/${user.id}`)
        .then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })
    }

    useEffect(() => {
        for (let artigo of artigos) {
            console.log(artigo);
        }
    }, [artigos]);

    return (
        <Template>
            <div className="col-span-12 py-10 ">

                <div className="border h-220 py-10 px-2 border-gray-400 overflow-y-scroll rounded-2xl">

                    <form className="flex flex-col overflow-y-scroll justify-center items-center gap-4">

                        <div className="flex flex-row gap-4 bg-gray-800 p-5 rounded-2xl">
                            <Lightbulb className="text-[#FFFF00]" fill="#FFFF00"/>
                            <span>Clique/Toque nos dados que deseja alterar para inserir novos valores!</span>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <img src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${nome}`} alt="pfp" className="w-50 h-50 bg-amber-900 border border-black rounded-full" />
                            <h3 className="text-center font-bold text-5xl">
                                <input
                                    required
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    className="text-center focus:outline-none cursor-pointer hover:scale-105"
                                />
                            </h3>
                        </div>

                        <div className="flex flex-col max-w-200 text-justify p-5 gap-5">
                            <h3 className="text-center font-bold text-2xl">Biografia</h3>
                            <textarea
                                cols={80}
                                rows={5}
                                value={biografia ? biografia : ""}
                                placeholder="Digite sua biografia aqui"
                                onChange={(e) => setBiografia(e.target.value)}
                                className="text-justify scrollbar-none
                                border border-gray-400 p-2 cursor-pointer rounded-2xl
                                focus:outline-none resize-none hover:scale-105" />
                        </div>

                        <div className="flex flex-col gap-5 items-center">
                            <h3 className="text-center font-bold text-2xl">Dados Pessoais</h3>

                            <div className="flex flex-row gap-5 items-center">
                                <label>E-mail</label>
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border border-gray-400 p-2 hover:scale-105 cursor-pointer rounded-xl"
                                />
                            </div>

                            <div className="flex flex-row gap-5 items-center">
                                <label>Senha</label>
                                <input
                                    required
                                    type="email"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    className="border border-gray-400 p-2 rounded-xl hover:scale-105 cursor-pointer"
                                />
                            </div>
                        </div>

                        <div className="flex flex-row text-white gap-4">

                            <button
                                type="button"
                                onClick={() => resetForm()}
                                className="p-2 text-center bg-red-500 hover:bg-red-400 rounded-lg font-medium"
                            >
                                Limpar
                            </button>

                            <button
                                type="button"
                                onClick={() => handleSubmit()}
                                className="p-2 text-center bg-sky-700 hover:bg-sky-600 rounded-lg font-medium"
                            >
                                Salvar Alterações
                            </button>
                        </div>

                    </form>
                    <Divider className="w-30"/>
                    <div className="flex py-10 flex-col gap-5 items-center">
                        <h3 className="text-center font-bold text-2xl">Meus Artigos</h3>
                        {artigos.length > 0 ? artigos.map((artigo, i) => (
                            <div key={i}>
                                <ArtigoPrevia artigo={artigo}/>
                            </div>
                        )) : "Você ainda não publicou nem um artigo."}
                    </div>
                    <Divider/>
                    <div className="flex flex-col justify-center items-center text-white gap-4">
                        <h3 className="text-center font-bold text-lg">Exclusão de Conta</h3>
                        <button
                            type="button"
                            onClick={() => handleDelete()}
                            className="p-2 w-50 text-center bg-red-700 hover:bg-red-600 rounded-lg font-medium"
                        >
                            Excluir minha conta
                        </button>
                    </div>
                </div>
            </div>
        </Template>
    );
}