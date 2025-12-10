import CommunityPreview from "../CommunittPreview";
import Container from "./Container";

function Community(name, picture, bio, members) {
    this.name = name;
    this.picture = picture;
    this.bio = bio;
    this.members = members;
}

export default function Communities() {
    const communities = [
        new Community("Orgulho LGBT",
        "https://static.dicionariodesimbolos.com.br/upload/2a/fe/significado-da-bandeira-lgbt-e-sua-historia-8_xl.png",
        "Onde a diversidade e o amor ganham lugar. Onde não há preconceitos.", 64),
        new Community("Games de PS",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/200px-PlayStation_logo.svg.png",
        "Onde a diversidade e o amor ganham lugar. Onde não há preconceitos.", 128),
        new Community("Fãs da Marvel",
        "https://cloud.estacaonerd.com/wp-content/uploads/2019/03/14122530/marvel.jpg",
        "Onde a diversidade e o amor ganham lugar. Onde não há preconceitos.", 256),
        new Community("Fãs da DC",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/250px-DC_Comics_logo.svg.png",
        "Onde a diversidade e o amor ganham lugar. Onde não há preconceitos.", 512),
        new Community("Autismo, TDAH e Conhecimento",
        "https://oabpa.org.br/wp-content/uploads/2025/05/image-4.png",
        "Onde a diversidade e o amor ganham lugar. Onde não há preconceitos.", 1024)
    ];

    return (
        <Container p="p-0" className={"relative col-span-2 row-span-3 rounded-2xl bg-gray-800"}>
            <div className="sticky bg-gray-800 px-4 pt-5 top-0 z-50 w-full rounded-b-2xl">
                <span className="text-2xl sticky top-0 font-bold">Comunidades</span>
            </div>
            <div className="pt-5 px-4 flex flex-col gap-4">
                {communities ? 
                communities.slice(0, 5).map((community, i) => (
                    <CommunityPreview key={i} community={community}/>
                ))
                : "Você ainda não faz parte de nenhuma comunidade. Explore comunidades e interaja com elas aqui."}
            </div>
            <div className="flex justify-center">
                <button className="hover:cursor-pointer bg-gray-950 p-3 mt-5 rounded-2xl font-bold text-white">Descobrir mais</button>
            </div>
        </Container>
    );
}