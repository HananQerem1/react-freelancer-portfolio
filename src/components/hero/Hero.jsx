import avatarIcon from "../../assets/icons/avatar.svg";
import starWhiteIcon from "../../assets/icons/star-white.svg";

function Hero(){
    return<>
        <section className="bg-bg-secondary column-center gap-4 py-15">
            <div className="w-[40%] md:w-[30%] lg:w-[20%]"><img src={avatarIcon} /></div>
            <h1>start bootstrap</h1>
            <div className="center gap-1 xs:gap-3 w-[50%] xs:w-[45%] sm:w-[40%] lg:w-[35%] xl:w-[25%]">
                <div className="h-1 bg-primary w-full"></div>
                <img src={starWhiteIcon} className='size-6 xs:size-8'/>
                <div className="h-1 bg-primary w-full"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </section>
    </>
}
export default Hero;