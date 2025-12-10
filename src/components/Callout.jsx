export default function Callout({ children, className }) {
    return (
        <div className="text-center bg-gray-800 hover:scale-105 p-5 rounded-2xl flex flex-row gap-4">
            {children}
        </div>
    );
}