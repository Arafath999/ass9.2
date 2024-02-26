import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
const ThirdSection = () => {
    return (
        <div className=''>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-2xl'>Login</h2>
                <button className='btn btn-outline w-full'>
                    <FaGoogle></FaGoogle>Google
                </button>
                <button className='btn btn-outline w-full'>
                    <FaGithub></FaGithub>GitHub
                </button>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-2xl'>Find us On</h2>
                <a className='p-4 flex text-lg bg-red-200 items-center border rounded-t-lg' href=''>
                    <FaFacebook></FaFacebook><span>FaceBook</span>
                </a>
                <a className='p-4 flex text-lg bg-slate-400 items-center border rounded-t-lg' href=''>
                    <FaTwitter></FaTwitter><span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg bg-orange-300 items-center border rounded-t-lg' href=''>
                    <FaInstagram></FaInstagram><span>Instagram</span>
                </a>

            </div>
            <div className="relative flex w-64 h-[80vh] flex-col rounded-xl bg-gray-300 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 w-48 h-88 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img src="https://i.ibb.co/8m1fWgy/IMG-20230915-WA0002.jpg" width={200} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        ARAFATH UDDIN KHAN
                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        OWNER
                    </p>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        Email: arafatuddin999@gmail.com
                    </p>
                </div>
                <div>
                    <p className='text-center'>
                        quality Products or Services: Offer high-quality products or services that meet or exceed customer expectations. Quality is a fundamental driver of customer satisfaction.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThirdSection;
