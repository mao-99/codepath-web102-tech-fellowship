import {Outlet} from 'react-router-dom'
import LeftBar from './leftBar'
import RightBar from './rightBar'

export default function Layout({cats, banned}) {

    return (
        <main className='flex flex-row justify-between w-full h-full'>
           {/* <section className='w-1/6 bg-white my-20'>{
            cats.map
           }</section>  */}
        </main>
    )
}