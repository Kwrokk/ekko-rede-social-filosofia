import Template from "../components/Template";
import ForYou from "../components/home/ForYou";
import Spotlight from "../components/home/Spotlight";
import Communities from "../components/home/Communities";
import TrendingTopics from "../components/home/TrendingTopics";

export default function Home() {

    return (
        <Template>
            <ForYou />
            <div className="grid grid-cols-2 grid-flow-row py-10 grid-rows-9 text-white h-screen col-span-2 bg-gray-700 gap-5">
                <TrendingTopics />
                <Spotlight />
                <Communities />
            </div>
        </Template>
    );
}