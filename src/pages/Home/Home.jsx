
import gallary1 from "../../assets/images/gallery1.jpg";
import gallary2 from "../../assets/images/gallery2.jpg";
import gallary3 from "../../assets/images/gallery3.jpg";
import gallary4 from "../../assets/images/gallery4.jpg";
import recommend1 from "../../assets/images/recommend1.jpg";
import recommend2 from "../../assets/images/recommend2.jpg";
import recommend3 from "../../assets/images/recommend3.jpg";
import { useEffect, useState } from "react";
import { BASE_API_URL, URL_PRODUCT_IMG } from "../../lib/api";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    BASE_API_URL.get("/product")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="features_items">
        <h2 className="title text-center">Features Items</h2>
        {products.map((product) => {
          const imgArr = JSON.parse(product.image);
          const productImage = imgArr[0] || "";
          return (
            <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img
                      src={`${URL_PRODUCT_IMG}/${product.id_user}/${productImage}`}
                      alt=""
                    />
                    <h2>${product.price}</h2>
                    <p>{product.name}</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                  <div className="product-overlay">
                    <div className="overlay-content">
                      <h2>${product.price}</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
                <div className="choose">
                  <ul className="nav nav-pills nav-justified">
                    <li>
                      <a href="#">
                        <i className="fa fa-plus-square" />
                        Add to wishlist
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-plus-square" />
                        Add to compare
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="category-tab">
        <div className="col-sm-12">
          <ul className="nav nav-tabs">
            <li className="active">
              <a href="#tshirt" data-toggle="tab">
                T-Shirt
              </a>
            </li>
            <li>
              <a href="#blazers" data-toggle="tab">
                Blazers
              </a>
            </li>
            <li>
              <a href="#sunglass" data-toggle="tab">
                Sunglass
              </a>
            </li>
            <li>
              <a href="#kids" data-toggle="tab">
                Kids
              </a>
            </li>
            <li>
              <a href="#poloshirt" data-toggle="tab">
                Polo shirt
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active in" id="tshirt">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="tab-pane fade" id="blazers">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="sunglass">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="kids">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="poloshirt">
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary2} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary4} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary3} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <img src={gallary1} alt="" />
                    <h2>$56</h2>
                    <p>Easy Polo Black Edition</p>
                    <a href="#" className="btn btn-default add-to-cart">
                      <i className="fa fa-shopping-cart" />
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="recommended_items">
        <h2 className="title text-center">recommended items</h2>
        <div
          id="recommended-item-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item active">
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={recommend1} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={recommend2} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={recommend3} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <a href="#" className="btn btn-default add-to-cart">
                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="left recommended-item-control"
            href="#recommended-item-carousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
          </a>
          <a
            className="right recommended-item-control"
            href="#recommended-item-carousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
