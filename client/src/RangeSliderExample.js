import React, { useEffect, useRef } from 'react';

function RangeSlider() {
  const sliderRef = useRef(null);
  const rangeRef = useRef(null);
  const valueRef = useRef(null);

  useEffect(() => {
    // const slider = sliderRef.current;
    const range = rangeRef.current;
    const value = valueRef.current;

    value.innerHTML = range.value;

    range.addEventListener("input", function(){
        value.innerHTML = this.value;
    });
  }, []);

  return (
    <div className="range-slider" ref={sliderRef}>
      <input className="range-slider__range" id="myinput" type="range" ref={rangeRef} />
      
      <div className="range-slider__value" ref={valueRef}></div>

    </div>
  );
}

export default RangeSlider;