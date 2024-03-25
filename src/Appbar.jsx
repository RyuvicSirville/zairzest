import { useNavigate } from "react-router-dom";
import Group7538 from '/images/Group7538.png'

function Appbar() {
  const navigate = useNavigate()
  return (
    <div >

      <>
        <div class="flex flex-row">
          <div class="basis-3/4	">
            <button onClick={() => { navigate("/") }} class="  text-gray-100 font-semibold py-10 px-20  ">
              <img src={Group7538} width={150} height={150} alt="zairzaLogo Image" />
            </button>
          </div>
          <div class="basis-1/4">
            <div class="flex flex-row">
              <div class="basis-1/3">
                <button onClick={() => { navigate("/aboutus") }} class="  text-gray-100 font-semibold py-8 px-4  ">
                  About Us
                </button>
              </div>
              <div class="basis-1/3">
                <button onClick={() => { navigate("/signup") }} class="  text-gray-100 font-semibold py-8 px-4  ">
                  Register
                </button>
              </div>
              <div class="basis-1/3">
                <button onClick={() => { navigate("/signin") }} class="  text-gray-100 font-semibold py-8 px-4  ">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  );
}


export default Appbar