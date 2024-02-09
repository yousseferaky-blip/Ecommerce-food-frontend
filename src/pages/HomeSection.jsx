import img1 from "../assets/amaranthus 1 bunch - vegetables.jpg";
import img2 from "../assets/baby kiwi - fruits.jpg";
import img3 from "../assets/basmati-rice-png.png";
import img4 from "../assets/beetroot - vegetables.jpg";

const HomeSection = () => {
  return (
    <div className="md:flex gap-4 py-2 ">

      <div className="md:w-1/2">
        <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
          <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
            className="h-7"
          />
        </div>
        <h2 className="text-4xl md:text-7xl font-bold py-3">
          The Fasted Delivery in{" "}
          <span className="text-red-600 text-">Your Home</span>
        </h2>
        <p className="py-3 text-base ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
          Order Now
        </button>
      </div>

      <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
       
        <div className=" bg-white shadow-md p-2 rounded min-w-[150px]">
          <div className="w-40 min-h-[150px]">
            <img src={img1} className="h-full w-full" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
              amaranthus 1 bunch
            </h3>
            <p className="text-center text-slate-500  font-medium">vegetable</p>
            <p className="text-center font-bold">
              <span className="text-red-500">₹</span>
              <span>20</span>
            </p>
          </div>
        </div>

        <div className=" bg-white shadow-md p-2 rounded min-w-[150px]">
          <div className="w-40 min-h-[150px]">
            <img src={img2} className="h-full w-full" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            baby kiwi
            </h3>
            <p className="text-center text-slate-500  font-medium">fruits</p>
            <p className="text-center font-bold">
              <span className="text-red-500">₹</span>
              <span>65</span>
            </p>
          </div>
        </div>

        <div className=" bg-white shadow-md p-2 rounded min-w-[150px]">
          <div className="w-40 min-h-[150px]">
            <img src={img3} className="h-full w-full" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            rice
            </h3>
            <p className="text-center text-slate-500  font-medium">vegetable</p>
            <p className="text-center font-bold">
              <span className="text-red-500">₹</span>
              <span>102</span>
            </p>
          </div>
        </div>

        <div className=" bg-white shadow-md p-2 rounded min-w-[150px]">
          <div className="w-40 min-h-[150px]">
            <img src={img4} className="h-full w-full" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
            vegetable
            </h3>
            <p className="text-center text-slate-500  font-medium">vegetable</p>
            <p className="text-center font-bold">
              <span className="text-red-500">₹</span>
              <span>50</span>
            </p>
          </div>
        </div>


      </div>

    </div>
  );
};

export default HomeSection;
