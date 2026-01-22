
import { aboutsec1 } from "@/data/homeData";

export default function ServiceSlider() {
 
  return (
    <section className="fix-bg p-7 text-center relative overflow-hidden">
     
      <div className="lg:px-28 md:px-20 sm:p-12 py-6 gap-y-4 flex flex-wrap justify-between items-stretch">
        {aboutsec1?.vision?.map((mission)=>(
        <div key={mission?.id} className="md:w-[48%] w-full p-4 bg-brown2 rounded-2xl hover:-translate-y-5 duration-300 bg-opacity-60 backdrop-blur-md">
          <div className="border p-4 sm:p-8 h-full text-center rounded-xl">
            <h4 className="sm:text-2xl text-xl font-bold text-yellow3 sm:mb-5 mb-3">{mission?.heading}</h4>
            <p className="text-white">{mission?.text}
            </p>
          </div>
        </div>
))}
      </div>
    </section>
  );
}
