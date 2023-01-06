import AliceCarousel from "react-alice-carousel";
import { dataThree } from "../Utils/Data";

function Rating() {
    const items = dataThree.map((item) => {
        const {rating, message, date, name, Head} = item;
        return (
          <div className="flex">
            <div className="flex">
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <p className="text-yellow-400" key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </p>
                ))}
            </div>
            <h3 className="font-bold text-sm md:text-xl">{Head}</h3>
            <p>{message}</p>
            <div className="flex">
              <h5>{name}</h5>
              <h5>{date}</h5>
            </div>
          </div>
        );
    })

    const responsive = {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
    };

  return (
    <div>
      <AliceCarousel
        mouseTracking
        // infinite
        autoPlayInterval={900}
        animationDuration={900}
        ButtonsControls
        DotsControls
        responsive={responsive}
        // autoPlay
        items={items}
      />
    </div>
  );
}

export default Rating
