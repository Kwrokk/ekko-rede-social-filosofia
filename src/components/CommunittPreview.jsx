import { User } from "lucide-react";
import CardContainer from "./CardContainer";

export default function CommunityPreview({ community }) {
    return (
        <div className="transition-transform duration-300 hover:scale-105">
            <img src={community.picture} alt="Bandeira LGBT" className="bg-white w-full p-0 rounded-t-2xl"/>
            <div className={"flex flex-col gap-2 rounded-b-2xl bg-gray-700 p-2"}>
                <p className="text-xl font-bold">{community.name}</p>
                <p>{community.bio}</p>
                <div className="flex flex-row gap-1">
                    <User/> {community.members}
                </div>
            </div>
        </div>
    );
}