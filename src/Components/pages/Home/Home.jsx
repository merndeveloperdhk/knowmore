import Login from "../Login/Login";


const Home = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-center items-center min-h-screen md:gap-12 gap-4">
            <div className="md:w-1/2 w-full md:ps-24 space-y-3">
                <h1 className="text-4xl font-bold text-[#4894e6]">Know More</h1>
                <p className="text-lg">This is a social platform for konw more about variout news.</p>
            </div>
            <div className="md:w-1/2 w-full">
                <Login></Login>
            </div>
        </div>
    );
};

export default Home;