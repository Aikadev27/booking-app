"use client";
import Link from "next/link";

export interface IDestinationsProps {}

export default function Destinations(props: IDestinationsProps) {
  const canTho: string = encodeURIComponent("Cần Thơ");
  const daNang: string = encodeURIComponent("Đà Nẵng");
  const daLat: string = encodeURIComponent("Đà Lạt");
  const vungTau: string = encodeURIComponent("Vũng Tàu");
  const nhaTrang: string = encodeURIComponent("Nha Trang");
  return (
    <section>
      <div className="grid grid-cols-10 gap-3 mx-1">
        <div
          data-aos="fade-up"
          className="col-span-5 relative transition duration-300 ease-in-out hover:opacity-90"
        >
          <Link href={`hotel/${canTho}`} className="block w-full">
            <img
              src="https://statics.vinpearl.com/cantho_1661238771.jpg"
              alt="Can Tho"
              className="h-[100px] xl:h-[300px] object-cover rounded-xl "
            />
            <div className="absolute top-1 left-1 flex gap-1 ">
              <h3 className="text-white text-sm xl:text-base font-bold">
                CAN THO
              </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png"
                alt="VN Flag"
                className="xl:w-[30px] mt-1 xl:h[30px] w-[15px] h-[15px] object-cover rounded-[4px]"
              />
            </div>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          className="col-span-5 relative transition duration-300 ease-in-out hover:opacity-90"
        >
          <Link href={`/hotel/${daNang}`} className="block w-full">
            <img
              src="https://res.klook.com/image/upload/fl_lossy.progressive,w_800,c_fill,q_85/destination/ur2mrg23d91mex03l4mw.jpg"
              alt="Da Nang"
              className="h-[100px] xl:h-[300px] object-cover rounded-xl w-full"
            />
            <div className="absolute top-1 left-1 flex gap-1 ">
              <h3 className="text-white text-sm xl:text-base font-bold">
                DA NANG
              </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png"
                alt="VN Flag"
                className="xl:w-[30px] mt-1 xl:h[30px] w-[15px] h-[15px] object-cover rounded-[4px]"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-9 gap-2 mt-3">
        <div
          data-aos="fade-up"
          className="col-span-3 relative transition duration-300 ease-in-out hover:opacity-90"
        >
          <Link href={`/hotel/${nhaTrang}`} className="block w-full">
            <img
              src="https://sakos.vn/wp-content/uploads/2023/04/nha-trang-1.jpg"
              alt="Nha Trang"
              className="h-[100px] xl:h-[300px] object-cover rounded-xl "
            />
            <div className="absolute top-1 left-1 flex gap-1 ">
              <h3 className="text-white text-sm xl:text-base font-bold">
                NHA TRANG
              </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png"
                alt="VN Flag"
                className="xl:w-[30px] mt-1 xl:h[30px] w-[15px] h-[15px] object-cover rounded-[4px]"
              />
            </div>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          className="col-span-3 relative transition duration-300 ease-in-out hover:opacity-90"
        >
          <Link href={`/hotel/${daLat}`} className="block w-full">
            <img
              src="https://ik.imagekit.io/tvlk/blog/2023/01/canh-dep-da-lat-1.jpg?tr=dpr-2,w-675"
              alt="Da Lat"
              className="h-[100px] xl:h-[300px] object-cover rounded-xl "
            />
            <div className="absolute top-1 left-1 flex gap-1 ">
              <h3 className="text-white text-sm xl:text-base font-bold">
                DA LAT
              </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png"
                alt="VN Flag"
                className="xl:w-[30px] mt-1 xl:h[30px] w-[15px] h-[15px] object-cover rounded-[4px]"
              />
            </div>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          className="col-span-3 relative transition duration-300 ease-in-out hover:opacity-90"
        >
          <Link href={`/hotel/${vungTau}`} className="block w-full">
            <img
              src="https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg"
              alt="Vung Tau"
              className="h-[100px] xl:h-[300px] object-cover rounded-xl "
            />
            <div className="absolute top-1 left-1 flex gap-1 ">
              <h3 className="text-white text-sm xl:text-base font-bold">
                VUNG TAU
              </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png"
                alt="VN Flag"
                className="xl:w-[30px] mt-1 xl:h[30px] w-[15px] h-[15px] object-cover rounded-[4px]"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
