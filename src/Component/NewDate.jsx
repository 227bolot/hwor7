
function formatDate(date){
return date.toLocaleDateString()
}


function NewDate(props){
    return(
        <div >
       {formatDate(props.date)}
        </div>
    )
}
export default NewDate