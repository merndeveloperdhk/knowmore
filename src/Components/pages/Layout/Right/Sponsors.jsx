const Sponsors = () => {
  return (
    <div>
        <h1 className="text-xl font-semibold py-2">Sponsord</h1>
      <div className="flex gap-2 items-center bg-base-100 shadow-xl mb-2 w-full md:w-[300px] h-[160px]">
        <figure>
          <img className="rounded-lg w-[160px] h-[140px] object-cover"
            src="https://i.ibb.co/RbXMZbC/274546135-275891504689327-3686559119234008270-n.jpg"
            alt="Movie"
          />
        </figure>
        <div className="space-y-2">
          <h2 className=" font-semibold">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
        <p>website: abcd@efg.com</p>
        </div>
      </div>
      <div className="flex gap-2 items-center bg-base-100 shadow-xl mb-2 w-full md:w-[300px] h-[160px]">
        <figure>
          <img className="rounded-lg w-[160px] h-[140px] object-cover"
            src="https://i.ibb.co/HzVXtyn/AKA8518.jpg"
            alt="Movie"
          />
        </figure>
        <div className="space-y-2">
          <h2 className=" font-semibold">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
        <p>website: abcd@efg.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
