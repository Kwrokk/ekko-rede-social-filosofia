import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ setResponse }) {

    // futuramente adicionar pesquisar por data de publicação e tags do post/artigo
    const tags = [
        { name: "Autor", color: "#4356c4", desc: "Nome do autor", apiValue: "author" },
        { name: "Título", color: "#4356c4", desc: "Título do Post", apiValue: "title" }
    ];
    const [showBody, setShowBody] = useState(false);
    const toggleShowBody = () => {
        setShowBody(!showBody);
    }
    const [selectedTag, setSelectedTag] = useState(null);

    const selectTag = (tag) => {
        if (selectedTag == tag) {
            setSelectedTag(null);
        } else {
            setSelectedTag(tag);
        }
    }

    return (
        <>
            <div
                className={`bg-gray-800 cursor-pointer p-5 justify-between
            h-10 flex items-center grow ${showBody ? "rounded-t-2xl" : "rounded-2xl"}`}
                onClick={() => toggleShowBody()}
            >
                <input
                    type="text"
                    className="text-[#7d7c79] focus:outline-none grow"
                    placeholder="Pesquisar"
                />
                <Search size={15} color="#7d7c79" />
            </div>

            <div className={`px-4 bg-gray-800 ${!showBody && "hidden"} rounded-b-2xl`}>

                <div className="grow bg-[#6e6e6e] col-span-12 h-px"></div>

                <div className="py-2">

                    <p>Pesquisar por:</p>
                    <div className="flex py-2 flex-row gap-2">
                        {tags.map((tag, i) => (
                            <span
                                title={tag.desc}
                                key={i}
                                style={{ backgroundColor: tag.color }}
                                className={`inline-flex items-center px-3 py-1
                        rounded-xl text-sm font-bold cursor-pointer
                        text-white hover:scale-105 select-none
                        ${tag == selectedTag && "scale-105 border border-white"}`}
                                onClick={() => selectTag(tag)}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}