export default function Event(props) {
    return (
        <>
            <td style={{'backgroundColor': props.color}}>
                <h5>{props.event}</h5>
                <p>{props.location}</p>
            </td>
        </>
    )
}