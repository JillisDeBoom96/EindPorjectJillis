function Button({text, disabled}){
    return(
        <button type="button" disabled={disabled} onClick={()=> console.log({text})}><b> {text} </b></button>

    )
}
export default Button;