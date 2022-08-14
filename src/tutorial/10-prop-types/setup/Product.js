import React from "react";
import PropTypes from "prop-types";
import defaultImg from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  // const imgUrl = image && image.url;
  return (
    <article className="product">
      <h4>{name}</h4>
      <img src={(image && image.url) || defaultImg} alt={name} />
      <p>{price}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   image: {
//     url: "default",
//   },
//   price: 9999,
//   name: "default name",
// };

export default Product;
