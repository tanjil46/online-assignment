
import PropTypes from 'prop-types';

const FeatureCard = ({feature}) => {

 const{img,assignment}=feature;


  





    return (
        <div className='my-4 lg:p-6' >



   <div className="card ">
  <figure><img className='lg:w-[300px] w-full h-[200px] rounded-lg' src={img}alt="assigment" /></figure>
  <div className="">
    <h2 className=" text-center text-white font-bold">{assignment}</h2>
    
  </div>
</div>





        </div>
    );
};



FeatureCard.propTypes={
    feature:PropTypes.object,
        
        
     }
      




export default FeatureCard;