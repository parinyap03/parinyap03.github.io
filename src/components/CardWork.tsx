
import bg from "../assets/computer.png";
const CardWork = () => {
  return (
    <>
      <div className=" bg-lime-400 group w-[300px] group overflow-hidden relative text-gray-50 h-72 rounded-2xl hover:duration-700 duration-700">
          <div className="flex justify-between p-[10px] w-full ">
            <div>date</div>
            <div className=" p-[5px] rounded-full bg-white w-fit cursor-pointer">
              git
            </div>
          </div>
          <img src={bg} alt="bg" className="w-full h-40  " />
       
        <div className="absolute w-full bg-gray-50 -bottom-14  p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
          <span className="text-gray-800 font-bold text-3xl mb-5">
           bname
          </span>

          <p className="text-neutral-800">desc</p>
        </div>
      </div>
    </>
  );
};

export default CardWork;
