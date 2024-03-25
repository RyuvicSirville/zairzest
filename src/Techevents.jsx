import Appbar from "./Appbar"
import Contact from "./Contact"
import tech1 from '/images/tech1.png'
import tech2 from '/images/tech2.png'
import tech3 from '/images/tech3.png'
import tech4 from '/images/tech4.png'
import tech5 from '/images/tech5.png'
import tech6 from '/images/tech6.png'
import { Card } from "./Card"
const EVENTS = [{ img1: tech1, title: "Dig The Web" }, { img1: tech2, title: "CP Rush" }, { img1: tech3, title: "Robo Soccer" }, { img1: tech4, title: "Idea-thon" }, { img1: tech5, title: "H2GO" }, { img1: tech6, title: "Design X AI" }]
function Techevents() {
    return (
        <div>
            <div class="bg-black "><Appbar /></div>

            <div class="max-h-[4000px] mx-auto max-w-[1200px]">
                <div class="py-5 px-10 font-sans text-[50px]">Tech Events</div>
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
export default Techevents