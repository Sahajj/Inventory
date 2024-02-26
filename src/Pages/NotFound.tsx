import * as React from 'react';

const NotFound: React.FC<{Props}> = (props: Props) => {
    return (
        <div className="page-404 bg-white py-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <h1 className="text-6xl text-black">404</h1>
                    </div>
                    <div className="four_zero_four_bg bg-cover bg-center h-96 w-96 flex justify-center items-start">
                        <div>
                            <img src={"https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"} alt="404" className="w-full" />
                        </div>
                    </div>
                    <div className="contact_box_404 text-center">
                        <h3 className="text-6xl">Look like you're lost</h3>
                        <p className="text-lg">The page you are looking for is not available!</p>
                        <a href="/dashboard" className="link_404 inline-block mt-8 px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300">Go to DashBoard</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
