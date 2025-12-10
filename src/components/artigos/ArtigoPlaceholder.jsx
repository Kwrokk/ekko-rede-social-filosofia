import { Heart, MessageCircle, ThumbsUp } from "lucide-react";
import CardContainer from "../CardContainer";

export default function ArtigoPlaceholder({ className, animation=true }) {

    const artigo = {
        author: "@SupaCoolWriter",
        title: "How Minecraft Changed My Life",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo ex libero, enim et quasi nulla, ab inventore incidunt eaque quaerat voluptatum perspiciatis! Voluptates reiciendis harum repudiandae dolorem magni deleniti.",
        reactions: { likes: 8, hearts: 10 },
        comments: []
    }

    return (
        <CardContainer className={`rounded-2xl ${className}`} animation={animation}>
            <h3 className="text-2xl font-semibold">{artigo.title}</h3>
            <span className="text-sm font-medium text-gray-600">Autor: {artigo.author}</span>
            <div>
                {artigo.content.slice(0, 100)}...
            </div>
            <div className="flex flex-row gap-2 pt-7 text-white font-semibold">
                <span className="flex gap-1">
                    <ThumbsUp /> {artigo.reactions.likes}
                </span>
                <span className="flex gap-1">
                    <Heart /> {artigo.reactions.hearts}
                </span>
                <span className="flex gap-1">
                    <MessageCircle /> {artigo.comments.length}
                </span>
            </div>
        </CardContainer>
    );
}