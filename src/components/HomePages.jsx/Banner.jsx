import BAnner from '../img/pngtree-Bnn.jpg'

const Banner = () => {



    const bannerStyle={
    
        backgroundImage:`url(${BAnner})`
    }






    return (
        <div className=''>
            <div className="hero min-h-screen" style={bannerStyle}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Make Your Assignment Best</h1>
      <p className="mb-5">Try To Make An Unique Assigment .Make Sure Yue are Unique</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;