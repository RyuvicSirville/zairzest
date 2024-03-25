import zairzarobo from '/images/zairzarobo.png'
import hello from '/images/hello.png'


function Data() {

  return (
    <div>
      <div class='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-screen '>
        <div class="col-span-1  ">
          <div class="grid grid-cols-4">
            <img class='col-start-2 col-end-4 min-w-[400px] ' src={zairzarobo}></img>
          </div>
        </div>
        <div class="col-span-1">
          <div class="grid grid-cols-12">
            <div class="grid grid-rows-2 col-start-2 col-end-12 py-20">
              <div class="row-start-1 row-end-2 py-12"><img src={hello}></img></div>
              <div class="row-start-2"><div class='text-x1 font-semibold '>Zest. For. Tech.</div>
                <div>'The best way to live the future is to create it.’ Moving on from the safari around the tech forest, we now bring you the city of tech. Experience the new future with us. We shall lead you to explore through the suburb of the cybercity, to drive into various tech stacks, dev branches, recursion, trees and languages like firefox and python. The Best is yet to come. Stay tuned for something awesome!.</div>
              </div></div></div>
        </div>
      </div>

    </div>
  );
}
export default Data