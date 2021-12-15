import { MdDashboard, MdProductionQuantityLimits } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function DashboardNav() {
  return (
    <div className="bg-gray-800 max-w-sm text-white z-auto">
      <div className="">
        <Link to="/admin">
          <button
            className="inline-flex
            flex-column
             items-center 
             hover:bg-blue-400 
             duration-500
             rounded-md
             p-2"
          >
            <MdDashboard />
            <div className="ml-2">Dashboard</div>
          </button>
        </Link>
      </div>

      <div>
        <Link to="/admin/usuario">
          <button
            className="inline-flex
            flex-column
            items-center 
            hover:bg-blue-400  
            duration-500
            rounded-md
            p-2"
          >
            <HiUserAdd />
            <div className="ml-2">Usuarios</div>
          </button>
        </Link>
      </div>

      <div className="">
        <Link to="/admin/produtos">
          <button
            className="inline-flex
                flex-column
                items-center 
                hover:bg-blue-400 
                duration-500
                rounded-md
                p-2"
          >
            <MdProductionQuantityLimits className="" />
            <div className="ml-2">Produtos</div>
          </button>
        </Link>
      </div>

      <div className="w-full border-t-2 block border-blue-600">
        <span></span>
      </div>

      <div>
        <button className="p-2 ml-4 text-color hover:text-red-500">
          opções
        </button>
      </div>

      <div className="">
        <Link to="/">
          <button
            className="inline-flex
            flex-column
             items-center 
             hover:bg-blue-400 
             duration-500
             rounded-md
             p-2"
          >
            <IoExitOutline className="" />
            <div className="ml-2">Sair</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
