import BAnner from '../img/1online_g.jpg'

const Banner = () => {



    const bannerStyle={
    
        backgroundImage:`url(${BAnner})`
    }






    return (
        <div className=''>
            <div className="hero min-h-screen" style={bannerStyle}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    
  </div>
</div>
        </div>
    );
};

export default Banner;