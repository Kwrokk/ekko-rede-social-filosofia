import Template from "../components/Template";
import ArtigoFormulario from "../components/artigos/ArtigoFormulario";

export default function EditarArtigo({ artigo }) {
    return (
        <Template>
            <div className="col-span-12 gap-10 row-span-10 flex flex-col justify-center items-center">
                <h3 className="text-5xl font-semibold">Atualizar Artigo</h3>
                <ArtigoFormulario artigo={artigo} actionText={"Salvar Alterações"}/>
            </div>
        </Template>
    );
}