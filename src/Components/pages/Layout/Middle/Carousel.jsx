const Carousel = () => {
  return (
    <div>
      <div className="carousel gap-2 carousel-center rounded-box">
        {/* first */}
        <div className="carousel-item w-1/4 h-64 relative">
          <div className="avatar absolute top-2 left-2">
            <div className="w-12 rounded-full">
              <img src="https://i.ibb.co/74Ww20L/20170506-080529.jpg" className="object-cover"/>
            </div>
          </div>
          <img
            src="https://i.ibb.co/74Ww20L/20170506-080529.jpg"
            alt="Pizza"
            className="object-cover"
          />
          <h1 className="caurosel_title">Fatiha akter</h1>
        </div>
        {/* second */}
        <div className="carousel-item w-1/4 h-64 relative">
        <div className="avatar absolute top-2 left-2">
            <div className="w-12 rounded-full">
              <img src="https://i.ibb.co/1bTXBXY/Whats-App-Image-2024-03-09-at-00-49-35-3eb84dda.jpg" className="object-cover"/>
              
            </div>
          </div>
          <img
            src="https://i.ibb.co/1bTXBXY/Whats-App-Image-2024-03-09-at-00-49-35-3eb84dda.jpg"
            alt="Pizza"
            className="object-cover"
          />
          <h1 className="caurosel_title">Misam Mehzabin</h1>
        </div>
        {/* third */}
        <div className="carousel-item w-1/4 h-64 relative">
        <div className="avatar absolute top-2 left-2">
            <div className="w-12 rounded-full">
              <img src="https://i.ibb.co/Qch1yF8/274541232-668589014459743-1501714678471148242-n.jpg" className="object-cover"/>
              
            </div>
          </div>
          <img
            src="https://i.ibb.co/Qch1yF8/274541232-668589014459743-1501714678471148242-n.jpg"
            alt="Pizza"
            className="object-cover"
          />
          <h1 className="caurosel_title">Marifa akter</h1>
        </div>
        {/* fourth */}
        <div className="carousel-item w-1/4 h-64 relative">
        <div className="avatar absolute top-2 left-2">
            <div className="w-12 rounded-full">
              <img src="https://i.ibb.co/YQz1gyP/Whats-App-Image-2022-11-06-at-11-01-47-PM.jpg" className="object-cover" />
              
            </div>
          </div>
          <img
            src="https://i.ibb.co/YQz1gyP/Whats-App-Image-2022-11-06-at-11-01-47-PM.jpg"
            alt="Pizza"
            className="object-cover"
          />
          <h1 className="caurosel_title">Inisha akter</h1>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
