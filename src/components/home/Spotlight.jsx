import CardContainer from "../CardContainer";
import Container from "./Container";

// card que mostra os autores em destaque
// atualmente é estático mas será atualizado para dados reais
export default function Spotlight() {
    const authors = [
        {
            username: "FakeNattyWriter",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        { 
            username: "boofrockMeowberet",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        { 
            username: "chucsunetpelastic",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        {
            username: "clasliersHisstiara",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        }
            ,
        {
            username: "hrapRibbitsombrero",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        {
            username: "croakpasuinkcaftan",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        {
            username: "groashirtThudiere",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        {
            username: "whamstbellbottoms",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        {
            username: "vroomltUghoveralls",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        {
            username: "blurfsAhemsneakers",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        {
            username: "splatheWhooshskirt",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit."
        },
        {
            username: "chompcuffBoofrock",
            bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque soluta quod accusantium eum assumenda asperiores corporis enim nihil, libero corrupti deserunt minus ipsa similique. Nulla dolor ad qui iusto! Odit." 
        }
    ]
    return (
        <Container p="p-0" className={"col-span-2 row-span-3 rounded-2xl bg-gray-800"}>
            <div className="sticky bg-gray-800 px-4 pt-5 top-0 z-50 w-full rounded-b-2xl">
                <span className="text-2xl font-bold">Spotlights</span>
                <p className="pb-2">Autores de destaque</p>
            </div>
            <div className="flex p-4 w-full flex-row gap-10 flex-wrap pt-5">
                <div className="w-full flex gap-2 flex-col">
                    {authors.map((author, i) => (
                        <CardContainer key={i} className={"flex flex-row justify-start gap-2 items-center start-0 rounded-2xl"}>
                        
                            <div className="flex justify-center items-center  rounded-full">
                                <img
                                    src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${author.username}`}
                                    alt="Foto de Perfil do Autor"
                                    className="w-10 h-10 rounded-full"
                                />
                            </div>
                            
                            <div className="flex flex-row gap-2">
                                <p>{author.username}</p>
                                {
                                    i >= 0 && i <= 2 &&
                                    <span className="flex items-center flex-end justify-center text-white font-bold bg-blue-500 rounded-full w-6 h-6">
                                        {i + 1}
                                    </span>
                                }
                            </div> 
                       
                        
                        </CardContainer>
                    ))}
                </div>                
            </div>
        </Container>
    );
}