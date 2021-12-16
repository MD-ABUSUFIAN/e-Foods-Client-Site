import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './JoinTeam.css';


const JoinTeam = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container className="main-box mt-5">
            <h1 className="text-center p-3 fs-1 fw-bolder text-white main-box ">Join Our Team</h1>
            <div className="row ">

                {/* Join Team Article section */}

                <div className="col col-lg-6 col-md-6 col-sm-12 col-12 py-5 px-3 text-white fw-bolder align-item-justify">

                <div>
                <h1 className="pb-2 text-info">why not join our team?</h1>
                <p>
                When we started e-Foods, everybody asked us “Why?” They asked, “Why create another sandwich brand?” We answered, “Why not?” Why not use whole grains, organic ingredients, and organic grass-fed beef? Why not serve chutney and aioli and arugula and prosciutto? Why not post calorie counts and sodium? Why not be transparent about nutrutional information? Why not use 100% wind and solar power and compost in all locations? Why not use iPads and Mini Coopers and any other fun smart thing that makes our business run better? Why would you want to work or eat anywhere else? We wouldn’t.
                </p>
                <p>
                We are innovative, passionate sandwich creators and we’re looking for talented team members to ask all the “why nots” that will make our sandwiches and food more interesting, and our customer experience more über than ever.
                </p>
                <p>
                Benefits you ask? For our hourly team members we offer a very competitive pay rate, food at a steep discount, health insurance, paid sick leave, a commuter benefits, paid birthday off and a great team spirit. On average our hourly team members stay with us for nearly two years, way above the industry average.
                </p>
                
                
             
               
               
                </div>

                </div>




                    {/* Join Team From section  */}

            <div className="col col-lg-6 col-md-6 col-sm-12 col-12 py-5">

                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-danger fw-bolder ">Apply Now</h2>
                    <label className="text-warning fw-bolder mt-4">Name</label>
                    <input className='w-100 p-2 my-2 rounded' {...register("name", )} type="text" placeholder="Enter Your Name" />
                    <label  className="text-warning fw-bolder mt-2">Email</label>
                    <input className='w-100 p-2 mb-2 rounded' {...register("email")} type="email" placeholder="Enter Your Email" />
                    <label className="text-warning fw-bolder mt-2">Subject</label>
                    <input className='w-100 p-2 mb-2 rounded' {...register("subject")} type="text" placeholder="Enter Your Subject" />
                    <label className="text-warning fw-bolder mt-2">Message</label>
                    <textarea className='w-100 p-2 mb-2 rounded' {...register("message")} placeholder="Write Your Message" />
                  
                    <input className='w-100 p-2 rounded bg-primary border-0 text-white fw-bold' type="submit" value="SEND" />
                </form>
                </div>
            </div>

            </div>
        </Container>
    );
};

export default JoinTeam;