import CardContainer from "../CardContainer"

export default function AutorPrevia({ author, className }) {

    author.profilePic = `https://api.dicebear.com/9.x/adventurer/svg?seed=${author.username}`;
    return (
        <CardContainer className={`rounded-2xl w-60 ${className}`}>
            <img src={author.profilePic} alt="Foto de Perfil" className="w-60 h-60 rounded-t-2xl" />
            <p className="text-xl font-bold py-2">@{author.username}</p>
            <p>{author.bio.slice(0, 50)}...</p>
        </CardContainer>
    );
}