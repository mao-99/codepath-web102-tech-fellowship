export default function Card({props, color}) {
    return (
        <>
            <div className="card" style={{'backgroundColor': color}}>
                <img src={props.img} alt="placeholder" />
                <h3>{props.title}</h3>
                <h5>{props.stadium}</h5>
                <button><a href={props.link}>Go</a></button>
            </div>
        </>
    )
}