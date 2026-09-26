function Footer(){
    return<>
        <footer className=" column-center bg-bg w-full">
            <div className="container grid-responsive-3 py-15">
                <div className="column-center gap-3">
                    <h3>location</h3>
                    <p>2215 John Daniel Drive <br/> Clark, MO 65243</p>
                </div>
                <div className="column-center gap-3">
                    <h3>around the web</h3>
                    <ul className="row-between gap-2">
                        <li>
                            <a className="anchor-border">
                                <img src="./src/assets/icons/facebook.svg" />
                            </a>
                        </li>
                        <li>
                            <a className="anchor-border">
                                <img src="./src/assets/icons/x.svg" />
                            </a>
                        </li>
                        <li>
                            <a className="anchor-border">
                                <img src="./src/assets/icons/linkedin.svg" />
                            </a>
                        </li>
                        <li>
                            <a className="anchor-border">
                                <img src="./src/assets/icons/medium.svg" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="column-center gap-3">
                    <h3>about freelancer</h3>
                    <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a>Start Bootstrap</a>.</p>
                </div>
            </div>
            <div className="py-5 bg-[#1a252f] w-full">
                <p>Copyright © Your Website 2023</p>
            </div>
        </footer>
    </>
}
export default Footer;