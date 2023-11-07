
import PropTypes from 'prop-types';
const FeedbackSecond = ({feed}) => {
const{feedbackDate,feedbackTitle,feedbackDescription,feedbackAuthor}=feed




    return (
        <div>
            

            <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{feedbackTitle}</h2>
    <p>{feedbackDescription}.</p>
    <div className="card-actions justify-end">
     <p className=''>{feedbackDate}</p>
     <p className=''>{feedbackAuthor}</p>
    </div>
  </div>
</div>







        </div>
    );
};

FeedbackSecond.propTypes={
    feed:PropTypes.object,
        
        
     }
      

export default FeedbackSecond;