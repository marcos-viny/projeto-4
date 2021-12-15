import Imagem3 from "../../../asseds/imagens/imagem3.png";
import HeaderMenu from "../../../componentes/headerMenuNav";

export default function Usuario(){
    
    return(
        <>
        <div>
            <HeaderMenu nome="Usuario"/>
          </div>
          <div className="flex items-center justify-center">
            <img src={Imagem3} alt=""/>
          </div>
        </>
    );
};