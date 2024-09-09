import Card from "./card"
import { useState } from "react"

export default function Gallery () {
    const [games, setGames] = useState([
        {img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Stretford_Old_Trafford_1.jpg", title: "Man Utd vs Liverpool", stadium: "Old Trafford", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg/640px-Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg", title: "Liverpool vs Nottingham", stadium: "Anfield", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg/640px-Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg", title: "Liverpool vs West Ham", stadium: "Anfield", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Milano_-_stadio_Giuseppe_Meazza_-_202209050049.jpeg/640px-Milano_-_stadio_Giuseppe_Meazza_-_202209050049.jpeg", title: "AC Milan vs Liverpool", stadium: "San Siro", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg/640px-Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg", title: "Liverpool vs Bournemouth", stadium: "Anfield", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Molineux_Stadium%2C_Wolverhampton%2C_2018.jpg/640px-Molineux_Stadium%2C_Wolverhampton%2C_2018.jpg", title: "Wolves vs Liverpool", stadium: "Molineaux", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg/640px-Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg", title: "Liverpool vs Bologna", stadium: "Anfield", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/London_Selhurst_Park_crystal_palace_stadium_aerialview.JPG/640px-London_Selhurst_Park_crystal_palace_stadium_aerialview.JPG", title: "Crystal Palace vs Liverpool", stadium: "Selhurst Park", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg/640px-Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg", title: "Liverpool vs Chelsea", stadium: "Anfield", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Red_Bull_Arena_Panorama_cropped.jpg/640px-Red_Bull_Arena_Panorama_cropped.jpg", title: "RB Leipzig vs Liverpool", stadium: "Red Bull Arena", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/London_Emirates_Stadium_arsenal.jpg/640px-London_Emirates_Stadium_arsenal.jpg", title: "Arsenal vs Liverpool", stadium: "Emirates", link: "https://www.flashscore.com/match/z1q67ylB/#/match-summary"}
    ])

    const [colors, setColors] = useState([
        "#F8FCDA", "#E3E9C2", "#F9FBB2", "#7C6354", "#A5ABAF", "#484041", "#8B9EB7", "#373F47", "#16BAC5", "#995D81"
    ])

    return (
        <main className="gallery">
            {games.map((game, ind) => {
                return (
                    <Card props={game} key={ind} color={colors[Math.floor(Math.random() * colors.length)]} />
                )
            })}
        </main>
    )
}