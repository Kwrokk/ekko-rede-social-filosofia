import axios from "axios";
import { useState } from "react";
import { Eye } from "lucide-react";
import Eko from "../assets/images/Eko.png";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    
    const baseUrl = "http://localhost:8080/api";
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    }

    const resetForm = () => {
        setNome("");
        setEmail("");
        setSenha("");
        setMostrarSenha(false);
    }

    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post(`${baseUrl}/auth/sign-up`, {
            "name": nome,
            "email": email,
            "password": senha,
            "role": ["COMMON"]
        }).then((res) => {
            if (res.status == 200) {
                alert("Cadastro realizado com sucesso!");
                navigate("/login");
            }
        })
    }

    return (
        <div className="bg-gray-700 w-screen h-screen flex justify-center items-center">
            <div className="border border-gray-400 w-fit min-w-200 rounded-2xl flex flex-col justify-center items-center gap-4 p-5 bg-[#f6f4f0]">

                <img src={Eko} alt="Logo" className="h-50 w-50 mx-auto"/>
                <div className="w-fit">
                    <h3 className="text-3xl text-[#222222] font-bold ">Crie sua conta!</h3>
                </div>
                <form className="grid gap-4 text-md rounded-2xl justify-items-center content-center">
                    <img src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${nome}`} alt="Foto de Perfil" className="rounded-full bg-amber-900 border border-black"/>
                    <span className="font-light text-sm text-gray-700">Sua foto de perfil muda de acordo com seu nome</span>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <label>Nome</label>
                        <input
                            required
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="border p-2 border-gray-400 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-row items-center justify-center gap-4">
                        <label>E-mail</label>
                        <input 
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border p-2 border-gray-400 rounded-lg focus:outline-none"
                        />
                    </div>
                    <div className="relative flex flex-row items-center justify-center gap-4">
                        <label>Senha</label>
                        <input
                            required
                            type={mostrarSenha ? "text": "password"}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="border p-2 border-gray-400 rounded-lg focus:outline-none"
                        />
                        <Eye className="absolute left-65 hover:cursor-pointer" onClick={() => toggleMostrarSenha()}/>
                    </div>
                    <div className="flex flex-row gap-4 pt-2">
                        <button 
                            type="button"
                            onClick={() => resetForm()}
                            className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg font-medium"
                        >
                            Limpar
                        </button>
                        <button
                            type="button"
                            onClick={() => handleSubmit()}
                            className="bg-sky-700 hover:bg-sky-600 p-2 rounded-lg text-white w-auto"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
                <span onClick={() => navigate("/login")} className="text-sky-800 cursor-pointer">Já tem uma conta?</span>
            </div>
        </div>
    )
}