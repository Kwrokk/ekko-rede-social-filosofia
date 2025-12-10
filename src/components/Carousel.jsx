import { Heart, ThumbsUp, MessageCircle } from "lucide-react";
import ArtigoPrevia from "./ArtigoPrevia";

export default function Carousel({ children, title, items, itemType, actions }) {
    return (
        <>
            <h3 className="text-5xl font-bold">{title}</h3>
            <div className="flex justify-end w-full">{actions}</div>
            <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-10 px-4 py-6">
                {children && children.map((child, i) => (
                    <div key={i} className="snap-center justify-items-center content-center rounded-xl p-6 text-center text-xl">
                        {child}
                    </div>
                ))}
            </div>
        </>
    );
}