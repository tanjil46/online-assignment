import LOGO from '../img/assing-logo.jpg'
const Footer = () => {







    return (
        <div>
            <footer className="footer p-10 bg-slate-500 text-white">
  <aside>
   <img className="w-[100px] rounded-lg" src={LOGO}></img>
    <p>Online Student Community.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>

<div className="">
  <footer className="footer footer-center p-4 bg-slate-600 text-white ">
  <aside>
    <p>Copyright © 2023 - All right reserved by Online Student community</p>
  </aside>
</footer>
  </div>
        </div>
    );
};

export default Footer;