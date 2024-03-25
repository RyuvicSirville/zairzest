import Appbar from './Appbar';
import Data from './Data';
import Contact from './Contact';
import { Events } from "./Events";
import { Intro } from "./Intro";


function HomeReg() {
    
    return (
        <>

            <div class="grid grid-row-4 ">
                <div class="grid-span-1">
                    <div class="w-full h-full bg-[url('/home/rs/RsFullStack/RSzairzest/zairzest/public/images/home.png')] bg-no-repeat bg-cover">
                        <Appbar />
                        <div><Intro /></div>
                    </div>
                </div>
                <div class="grid-start-2">
                    <Data />
                </div>
                <div class=" grid-start-3 max-h-[1800px] mx-auto max-w-[1200px]">
                    <Events />
                </div>
                <div class="grid-start-3">
                    <Contact />
                </div>
            </div>



        </>


    );

}

export default HomeReg