import { Button } from 'flowbite-react';
import bussinessImage from "../asserts/homepage.png"
export default function CallToAction() {

    return (
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    Want to learn more about Technology and Bussiness
                </h2>
                <p className='text-gray-500 my-2'>
                    Check out these resources with Unlimited Technology and business blogs
                </p>

                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'
                    onClick={() => {
                        window.open('https://www.donocare.com', '_blank', 'noopener noreferrer');
                    }}>
                    <a href="https://www.donocare.com" target='_blank' rel='noopener noreferrer'>
                        Connect Now
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src={bussinessImage} />
            </div>
        </div>
    )
}