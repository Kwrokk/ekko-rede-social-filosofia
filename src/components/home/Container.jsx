// div estilizada para alguns elementos da página "home" (ex: card de comunidades, card da ForYou, card de spotlight e Trending Topics)
export default function Container ({ p="p-4", children, className }) {
    return (
        <div className={`scroll-smooth ${p} ${className} overflow-y-scroll snap-y snap-center`}>
            {children}
        </div>
    );
}