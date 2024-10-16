function TextField({ type, id, placeholder, onChange, isTextArea=false }) {
    return isTextArea ? (
        <textarea 
            className="form-control" 
            id={id} 
            placeholder={placeholder} 
            onChange={onChange}
            rows="5"
            required
        />
    ) : (
        <input 
            type={type} 
            className="form-control" 
            id={id} 
            placeholder={placeholder} 
            onChange={onChange}
            required
        />
    );
}


export default TextField;