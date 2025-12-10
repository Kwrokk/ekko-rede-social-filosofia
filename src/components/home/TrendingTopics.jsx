import Container from "./Container";
import { Flame } from "lucide-react";

// tópicos mais falados no comunidade
// atualmente é estático mas será atualizado para dados reais
export default function TrendingTopics({ className }) {

    const trendingTopics = [
        "Bolsonaro Preso é o reflexo do Brasil",
        "#IssoAGloboNaoMostra",
        "Virginia Fonseca e O Capistalismo Consumista",
        "ENEM2025 e Maquiavel",
        "Minecraft e Napoleão",
        "Among Us e Freud",
        "Vini Jr. e Galois"
    ]

    return (
        <Container p="p-0" className={`bg-gray-800 col-span-2 row-span-3 rounded-2xl ${className}`}>
            <div className="sticky bg-gray-800 px-4 pt-5 top-0 z-50 w-full rounded-b-2xl">
                <div className="flex start-0 pb-2 gap-2 justify-center items-center">
                    <span className="text-2xl font-bold">Trending Topics</span>
                    <Flame className="text-red-700"/>
                </div>
            </div>
            <div className="pt-5 flex flex-wrap gap-4 p-5 start-0">
               {trendingTopics && (trendingTopics.map((topic, i) => (
                <div key={i} className={"rounded-2xl"}>
                    #{i + 1} {topic.length > 20 ? `${topic.slice(0, 20)}...` : topic}
                </div>
               )))}
            </div>
        </Container>
    );
}