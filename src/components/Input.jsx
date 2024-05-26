const Input = ({label,onChange,value}) =>{
    const camelCase = (label) => {
        return label.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index == 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    return <p>
        <label>{label}</label>
        <input type="number" required value={value} onChange={(event)=> onChange(camelCase(label),event.target.value)}></input>
    </p>
}

export default Input;