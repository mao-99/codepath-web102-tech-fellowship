export default function LeftBar({cats}) {
    
    return (
        <section   className='w-1/6 bg-white my-20 text-black overflow-y-auto'>
         {cats.map((cat, ind) => {
            return (
                <div key={ind}>
                    <img src={cat.url} alt={cat.breeds[0].name} />
                    <p>{cat.breeds[0].name}</p>
                </div>
            )
         })}
        </section>
    )
}