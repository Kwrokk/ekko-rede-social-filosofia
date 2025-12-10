import "animate.css";
import TooltipIcon from "./TooltipIcon";
import Eko from "../assets/images/Eko.png";
import { Bell, Book, Home, NotebookPen, Power, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Nav() {

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    const logOut = () => {
        setUser(null);
        alert("Log out feito com sucesso!");
        navigate("/login");
    }


    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-center">
                <img src={Eko} alt="Logo do Projeto" className={"w-20"} />
            </div>
            <div className="my-auto flex justify-center items-center flex-col gap-6">
                
                <TooltipIcon icon={<Home />} description={"Página Inicial"} onClick={() => navigate("/home")}/>
                <TooltipIcon icon={<NotebookPen />} description={"Novo Artigo"} onClick={() => navigate("/artigo/novo")}/>
                <TooltipIcon icon={<User />} description={"Meu Perfil"} onClick={() => navigate("/perfil")} />
                <TooltipIcon icon={<Book />} description={"Descobrir Artigos"} onClick={() => navigate("/artigo/")} />
                <TooltipIcon icon={<Power />} description={"Encerrar Sessão"} onClick={() => logOut()} />
            </div>
        </div>
    )
}