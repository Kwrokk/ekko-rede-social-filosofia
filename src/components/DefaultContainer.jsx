export default function DefaultContainer({ children }) {
    return (
        <div className="sm:w-lg md:w-md lg:w-300 h-200 grid grid-flow-row gap-5 mt-5 rounded-2xl m-auto p-5 border justify-items-center bg-[#f6f4f0] content-center border-black text-black">
            {children}
        </div>
    );
}