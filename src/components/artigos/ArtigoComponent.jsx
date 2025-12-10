import Divider from "../Divider";
import { useState } from "react";
import { Heart, ThumbsUp } from "lucide-react";
import Button from "../Button";

// A FAZER:
// Dar um jeito de organizar mais
// Sla, tipo dividir tudo em vários outros componentes


// Tentar ver a melhor forma de mostrar os comentários
// Queria usar o componente de <ArtigoComponent/> mas dá erro
export default function ArtigoComponent({ article }) {

    // foto automática para usuário
    article.author.profilePicture = `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${article.author.name}`;

    // qual reação está no momento
    // "0" - nenhuma
    // "L" - like
    // "H" - coração
    const [reactionState, setReactionState] = useState("0");
    
    // Adicionar/remover like
    const toggleLike = () => {
        // adicionar like se não tiver nenhuma reação (like ou coração)
        if (reactionState == "0") {
            setLikes(likes + 1);
            setReactionState("L");
        // adicionar like se tiver coração como reação (tira o coração e coloca o like)
        } else if (reactionState == "H") {
            setHearts(hearts - 1);
            setLikes(likes + 1);
            setReactionState("L");
        // remover like
        } else if (reactionState == "L") {
            setLikes(likes - 1);
            setReactionState("0");
        }
    }

    // Adicionar/remover coração
    const toggleHeart = () => {
        // adicionar coração se não tiver nenhuma reação (like ou coração)
        if (reactionState == "0") {
            setHearts(hearts + 1);
            setReactionState("H");
        // adicionar like se tiver coração como reação (tira o like e coloca o coração)
        } else if (reactionState == "L") {
            setLikes(likes - 1);
            setHearts(hearts + 1);
            setReactionState("H");
        // remover coração
        } else if (reactionState == "H") {
            setHearts(hearts - 1);
            setReactionState("0");
        }
    }

    // likes
    const [likes, setLikes] = useState(article.reactions.likes ? article.reactions.likes : 0);
    // corações
    const [hearts, setHearts] = useState(article.reactions.hearts ? article.reactions.hearts : 0);
    // comentários
    const [comments, setComments] = useState(article.comments);
    // mostrar o texto todo / esconder uma parte do texto
    // começa escondendo uma parte do texto
    const [collapseText, setCollapseText] = useState(true);

    let date = article.updatedAt == article.createdAt ? article.createdAt : article.updatedAt;    
    date = date.split("T")[0].replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1"); 
    // facilita o uso da função setCollapseText
    const toggleText = () => {
        setCollapseText(!collapseText);
    }

    return (
        <div className="flex flex-col border border-gray-800 p-5 rounded-2xl">
            {/* titulo do post */}
            <h3 className="text-2xl font-bold">{article.title}</h3>
            {/* pequeno resumo do post */}
            <p className="text-md py-2">{article.summary}</p>
            
            {/* foto de perfil do autor, nome do autor e data de criação/atualização do post */}
            <div className="flex flex-row py-3 items-center gap-1">
                <div className="flex flex-row gap-2 items-center">
                    <img src={article.author.profilePicture} alt="Foto de Perfil" className="w-10 h-10 rounded-full"/>
                    <span>{article.author.name}</span>
                </div>
                <span>•</span>
                <div>
                    <p>{article.updatedAt == article.createdAt ? `atualizado em ${date}`: `publicado em ${date}`}</p>
                </div>
            </div>

            {/* tags do post */}
            <div className="flex flex-row gap-2">
                {article.tags.map((tag, i) => (
                    <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.8rem] font-bold leading-none text-primary-700 dark:bg-slate-900 dark:text-primary-500" key={i}>{tag}</span>
                ))}
            </div>

            {/* linha para dividir as "seções" do post */}
            <Divider/>
            
            {/* texto/conteúdo do post */}
            <div className="py-5 relative">
                <p className={collapseText && "line-clamp-10"}>
                    {article.content} <span onClick={() => toggleText()} className="hover:text-sky-500 text-sky-600 cursor-pointer">{!collapseText && "Ler menos"}</span>
                </p>
                <div className={`z-50 absolute inset-x-0 ${collapseText ? "bottom-5" : "hidden"} flex justify-center bg-linear-to-t from-gray-800 to-transparent to-60%`}>
                    <Button classname={"w-30 bg-sky-800 hover:bg-sky-700 cursor-pointer"} onClick={() => toggleText()}>Ler Mais</Button>
                </div>
            </div>

            {/* botões de reações do post */}
            {/* <PostReactions likes={likes} hearts={hearts} reactionState={reactionState}/> */}
            <div className="flex pt-5 flex-row gap-2 row-span-1">
                {/* botão de like */}
                <div className="flex flex-row gap-2" onClick={() => toggleLike()}>
                    <ThumbsUp fill={reactionState == "L" ? "currentColor" : "none"}/> {likes}
                </div>
                {/* botão de coração */}
                <div className="flex flex-row gap-1" onClick={() => toggleHeart()}>
                    <Heart fill={reactionState == "H" ? "red" : "none"} stroke={reactionState == "H" ? "red" : "white"}/> {hearts}
                </div>
            </div>

            {/* linha para separar as "seções" com "Comentários" escrito */}
            <Divider title={"Comentários"}/>

            <div>
                {comments.length > 0 ? comments : "Ainda não há comentários. Seja o primeiro a comentar."}
            </div>

        </div>
    );
}


