function TextField({ type, id, placeholder, onChange, isTextArea=false }) {
    return isTextArea ? (
        <textarea 
            className="form-control" 
            id={id} 
            placeholder={placeholder} 
            onChange={onChange}
            rows="5" // Adjust number of rows as needed
        />
    ) : (
        <input 
            type={type} 
            className="form-control" 
            id={id} 
            placeholder={placeholder} 
            onChange={onChange}
        />
    );
}


export default TextField;