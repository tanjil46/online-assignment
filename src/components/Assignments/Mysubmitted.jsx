import PropTypes from 'prop-types';

const Mysubmitted = ({match}) => {

const{mark,title,examMark,statusSecond,feedBack}=match






    return (
        <div>
            <div className="card  bg-slate-700 text-primary-content">
  <div className="card-body">
    <h2 className="card-title text-center">{title}</h2>
    <p className="border-white border p-4 rounded-lg">FeedBack:{feedBack}</p>
    <div className="card-actions justify-end">
      <p className="text-lg font-bold">Mark:<span className="text-xl text-yellow-600">{mark}</span></p>
      <p className="text-lg font-bold">Got Mark:<span className="text-xl text-green-600">{examMark}</span></p>
    </div>
   
        <p className='text-center text-red-600 text-lg font-bold'>Status:<span className='text-green-600 text-xl'>{statusSecond}</span></p>
   
  </div>
</div>
        </div>
    );
};


Mysubmitted.propTypes={
    match:PropTypes.object,
        
        
     }
export default Mysubmitted;