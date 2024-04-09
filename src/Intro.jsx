
import zaiza from '/images/zaiza.png'
import registern from '/images/registern.png'
import { useNavigate } from "react-router-dom";
export function Intro() {
    const navigate = useNavigate()
    return (
        <div>
            <div class="grid grid-cols-2 ] w-screen">
                <div class="cols-start-1 cols-end-2">
                    <div class="grid grid-rows-3 max-h-[800px]">
                        <div class=" py-[50px] px-[100px] row-start-1 row-end-3">
                            <div class="text-gray-100 font-sans text-[min(4vw,3.8vh)]">Enter into Digital Playground with</div>

                            <img class="h-[min(2vw,3.5vh)]" src={zaiza}></img>
                            <div class=" py-10 text-gray-100 font-sans text-[min(2vw,3.5vh)]">
                                <div>Release all your stress with the exciting Tech and Fun events in the most awaited fest . Zairzest 2.0 presented by Zairza. </div>
                                <div></div>
                                <button onClick={() => { navigate("/signup") }} class=" row-start-4"><img class="h-[2vw]" src={registern}></img ></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}