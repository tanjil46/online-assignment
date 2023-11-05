import createback from '../img/12.jpg'

const CreateAssingment = () => {


    const backStyle={
    
        backgroundImage:`url(${createback})`
    }







    return (
        <div className=' bg-cover bg-center h-screen p-12' style={backStyle}>
            
            <div className="card lg:card-side">
<div className="">

<p className="text-3xl font-bold text-white">Lets Make A Unique Assignment</p>
<h1>Studying online has become an increasingly popular choice for learners of all ages and backgrounds. The convenience and flexibility of online education allow individuals to pursue their educational goals from the comfort of their own homes or any location with an internet connection. This approach to learning opens up a world of opportunities, enabling students to access a wide range of courses and degree programs, often from prestigious institutions, that might not have been accessible otherwise. </h1>

</div>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>









        </div>
    );
};

export default CreateAssingment;