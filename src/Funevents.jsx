import Appbar from "./Appbar"
import Contact from "./Contact"
import tech7 from '/images/tech7.png'
import tech8 from '/images/tech8.png'
import tech9 from '/images/tech9.png'
import tech10 from '/images/tech10.png'
import { Card } from "./Card"
const EVENTS = [{ img1: tech7, title: "Dig The Web" }, { img1: tech8, title: "CP Rush" }, { img1: tech9, title: "Robo Soccer" }, { img1: tech10, title: "Idea-thon" }]
function Funevents() {
    return (
        <div>
            <div class="bg-black "><Appbar /></div>

            <div class="max-h-[4000px] mx-auto max-w-[1200px]">
                <div class="py-5 px-10 font-sans text-[50px]">Fun Events</div>
                <div class="max-w-[1500px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-[20px]">
                    {EVENTS.map(event => <div class="place-self-center">
                        <Card
                            img1={event.img1}
                            title={event.title}
                        ></Card>
                    </div>)}

                </div>
                <div >

                </div>

            </div>
            <div class="maz-h-[300px]"><Contact /></div>
        </div>

    )
}
export default Funevents