import axios from "axios";
import { useContext, useState } from "react";
import { Eye } from "lucide-react";
import Eko from "../assets/images/Eko.png";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {

    const baseUrl = "http://localhost:8080/api";
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const { user, setUser } = useContext(UserContext);

    // esconde/mostra a senha quando alguém aperta no olhinho
    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    }

    // limpa os campos do formulário
    const resetForm = () => {
        setEmail("");
        setSenha("");
        setMostrarSenha(false);
    }

    // controla as páginas - redirecionamentos
    const navigate = useNavigate();

    // faz o login
    const handleSubmit = () => {
        axios.post(`${baseUrl}/auth/login`, {
            "email": email,
            "password": senha
        }).then((res) => {
            if (res.status == 200) {
                setUser(res.data);
                alert("Login realizado com sucesso!");
                navigate("/home");
            } else {
                alert(res.data.message);
            }
        }).catch((e) => {
            alert("Verifique seus dados e tente novamente.");
        });
    }

    

    return (
        <div className="bg-gray-700 w-screen h-screen flex justify-center items-center">
            <div className="border border-gray-400 w-fit min-w-200 rounded-2xl flex flex-col justify-center items-center gap-10 p-5 bg-[#f6f4f0]">

                <img src={Eko} alt="Logo" className="h-50 w-50 mx-auto" />

                <div className="w-fit">
                    <h3 className="text-3xl text-[#222222] font-bold ">Faça Login!</h3>
                </div>

                <form className="grid gap-5 text-md rounded-2xl justify-items-center content-center">
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
                            type={mostrarSenha ? "text" : "password"}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="border p-2 border-gray-400 rounded-lg focus:outline-none"
                        />
                        <Eye className="absolute left-65 hover:cursor-pointer" onClick={() => toggleMostrarSenha()} />
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
                            Entrar
                        </button>
                    </div>
                </form>
                <span onClick={() => navigate("/cadastro")} className="text-sky-800 cursor-pointer">Ainda não tem uma conta?</span>
            </div>
        </div>
    )
}