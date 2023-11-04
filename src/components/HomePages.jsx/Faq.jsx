

const Faq = () => {
    return (
        <div className="p-12 ">
             <p className="text-center my-5 font-bold text-xl">How can we <span className="text-pink-400 text-2xl">Help You</span></p>
            <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What is an Online Group-Study assignment?
  </div>
  <div className="collapse-content"> 
    <p>An Online Group-Study assignment is a collaborative learning activity where students come together to study a particular subject or topic.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  How do I choose a name for my Online Group-Study assignment?
  </div>
  <div className="collapse-content"> 
    <p>When choosing a name, consider making it descriptive and relevant to the subject or topic you will be studying. It should give participants a clear idea of the assignments focus.</p>
  </div>
</div>
<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  Can I change the name of my Online Group-Study assignment after creating it?
  </div>
  <div className="collapse-content"> 
    <p>It depends on the platform or system you are using. Some platforms allow you to change the assignment name, while others may require you to create a new assignment with a different name</p>
  </div>
</div>

<div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  What are some tips for creating an effective name for my Online Group-Study assignment?
  </div>
  <div className="collapse-content"> 
    <p>Make the name concise and informative. Include keywords related to the subject, course, or topic you will be studying. Avoid overly long or cryptic names.</p>
  </div>
</div>





        </div>
    );
};

export default Faq;