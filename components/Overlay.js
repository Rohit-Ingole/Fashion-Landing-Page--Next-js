import { productInfoData } from "../constants/productData";

const Overlay = () => {
  const ProductInfo = ({
    upperH1_a,
    upperH1_b,
    lowerh1_a,
    lowerh1_b,
    description,
  }) => (
    <div className="product-info">
      <h1>
        {upperH1_a}
        <span style={{ color: "#e29f01" }}>{upperH1_b}</span>
      </h1>
      <h1>
        <span style={{ color: "#e29f01" }}>{lowerh1_a}</span>
        {lowerh1_b}
      </h1>
      <span>Collection 2020</span>
      <p>{description}</p>
      <button>Shop now</button>
    </div>
  );

  return (
    <>
      <div className="slide-control">
        <i className="bx bxs-right-arrow"></i>
      </div>
      <div className="overlay"></div>
      <div className="col-5" style={{ zIndex: "97" }}>
        <div className="info">
          {productInfoData.map(
            (
              { upperH1_a, upperH1_b, lowerh1_a, lowerh1_b, description },
              index
            ) => (
              <ProductInfo
                upperH1_a={upperH1_a}
                upperH1_b={upperH1_b}
                lowerh1_a={lowerh1_a}
                lowerh1_b={lowerh1_b}
                description={description}
                key={index}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Overlay;
