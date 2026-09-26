import starIcon from "../../assets/icons/star.svg";
import cabinImg from "../../assets/imgs/cabin.webp";
import cakeImg from "../../assets/imgs/cake.webp";
import circusImg from "../../assets/imgs/circus.webp";
import gameImg from "../../assets/imgs/game.webp";
import safeImg from "../../assets/imgs/safe.webp";
import submarineImg from "../../assets/imgs/submarine.webp";

function Portfolio(){
    return <>
        <section className="container column-center gap-10 py-15 w-full">
            <div className="column-center gap-3 color-secondary w-full">
                <h2 className="text-secondary">portfolio</h2>
                <div className="center gap-1 xs:gap-3 w-[50%] xs:w-[45%] sm:w-[40%] lg:w-[35%] xl:w-[25%]">
                    <div className="h-1 bg-secondary w-full"></div>
                    <img src={starIcon} className='size-6 xs:size-8'/>
                    <div className="h-1 bg-secondary w-full"></div>
                </div>
            </div>
            <div className="card-grid">
                <div className="card-img">
                    <img src={cabinImg} />
                </div>
                <div className="card-img">
                    <img src={cakeImg} />
                </div>
                <div className="card-img">
                    <img src={circusImg} />
                </div>
                <div className="card-img">
                    <img src={gameImg} />
                </div>
                <div className="card-img">
                    <img src={safeImg} />
                </div>
                <div className="card-img">
                    <img src={submarineImg} />
                </div>
            </div>
        </section>
    </>
}
export default Portfolio;
