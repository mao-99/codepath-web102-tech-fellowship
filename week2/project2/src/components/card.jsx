export default function Card({content, color}) {

    return (
        <>
            <div className="card" style={{'backgroundColor': color}}>
                <p><strong>{content}</strong></p>
            </div>
        </>
    )
}