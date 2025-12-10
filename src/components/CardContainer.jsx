export default function CardContainer({ children, className, animation=true }) {
    return (
        <div className={`border border-gray-500 ${className}  p-2 bg-gray-700 ${animation && "transition-transform duration-300 hover:scale-105"}`}>
            {children}
        </div>
    );
}