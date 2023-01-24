import Card from "../../ui/Card";
import "./Prizes.css";

export default function Prizes() {
  return (
    <Card>
      <div className="text-3xl text-white">Prizes Section</div>
      <div className="grid grid-cols-3 gap-10">
          <div className="w-full">
            <div className='card bg-slate-600 rounded-md h-80'>
              <div className="flex justify-center align-center">
              <img src="https://hackthisfall.tech/_nuxt/img/silver.3e9bbcb.svg" className="h-20 w-20" alt="" />
              </div>
              <div className="flex justify-center align-center bg-white rounded-md m-10 py-5">Second Prize</div>
              <div className="flex justify-center align-center text-5xl text-white">10K</div>
              <div className="flex justify-center align-center text-white">Winner!</div>
            </div>
          </div>
          

          <div className="w-full scale-125">
            <div className='card bg-slate-600 rounded-md h-80'>
              <div className="flex justify-center align-center">
                <img src="https://hackthisfall.tech/_nuxt/img/gold.e3b24e8.svg" className="h-20 w-20" alt="" />
              </div>
              <div className="flex justify-center align-center bg-white rounded-md m-10 py-5">First Prize</div>
              <div className="flex justify-center align-center text-5xl text-white">30K</div>
              <div className="flex justify-center align-center text-white">Winner!</div>
            </div>
          </div>


          <div className="w-full">
            <div className='card bg-slate-600 rounded-md h-80'>
              <div className="flex justify-center align-center">
              <img src="https://hackthisfall.tech/_nuxt/img/bronze.eb1941a.svg" className="h-20 w-20" alt="" />
              </div>
              <div className="flex justify-center align-center bg-white rounded-md m-10 py-5">Third Prize</div>
              <div className="flex justify-center align-center text-5xl text-white">5K</div>
              <div className="flex justify-center align-center text-white">Winner!</div>
            </div>
          </div>

      </div>
    </Card>
  );
}
