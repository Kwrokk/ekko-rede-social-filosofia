import { Heart, MessageCircle, ThumbsUp } from "lucide-react";

export default function ArtigoPrevia({ artigo }) {

    return (
        <div className="max-w-180 border border-gray-500 cursor-pointer p-5 rounded-2xl hover:scale-105">
            <h3 className="text-2xl font-semibold">{artigo.title}</h3>
            <span className="text-sm font-medium text-gray-400">Autor: @{artigo.author.name}</span>
            <div>
                {artigo.content.slice(0, 100)}...
            </div>
            <div className="flex flex-row gap-2 pt-7 text-gray-300 font-semibold">
                <span className="flex gap-1">
                    <ThumbsUp /> {artigo.reactions.likes}
                </span>
                <span className="flex gap-1">
                    <Heart /> {artigo.reactions.hearts}
                </span>
                <span className="flex gap-1">
                    <MessageCircle/> {artigo.comments.length}
                </span>
            </div>
        </div>
    );
}