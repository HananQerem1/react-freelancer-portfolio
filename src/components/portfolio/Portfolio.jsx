function Portfolio(){
    return <>
        <section className="container column-center gap-10 py-15 w-full">
            <div className="column-center gap-3 color-secondary w-full">
                <h2 className="text-secondary">portfolio</h2>
                <div className="center gap-1 xs:gap-3 w-[50%] xs:w-[45%] sm:w-[40%] lg:w-[35%] xl:w-[25%]">
                    <div className="h-1 bg-secondary w-full"></div>
                    <img src="./src/assets/icons/star.svg" className='size-6 xs:size-8'/>
                    <div className="h-1 bg-secondary w-full"></div>
                </div>
            </div>
            <div className="card-grid">
                <div className="card-img">
                    <img src="./src/assets/imgs/cabin.webp" />
                </div>
                <div className="card-img">
                    <img src="./src/assets/imgs/cake.webp" />
                </div>
                <div className="card-img">
                    <img src="./src/assets/imgs/circus.webp" />
                </div>
                <div className="card-img">
                    <img src="./src/assets/imgs/game.webp" />
                </div>
                <div className="card-img">
                    <img src="./src/assets/imgs/safe.webp" />
                </div>
                <div className="card-img">
                    <img src="./src/assets/imgs/submarine.webp" />
                </div>
            </div>
        </section>
    </>
}
export default Portfolio;