import starWhiteIcon from "../../assets/icons/star-white.svg";
import downloadIcon from "../../assets/icons/download.svg";

function About(){
    return<>
        <section className="bg-bg-secondary py-15 w-full">
            <div className="column-center gap-10 w-[80%] center mx-auto">
                <div className="column-center gap-3 w-full">
                    <h2 className="text-primary">about</h2>
                    <div className="center gap-1 xs:gap-3 w-[50%] xs:w-[45%] sm:w-[40%] lg:w-[35%] xl:w-[25%]">
                        <div className="h-1 bg-primary w-full"></div>
                        <img src={starWhiteIcon} className='size-6 xs:size-8'/>
                        <div className="h-1 bg-primary w-full"></div>
                    </div>
                </div>
                <div className="grid-responsive-2 text-left xs:w-[80%]">
                    <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
                <button className="button-border flex gap-2">
                    <img src={downloadIcon} className="size-5"/>
                    free downlaod!
                </button>
            </div>
        </section>
    </>
}
export default About;