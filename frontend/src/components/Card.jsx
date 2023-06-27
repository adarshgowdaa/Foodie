import React from "react";

function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Combo - 1 The Good Food!</p>
          <div className="container h-100 w-100">
            <select className="m-2 h-100  bg-primary rounded">
              {Array.from(Array(5).keys()).map((item) => (
                <option key={item + 1} value={item + 1}>
                  {item + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100  bg-primary rounded">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <div className="d-inline h-100">Total Prize</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
