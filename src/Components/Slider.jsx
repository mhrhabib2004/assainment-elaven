
const Slider = () => {
    return (
        <div  className="hero min-h-screen  rounded-xl " style={{ backgroundImage: 'url(https://www.vmtlib.michlibrary.org/library-books.jpg/@@images/image.jpeg)' }}>
            <div className="hero-overlay bg-opacity-60 rounded-xl "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Self-Help Guide</h1>
                    <p className="mb-5">Effortlessly arrange your book collection by title, author, genre, or publication date for quick access to favorites and easy exploration of new reads. Simplify your library management with intuitive sorting options.</p>
                
                </div>
            </div>
        </div>
    );
};

export default Slider;