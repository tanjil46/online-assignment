

const SubmitUpdate = () => {







    
    return (
        <div>
            

            <form className='space-y-6'>


<div className="form-control">
<label className="label">
<span className="label-text font-bold text-white">Examinee Mark</span>
</label>
<label className="input-group">

<input type="number"  name="giveMark" className="input input-bordered w-full max-w-x " />
</label>
</div>



<div className="form-control">
<label className="label">
<span className="label-text font-bold text-white">Examinee Feedback</span>
</label>
<label className="input-group">

<textarea className="textarea textarea-bordered w-[300px]" name='back'></textarea>
</label>
</div>



<button className='btn ' type='submit'>Submit Mark</button>




</form>



   





        </div>
    );
};

export default SubmitUpdate;