import React, { useEffect, useRef } from "react";

const AncreScroll = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (scrollPosition > 5) hiddenRef.current.style.display = "none";
      else hiddenRef.current.style.display = "block";
    };

    window.addEventListener("scroll", handleScroll);

    console.log(props.numbers)

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="ancre-container">
      <div className="preAncre hidden" ref={hiddenRef}>
        <img
          src="./svg/ancre.svg"
          alt="ancre"
          width={70}
          height={70}
        />
      </div>
      <div className="slide" ref={ref}>
        {[...Array(props.numbers)].map((x, id) => {
          return (
            <img
              src="./svg/chaine.svg"
              alt={id}
              key={x}
              width={25}
              height={25}
              className="chaine"
            />
          );
        })}
        <div className="ancre">
          <img
            src="./svg/ancre.svg"
            alt="ancre"
            width={70}
            height={70}
            className="ancre"
          />
        </div>
      </div>
    </div>
  );
};

export default AncreScroll;