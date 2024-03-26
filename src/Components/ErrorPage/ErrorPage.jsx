
const ErrorPage = () => {
    return (
        <div className=" flex flex-col min-h-screen justify-center items-center ">
            <div>
                <h1 className="text-5xl font-semibold">Oops!!!</h1>
                <p className="pt-3 text-xl font-medium">An unexected error has occurred</p>
                <p className="pt-1 text-lg font-medium">Not Found</p>
            </div>
        </div>
    );
};

export default ErrorPage;