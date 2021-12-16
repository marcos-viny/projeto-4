import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <>
        <div className="flex justify-center bg-slate-700 h-screen">
            <div className="teste w-1/2 bg-red-500 h-96 mt-10">
            <div className="flex justify-center font-bold text-5xl">
            <h1>
                Not Found
            </h1>
            </div>
           <div className=" flex
             justify-center ">
           <Link to="/admin/home">
          <button
            className="
             hover:bg-blue-400 
             duration-500
             rounded-md
             p-2"
          >
            <div className="ml-2">Home</div>
          </button>
        </Link>
           </div>
            </div>
        </div>
        </>
    );
};