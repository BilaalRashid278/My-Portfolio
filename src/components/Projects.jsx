import '../App.css';
import { useEffect, useState } from 'react';


const Projects = () => {
    const [apiData, setApiData] = useState({
        success: true,
        message: "All Projects is here",
        projects: [
            {
                image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
                projectName: "Todo App",
                description: "AI-powered platform for educators to create custom academic papers and tests, accessible both on the web and via a mobile app for on-the-go papers generation",
                skills: [
                    "HTML",
                    "CSS",
                    "JAVASCRIPT",
                    "NODE JS",
                    "EXPRESS JS",
                    "MONGO DB"
                ]
            }
        ]
    });
    useEffect(() => {
        fetch('http://localhost:3000/api/v1').then(res => res.json()).then(apiData => setApiData(apiData)).catch(err => console.error('Something went wrong in api' + err));
    });
    return (
        <div className='w-[80%] m-auto'>
            <div className="name text-center py-3" id='projects'>
                <h1 className="text-2xl md:text-5xl stylishFont linerColor">Projects</h1>
            </div>
            <div className='my-10'>
                <div className="card card-1 mb-7 w-[100%] flex flex-col-reverse lg:flex-row-reverse lg:border-r-2 border-b-slate-600">
                    {apiData.projects.map((value, index) => {
                        return (
                            <>
                                <div className="content w-[100%] xl:w-[50%] flex justify-center items-center">
                                    <div className='text-center w-[80%] md:w-[90%] py-7'>
                                        <h1 className='font-bold text-xl md:text-xl lg:text-2xl hover:underline cursor-pointer'>{value.projectName}
                                        </h1>
                                        <h6 className='text-xs py-2 md:text-sm lg:text-sm'>{value.description}</h6>
                                        <div className='my-2'>
                                            {value.skills.map((buttons, index) => {
                                                return (
                                                    <>
                                                        <button key={index} className='border mx-1 border-cyan-400 text-cyan-400 text-sm uppercase px-3 rounded-md hover:bg-cyan-400 hover:text-black font-semibold'>{buttons}</button>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div key={index} className="img w-[100%] xl:w-[50%]">
                                    <img className='w-[100%]' src={value.image} alt="img1" />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects
