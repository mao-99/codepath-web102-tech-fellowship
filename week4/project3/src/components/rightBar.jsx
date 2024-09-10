export default function RightBar({banned}){

    return (
        <section className='w-1/5 bg-white text-black'>
        {Object.entries(banned).map(([key, value], ind) => {
            return (
            <div key={ind}>
                <h3 className="font-bold">{key}</h3>
                {value.map((ban, index) => (
                <button key={index} className="text-white m-2">{ban}</button>
                ))}
            </div>
            );
        })}
        </section>
    )
}