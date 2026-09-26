import facebookIcon from "../../assets/icons/facebook.svg";
import xIcon from "../../assets/icons/x.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import mediumIcon from "../../assets/icons/medium.svg";

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
                                <img src={facebookIcon} />
                            </a>
                        </li>
                        <li>
                            <a className="anchor-border">
                                <img src={xIcon} />
                            </a>
                        </li>
                        <li>
                            <a className="anchor-border">
                                <img src={linkedinIcon} />
                            </a>
                        </li>
                        <li>
                            <a className="anchor-border">
                                <img src={mediumIcon} />
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