

const ViewBtn = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://i.giphy.com/UQ1EI1ML2ABQdbebup.webp"
        width={50}
        alt="caticon"
        className="z-10"
      />
      <div className="mt-[-16px]  w-fit ">
        <button className="viewbtn w-fit px-5 py-2">My Work</button>
      </div>
    </div>
    
  );
};

export default ViewBtn;
