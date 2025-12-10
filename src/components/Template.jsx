import Nav from "./Navigation";

export default function Template({ children }) {

    return (
        <div className="grid grid-cols-24 gap-0">
            <div className={`h-screen bg-[#f6f4f0] text-2xl col-span-1`}>
                <Nav />
            </div>
            <div className={`grid grid-cols-12 grid-flow-row px-10 grid-rows-9 text-white h-screen col-span-23  bg-gray-700 gap-5`}>
                {children}
            </div>
        </div>
    );
}