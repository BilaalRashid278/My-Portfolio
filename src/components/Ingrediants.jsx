import '../App.css';
import img1 from '../assets/reponsive.jpg';
import img2 from '../assets/responsive.jpg';
import img3 from '../assets/seo.jpg';
import img4 from '../assets/ux.jpg';
import img5 from '../assets/pexels-photomix-company-106344.jpg';
import img6 from '../assets/rocket (2).jpg';
const Ingrediants = () => {
    return (
        <section className="w-[70%] m-auto">
            <div className="name text-center py-3" id='ingrediants'>
                <h1 className="text-2xl md:text-5xl stylishFont colorfull">Ingrediants</h1>
            </div>
            <div className="card card-1 mb-7 w-[100%] flex flex-col-reverse md:flex-row md:border-l-2 border-b-slate-600">
                <div className="content w-[100%] lg:w-[50%] flex justify-center items-center">
                    <div className='text-center w-[80%] md:w-[90%] py-7'>
                        <h1 className='font-bold text-xl md:text-xl lg:text-2xl'>Pixel Perfect Design
                        </h1>
                        <h6 className='text-xs py-2 md:text-sm lg:text-base'>Crafted with precision, every pixel meticulously placed for a flawless design</h6>
                    </div>
                </div>
                <div className="img w-[100%] lg:w-[50%]">
                    <img className='w-[100%]' src={img1} alt="img1" />
                </div>
            </div>
            <div className="card card-2 mb-7 w-[100%] flex flex-col-reverse md:flex-row-reverse md:border-r-2 border-b-slate-600">
                <div className="content w-[100%] lg:w-[50%] flex justify-center items-center">
                    <div className='text-center w-[80%] md:w-[90%] py-7'>
                        <h1 className='font-bold text-xl md:text-xl lg:text-2xl'>Minimal and Clean
                        </h1>
                        <h6 className='text-xs py-2 md:text-sm lg:text-base'>Embracing simplicity in design, creating elegant and clutter-free user interfaces</h6>
                    </div>
                </div>
                <div className="img w-[100%] lg:w-[50%]">
                    <img className='w-[100%]' src={img2} alt="img1" />
                </div>
            </div>
            <div className="card mb-7 card-3 w-[100%] flex flex-col-reverse md:flex-row md:border-l-2 border-b-slate-600">
                <div className="content w-[100%] lg:w-[50%] flex justify-center items-center">
                    <div className='text-center w-[80%] md:w-[90%] py-7'>
                        <h1 className='font-bold text-xl md:text-xl lg:text-2xl'>SEO-Friendly Approach
                        </h1>
                        <h6 className='text-xs py-2 md:text-sm lg:text-base'>Optimized for search engines, ensuring your online presence gets the attention it deserves</h6>
                    </div>
                </div>
                <div className="img w-[100%] lg:w-[50%]">
                    <img className='w-[100%]' src={img3} alt="img1" />
                </div>
            </div>
            <div className="card mb-7 card-3 w-[100%] flex flex-col-reverse md:flex-row-reverse md:border-r-2 border-b-slate-600">
                <div className="content w-[100%] lg:w-[50%] flex justify-center items-center">
                    <div className='text-center w-[80%] md:w-[90%] py-7'>
                        <h1 className='font-bold text-xl md:text-xl lg:text-2xl'>Seamless User Experience
                        </h1>
                        <h6 className='text-xs py-2 md:text-sm lg:text-base'>Dedicated to providing users with a smooth and intuitive journey through your website</h6>
                    </div>
                </div>
                <div className="img w-[100%] lg:w-[50%]">
                    <img className='w-[100%]' src={img4} alt="img1" />
                </div>
            </div>
            <div className="card mb-7 card-3 w-[100%] flex flex-col-reverse md:flex-row md:border-l-2 border-b-slate-600">
                <div className="content w-[100%] lg:w-[50%] flex justify-center items-center">
                    <div className='text-center w-[80%] md:w-[90%] py-7'>
                        <h1 className='font-bold text-xl md:text-xl lg:text-2xl'>Utilizing Modern Technology
                        </h1>
                        <h6 className='text-xs py-2 md:text-sm lg:text-base'>Employing cutting-edge technologies to keep your website on the forefront of innovation</h6>
                    </div>
                </div>
                <div className="img w-[100%] lg:w-[50%]">
                    <img className='w-[100%]' src={img5} alt="img1" />
                </div>
            </div>
            <div className="card mb-7 card-3 w-[100%] flex flex-col-reverse md:flex-row-reverse md:border-r-2 border-b-slate-600">
                <div className="content w-[100%] lg:w-[50%] flex justify-center items-center">
                    <div className='text-center w-[80%] md:w-[90%] py-7'>
                        <h1 className='font-bold text-xl md:text-xl lg:text-2xl'>Consistent Branding
                        </h1>
                        <h6 className='text-xs py-2 md:text-sm lg:text-base'>Infusing your unique brand identity into every aspect of the website, from color schemes and typography to imagery and messaging, to create a cohesive and memorable online presence</h6>
                    </div>
                </div>
                <div className="img w-[100%] lg:w-[50%]">
                    <img className='w-[100%]' src={img6} alt="img1" />
                </div>
            </div>
        </section>
    )
}

export default Ingrediants
