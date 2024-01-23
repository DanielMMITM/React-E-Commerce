import './Footer.css'
import fb from '/src/assets/icons/facebook.png';
import x from '/src/assets/icons/X.png';
import lk from '/src/assets/icons/Linkedin.png';
import ig from '/src/assets/icons/insta.png';

export const Footer = () => {
    return (
        <footer className="footer mt-4">
            <div className='row footer-info'>
                <div className='footer-logo mt-2 col-12'>
                    <h2>Cantera Digital SHOP</h2>
                </div>
                <div className='d-flex footer-containers row mb-5'>
                    <div className='footer-element col-6 col-md-3 align-items-center'>
                        <span className='fooTitle'>RESOURCES</span>
                        <span className='fooTitle'>FAQ</span>
                        <span className='fooTitle'>SUBMIT A TICKET</span>
                    </div>
                    <div className='footer-element col-6 col-md-3 align-items-center'>
                        <span className='fooTitle'>SERVICES</span>
                        <span className='fooTitle'>SUBSCRIPTION</span>
                    </div>
                    <div className='footer-element col-6 col-md-3 align-items-center'>
                        <span className='fooTitle'>AFFILIATES</span>
                        <span className='fooTitle'>WIKI</span>
                        <span className='fooTitle'>SHOWCASE</span>
                    </div>
                    <div className='footer-element col-6 col-md-3 align-items-center'>
                        <span className='fooTitle'>ABOUT US</span>
                        <span className='fooTitle'>shop@cantera.com</span>
                        <span className='fooTitle'>(443) 4-32-12-31</span>
                        <span className='fooTitle'>(443) 3-12-34-56</span>
                    </div>
                </div>
            </div>
            <div className='socials'>
                <div className='containerLogos'>
                    <img src={fb} className='socialLogo' />
                    <img src={x} className='socialLogo' />
                    <img src={lk} className='socialLogo' />
                    <img src={ig} className='socialLogo' />
                </div>
                <h3 className='copyright'>©Copyrigth All Rights Reserved. 2024. Dev Edgar</h3>
            </div>
        </footer>
    );
};

export default Footer;
