import React, { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [read, setRead] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {read ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setRead(!read)}>
            {read ? "read less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
