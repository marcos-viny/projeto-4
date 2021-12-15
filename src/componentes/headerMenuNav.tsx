import { useState } from "react";
import HeaderList from "./headerListNav";

import "./headerMenuNav.scss";
export default function headerMenu(props:any) {
  let [abrir, setAbrir] = useState(0);

  function toogle(e: any) {
    if (abrir === e) {
      setAbrir(0);
    } else {
      setAbrir(e);
    }
  }
  return (
    <div className=" box-border ">
      <div className="bg-blue-400 flex">
        <div
          className="p-4 w-full h-20 box-border inline-flex flex-column
             items-center mx-0 md:mx-6 "
        >
          <button
            type="button"
            className={abrir ? "iconActive testeActive" : ""}
            onClick={() => toogle(1)}
          >
            <div className="Teste-hover">
              <span className="hamburguer">
                <span className="hamburguer-1">
                  <span className="hamburguer-2">
                    <span className="hamburguer-3"></span>
                  </span>
                </span>
              </span>
              <span className="teste-1"></span>
            </div>
          </button>
          <div>
            <h1 className="font-semibold text-2xl ml-4">{props.nome}</h1>
          </div>
        </div>
      </div>
      <div>
        <header
          className={`mx-0 md:mx-10 ${
            abrir === 1 ? "Teste__nav" : "Teste__fechar"
          }`}
        >
          <HeaderList />
        </header>
      </div>
    </div>
  );
}
