const Carousel = () => {
  return (
    <div>
      <div className="carousel gap-2 carousel-center rounded-box">
        {/* first */}
        <div className="carousel-item w-1/4 h-64 relative">
          <div className="avatar absolute top-2 left-2">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <img
            src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            alt="Pizza"
          />
          <h1 className="absolute bottom-2 left-2 font-semibold">Title name</h1>
        </div>
        {/* second */}
        <div className="carousel-item w-1/4 h-64 relative">
        <div className="avatar absolute top-2 left-2">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              
            </div>
          </div>
          <img
            src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Pizza"
          />
          <h1 className="absolute bottom-2 left-2 font-semibold">Title name</h1>
        </div>
        {/* third */}
        <div className="carousel-item w-1/4 h-64 relative">
        <div className="avatar absolute top-2 left-2">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              
            </div>
          </div>
          <img
            src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Pizza"
          />
          <h1 className="absolute bottom-2 left-2 font-semibold">Title name</h1>
        </div>
        {/* fourth */}
        <div className="carousel-item w-1/4 h-64 relative">
        <div className="avatar absolute top-2 left-2">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              
            </div>
          </div>
          <img
            src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Pizza"
          />
          <h1 className="absolute bottom-2 left-2 font-semibold">Title name</h1>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
