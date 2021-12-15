import Imagem1 from "../asseds/imagens/imagem1.png";
import HeaderMenu from "../componentes/headerMenuNav";

export default function Home(){
    return(
        <>
          <div>
            <HeaderMenu nome="Home"/>
          </div>
          <div className="flex items-center justify-center">
            <img src={Imagem1} alt=""/>
          </div>
        </>
    );
};