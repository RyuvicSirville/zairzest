import enrollnow from '/images/enrollnow.png'
export function Card(props){
    return(
        <div>
            <div class=" max w-[300px] max-h-[500px] grid grid-rows-6 shadow-lg">
                        <div class="row-start-1 row-end-5 overflow-hidden">
                            <img class="hover:scale-125" src={props.img1}></img>
                        </div>
                        <div class="row-start-5 row-end-6">
                            <div class="grid grid-cols-2">
                                <div class="place-self-center cols-span-1 text-2xl">{props.title}</div>
                                <div class="place-self-center cols-span-1 max-w-[200px] ">
                                    <img  src={enrollnow}></img>
                                    </div>
                            </div>
                        </div>
                        <div class=" row-start-6 ">
                            <div class="grid grid-cols-2">
                                <div class="place-self-center grid grid-rows-2">
                                    <div class="row-span-1">Date & Time</div>
                                    <div class="row-span-1">27 Apr-9:00AM</div>
                                </div>
                                <div class="place-self-center grid grid-rows-2">
                                    <div class="row-span-1">Venue</div>
                                    <div class="row-span-1">Sac Area</div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}