// mensagem que aparece quando coloca o mouse em cima dos ícones do menu
export default function TooltipIcon({ icon, description, onClick }) {
    
    return (
        <div className="relative group inline-block" onClick={() => onClick()}>
            {icon}
            <span className="absolute left-1/3 translate-x-1/4 translate-y-10 -top-10 opacity-0 group-hover:opacity-100 px-3 py-1 text-sm text-black bg-white rounded transition z-50 pointer-events-none">
                {description}
            </span>
        </div>
    );
}