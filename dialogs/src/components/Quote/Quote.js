function Quote(props) {
    return(<div>
        <h2>Quote {props.page_number}</h2>
        <p><b>Quote prop: </b> '{props.quote}'.</p>
        <p><b>Author prop:</b> '{props.author}'</p>
    </div>)
}

export default Quote;

