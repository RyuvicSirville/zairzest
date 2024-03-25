import login from '/images/login.png'
import glogin from '/images/glogin.png'
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate()

    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-screen h-screen">
            <div class=" bg-[url('/home/rs/RsFullStack/RSzairzest/zairzest/public/images/signin.png')] w-full h-full bg-no-repeat bg-cover">
                <div class="grid grid-rows-3 h-full">
                    <div class="row-start-2 row-end-3">
                        <div class="grid grid-cols-6">
                            <div class="col-start-2 col-end-6">
                                <div class="font-sans text-gray-100 text-[37px] ">
                                    Experience the Future Tech with zairza
                                </div>
                                <div class="font-sans text-gray-100 text-sm ">
                                    Release all your stress with the exciting Tech and Fun events in the most awaited fest . Zairzest 3.0 presented by Zairza.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-6">
                <div class="col-start-2 col-end-6">
                    <div class="grid grid-rows-8 h-full">
                        <div class="row-start-3 row-end-4 ">
                            <div class="font-sans  text-[30px]">Experience the Future Tech</div>
                            <div>Register for Zairzest 3.0</div>
                        </div>

                        <div class="row-start-4 row-end-5">


                            <TextField
                                fullWidth="true"
                                id="outlined-basic"
                                label="Enroll Name"
                                variant="outlined"
                            />
                        </div>
                        <div class="row-start-5 row-end-6">

                            <TextField
                                fullWidth="true"
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                variant="outlined"
                            />

                        </div>
                        <div class="row-start-6 row-end-7">
                            <div>Don’t remember Password ? Reset Password</div>
                            <div>Not a Member Yet ? <button onClick={() => { navigate("/signup") }} >Sign Up</button></div>
                            <br></br>
                            <div class="grid grid-cols-2">
                                <button onClick={() => { navigate("/signin") }} class="col-span-1"><img class="max-w-[100px]" src={login}></img></button>
                                <button onClick={() => { navigate("/signin") }} class="col-span-1"><img class="max-w-[130px]" src={glogin}></img></button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
export default Signin