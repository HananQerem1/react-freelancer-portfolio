function About(){
    return<>
        <section className="bg-bg-secondary py-15 w-full">
            <div className="column-center gap-4 w-[80%] center mx-auto">
                <div className="column-center gap-3 w-full">
                    <h2 className="text-primary">about</h2>
                    <div className="center gap-1 xs:gap-3 w-[50%] xs:w-[45%] sm:w-[40%] lg:w-[35%] xl:w-[25%]">
                        <div className="h-1 bg-primary w-full"></div>
                        <img src="./src/assets/icons/star-white.svg" className='size-6 xs:size-8'/>
                        <div className="h-1 bg-primary w-full"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-left xs:w-[80%]">
                    <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
                <button className="border border-primary px-4 py-2 rounded-xl flex gap-2">
                    <img src="./src/assets/icons/download.svg" className="size-5"/>
                    free downlaod!
                </button>
            </div>
        </section>
    </>
}
export default About;