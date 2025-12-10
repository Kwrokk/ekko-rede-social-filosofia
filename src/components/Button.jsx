export default function Button({ children, classname, onClick }) {
    return (    
        <div className={`my-5 rounded-2xl p-2 text-center font-bold ${classname}`} onClick={() => onClick()}>
            {children}
        </div>
    );
}