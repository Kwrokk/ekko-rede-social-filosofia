export default function Divider({ title }) {
    return (
        <div className="relative flex py-5 items-center">
            <div className="grow border-t border-gray-400"></div>
            {title &&
                <>
                    <div className="shrink mx-4 text-gray-400">{title}</div>
                    <div className="grow border-t border-gray-400"></div>
                </>
            }
        </div>
    );
}