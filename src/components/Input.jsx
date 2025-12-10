export default function Input({ label, id, type, onChange, required = false }) {
    return (
        <div className="grid grid-flow-row gap-1">
            <div className="flex start-0">
                <label htmlFor={id}>{label}{required && <span className="text-red-600">*</span>}</label>
            </div>
            {
                type != "textarea" && type != "select" &&
                <input type={type} id={id} onChange={(e) => onChange(e.target.value)} required={required} className="border bg-white border-[#222222] rounded-md" />
            }

            {type == "textarea" && <textarea id={id} onChange={(e) => onChange(e.target.value)} required={required} className="border border-[#222222] rounded-md"></textarea>}

        </div>
    );
}