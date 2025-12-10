import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

// revisar cores
export default function ArtigoFormulario({ artigo, actionText, action }) {

    const [titulo, setTitulo] = useState(artigo ? artigo.title : "");
    const [resumo, setResumo] = useState(artigo ? artigo.summary : "");
    const [conteudo, setConteudo] = useState(artigo ? artigo.content : "");
    const [tags, setTags] = useState(artigo ? artigo.tags : "");
    const { user, setUser } = useContext(UserContext);

    const resetForm = () => {
        setTitulo("");
        setResumo("");
        setConteudo("");
        setTags("");
    }

    return (
        <div className="flex flex-col border border-gray-400 h-fit p-5 w-200 rounded-2xl">

            <form>
                <h3 className="text-2xl font-bold">
                    <input
                        type="text"
                        value={titulo}
                        placeholder="Título do Post"
                        className="focus:outline-none"
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </h3>
                <p className="text-md">
                    <input
                        type="text"
                        value={resumo}
                        placeholder="Resumo do Post"
                        className="focus:outline-none"
                        onChange={(e) => setResumo(e.target.value)}
                    />
                </p>

                <div className="flex flex-row py-3 items-center gap-1">
                    <div className="flex flex-row gap-2 items-center">
                        <img src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${user.name}`} alt="pfp" className="w-10 h-10 rounded-full" />
                        <span>{user.name}</span>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <input
                        type="text"
                        value={tags}
                        className="w-full focus:outline-none"
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Digite aqui as tags separadas por vírgula"
                    />
                </div>

                <div className="py-5 relative">
                    <p>
                        <textarea
                            cols={50}
                            rows={10}
                            value={conteudo}
                            placeholder="Digite seu post aqui..."
                            onChange={(e) => setConteudo(e.target.value)}
                            className="border border-gray-400 rounded-2xl
                            p-2 focus:outline-none resize-none w-full"
                        />
                    </p>
                </div>

                <div className="flex flex-row gap-5 justify-center">
                    <button
                        type="button"
                        onClick={() => resetForm()}
                        className="bg-red-500 p-2 
                        rounded-lg font-medium hover:cursor-pointer hover:bg-red-400"
                    >
                        Limpar
                    </button>
                    <button
                        type="button"
                        onClick={() => action(titulo, conteudo, tags.split(","), user)}
                        className="bg-sky-700 p-2
                        rounded-lg font-medium hover:cursor-pointer hover:bg-sky-600"
                    >
                        {actionText}
                    </button>
                </div>
            </form>
        </div>
    );
}