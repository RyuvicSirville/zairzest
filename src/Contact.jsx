import twitter from '/images/twitter.png'
import mail from '/images/mail.png'
import instagram from '/images/instagram.png'
import github from '/images/github.png'
import zairzaL from '/images/zairzaL.png'

function Contact() {
    return (
        <div class="bg-black ">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div class="col-start-1 col-end-4">
                    <div class="px-[100px] py-10">
                        <div class="text-[50px] text-gray-100">
                            Want to Know
                        </div>
                        <div class="text-[50px] text-gray-100">
                            about us ?
                        </div>
                        <div class="text-[25px] text-gray-100">
                            Come and know more about Zairza and join our community to experience such more amazing stuffs.
                        </div>
                        <div class="py-10 text-[20px] text-gray-100">
                            OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha. +91 7205883336
                        </div>
                    </div>
                </div>
                <div class="col-span-1 px-10 py-[190px]">
                    <div class="grid grid-rows-2 max-w-[200px] ">
                        <div class="grid grid-cols-4 gap-5 ">
                            <div class="cols-span-1 max-w-[50px] ">
                                <img src={twitter}></img>
                            </div>
                            <div class="cols-span-1 max-w-[50px]">
                                <img src={mail}></img>
                            </div>
                            <div class="cols-span-1 max-w-[50px]">
                                <img src={instagram}></img>
                            </div>
                            <div class="cols-span-1 max-w-[50px]">
                                <img src={github}></img>
                            </div>
                            <div class="py-12 col-span-3 text-[25px] text-gray-100">
                                Powered By
                            </div>
                            <div class="py-12"><img src={zairzaL}></img> </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact 