import Appbar from "./Appbar"
import Contact from "./Contact"
import team1 from '/images/team1.png'
import team2 from '/images/team2.png'
import team3 from '/images/team3.png'
import team4 from '/images/team4.png'
function Aboutus(){
    return (
        <div>
            <div class="bg-black w-screen"><Appbar/></div>
            
            <div class="py-10 place-items-centre grid grid-cols-12 w-screen">
                <div class="col-start-2 col-end-12 ">
                <div class="  font-sans text-[50px]">Team full of enthusiasm   
                </div>
                <div class="  font-sans text-[50px]">and creativity   
                </div>
                <div class=" py-10 text-[25px]">A society, a club, a family, Zairza is the premiere technical club of the college, pushing the boundaries of innovation in the field of Robotics, Software, and Design. We firmly believe in our motto “Wonder, Think, Create” and strive forward to make it a reality. The club was started in 2005 and was formally inducted as a central club of the college in 2007. Since its inception, the club members have worked tirelessly and also achieved numerous laurels in a variety of fields. The aim we hold is to provide students the right direction to walk in their career with their utmost ability gained through the regular sessions that are held for the students. With your right skills, we provide internship offers that give a real-time experience at an industry level and help you know your true potential. What’s more interesting is the location of where we are i.e. the center of attraction of the college which is the SAC area that allows students to access their needs easily.
                </div>
                <div class=" place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                    <div><img src={team1}></img></div>
                    <div><img src={team2}></img></div>
                    <div><img src={team3}></img></div>
                    <div><img src={team4}></img></div>

                </div>
                </div>
                </div>  
                <div><Contact/></div>          
        </div>
    )
}
export default Aboutus