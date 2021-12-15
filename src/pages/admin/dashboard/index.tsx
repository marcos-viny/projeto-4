import Imagem2 from "../../../asseds/imagens/imagem2.png";
import HeaderMenu from "../../../componentes/headerMenuNav";


export default function Dashboard(){
    
    return(
        <>
         <div>
            <HeaderMenu nome="Dashboard"/>
          </div>
          <div className="flex items-center justify-center">
            <img src={Imagem2} alt=""/>
          </div>
        </>
    );
};