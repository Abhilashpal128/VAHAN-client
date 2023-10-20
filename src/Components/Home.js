import React from 'react'
import cardone from '../images/cardimg1.jpg'
import cardtwo from '../images/cardimg2.png'
import cardthree from '../images/cardimg3.webp'
import cardfour from '../images/cardimg5.webp'
import cardfive from '../images/cardimg6.jpg'
import cardsix from '../images/cardimg7.webp'

function Home({cab,handleclick}) {


  return (
    <div className='text-white'>
      <div className="row 1">
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-3 gap-4 py-3">
          {/* first card */}
          <div className="border-2 border-[#E63946] shadow-lg shadow-[#E63946]">
            <div className="h-[200px] m-2"><img src={cardone} alt='mini' className="h-[190px] w-full"/></div>
            <div className="h-[90px] pl-3">
            <h1 className="text-xl">Mini</h1>
            <p className="text-sm">Micro and Mini can seat upto 4 passengers and can accommodate up to 2-3 small size bags.</p>
            </div>
            <div className="h-[50px] pl-5 ">
                <div className="w-[100px] border-2 border-[#E63946] text-center rounded-lg h-[305x] shadow-md shadow-[#E63946] ">
                  <button onClick={()=>handleclick("mini")}>Book Now</button>
                </div>
            </div>
          </div>
          {/* second card */}
          <div className="border-2 border-[#E63946] shadow-lg shadow-[#E63946]">
            <div className="h-[200px] bg-white m-2"><img src={cardtwo} alt='sedan' className="h-[190px] w-full  "/></div>
            <div className="h-[90px] pl-3">
            <h1 className="text-xl">VAHAN Sedan</h1>
            <p className="text-sm">Prime Sedan can seat upto 4 passengers and can accommodate up to 3-4 medium size bags or 2 large bags.</p>
            </div>
            <div className="h-[50px] pl-5 ">
                <div className="w-[100px] border-2 border-[#E63946] text-center rounded-lg h-[305x] shadow-md shadow-[#E63946] ">
                  <button onClick={()=>handleclick("sedan")} >Book Now</button>
                </div>
            </div>
          </div>
          {/* third card */}
          <div className="border-2 border-[#E63946] shadow-lg shadow-[#E63946]">
            <div className="h-[200px] m-2"><img src={cardthree} alt='SUV' className="h-[190px] w-full"/></div>
            <div className="h-[90px] pl-3">
            <h1 className="text-xl">VAHAN SUV</h1>
            <p className="text-sm">Prime SUV can seat upto 6 passengers and can accommodate up to 3-4 medium size bags or 2 large bags.</p>
            </div>
            <div className="h-[50px] pl-5 ">
                <div className="w-[100px] border-2 border-[#E63946] text-center rounded-lg h-[305x] shadow-md shadow[#E63946] ">
                  <button onClick={()=>handleclick("suv")} >Book Now</button>
                </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="row2">
        <div className="max-w-[1320px] mx-auto grid grid-cols-3 gap-4 py-6">
          {/* first card */}
          <div className="border-2 border-[#E63946] shadow-lg shadow-[#E63946]">
            <div className="h-[200px] m-2"><img src={cardfour} alt='Scooty' className="h-[190px] w-full"/></div>
            <div className="h-[90px] pl-3">
            <h1 className="text-xl">VAHAN Scooty</h1>
            <p className="text-sm">scooter is for only one passanger and can accomodate upto 1-2 midium size bags.</p>
            </div>
            <div className="h-[50px] pl-5 ">
                <div className="w-[100px] border-2 border-[#E63946] text-center rounded-lg h-[305x] shadow-md shadow-[#E63946] ">
                  <button onClick={()=>handleclick("scooty")} >Book Now</button>
                </div>
            </div>
          </div>
          {/* second card */}
          <div className="border-2 border-[#E63946] shadow-lg shadow-[#E63946]">
            <div className="h-[200px] m-2"><img src={cardfive} alt='Bike' className="h-[190px] w-full"/></div>
            <div className="h-[90px] pl-3">
            <h1 className="text-xl">VAHAN Bike</h1>
            <p className="text-sm">VAHAN Bike is for to Reach more faster, Bike is for only one passanger with one small size bag.</p>
            </div>
            <div className="h-[50px] pl-5 ">
                <div className="w-[100px] border-2 border-[#E63946] text-center rounded-lg h-[305x] shadow-md shadow-[#E63946] ">
                  <button  onClick={()=>handleclick("bike")}>Book Now</button>
                </div>
            </div>
          </div>
          {/* third card */}
          <div className="border-2 border-[#E63946] shadow-lg shadow-[#E63946]">
            <div className="h-[200px] m-2"><img src={cardsix} alt='Rikshaw' className="h-[190px] w-full"/></div>
            <div className="h-[90px] pl-3">
            <h1 className="text-xl">VAHAN Rikshaw</h1>
            <p className="text-sm">VAHAN Rikshaw can seat upto 3 passengers and can accommodate up to 2-3 small size bags or 1 large size bag.</p>
            </div>
            <div className="h-[50px] pl-5 ">
                <div className="w-[100px] border-2 border-[#E63946] text-center rounded-lg h-[305x] shadow-md shadow-[#E63946] ">
                  <button onClick={()=>handleclick("rikshaw")} >Book Now</button>
                </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Home;
