import HeaderMenu from "../../../componentes/headerMenuNav";
import Imagem4 from "../../../asseds/imagens/imagem4.jpg";

export default function Produtos(){
    return(
       <>
       <div>
            <HeaderMenu nome="Produtos"/>
          </div>
          <div className="flex items-center justify-center ">
            <img src={Imagem4} alt=""/>
          </div>
       </>
    );
};