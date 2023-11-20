import React from "react";
import { Link } from "react-router-dom";

export const ProductModal = () => {
  return (
    <div
      className="modal fade quick-view-product"
      id="quick-view-modal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="far fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="single-product-thumb">
              <div className="row">
                <div className="col-lg-7 mb--40">
                  <div className="row">
                    <div className="col-lg-10 order-lg-2">
                      <div className="single-product-thumbnail product-large-thumbnail axil-product thumbnail-badge zoom-gallery">
                        <div className="thumbnail">
                          <img
                            src="assets/images/product/product-big-01.png"
                            alt="Product Images"
                          />
                          <div className="label-block label-right">
                            <div className="product-badget">20% OFF</div>
                          </div>
                          <div className="product-quick-view position-view">
                            <Link
                              href="assets/images/product/product-big-01.png"
                              className="popup-zoom"
                            >
                              <i className="far fa-search-plus"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="thumbnail">
                          <img
                            src="assets/images/product/product-big-02.png"
                            alt="Product Images"
                          />
                          <div className="label-block label-right">
                            <div className="product-badget">20% OFF</div>
                          </div>
                          <div className="product-quick-view position-view">
                            <Link
                              href="assets/images/product/product-big-02.png"
                              className="popup-zoom"
                            >
                              <i className="far fa-search-plus"></i>
                            </Link>
                          </div>
                        </div>
                        <div className="thumbnail">
                          <img
                            src="assets/images/product/product-big-03.png"
                            alt="Product Images"
                          />
                          <div className="label-block label-right">
                            <div className="product-badget">20% OFF</div>
                          </div>
                          <div className="product-quick-view position-view">
                            <Link
                              href="assets/images/product/product-big-03.png"
                              className="popup-zoom"
                            >
                              <i className="far fa-search-plus"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 order-lg-1">
                      <div className="product-small-thumb small-thumb-wrapper">
                        <div className="small-thumb-img">
                          <img
                            src="assets/images/product/product-thumb/thumb-08.png"
                            alt="thumb"
                          />
                        </div>
                        <div className="small-thumb-img">
                          <img
                            src="assets/images/product/product-thumb/thumb-07.png"
                            alt="thumb"
                          />
                        </div>
                        <div className="small-thumb-img">
                          <img
                            src="assets/images/product/product-thumb/thumb-09.png"
                            alt="thumb"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 mb--40">
                  <div className="single-product-content">
                    <div className="inner">
                      <div className="product-rating">
                        <div className="star-rating">
                          <img
                            src="assets/images/icons/rate.png"
                            alt="Rate Images"
                          />
                        </div>
                        <div className="review-link">
                          <Link to="/">
                            (<span>1</span> customer reviews)
                          </Link>
                        </div>
                      </div>
                      <h3 className="product-title">Serif Coffee Table</h3>
                      <span className="price-amount">$155.00 - $255.00</span>
                      <ul className="product-meta">
                        <li>
                          <i className="fal fa-check"></i>In stock
                        </li>
                        <li>
                          <i className="fal fa-check"></i>Free delivery
                          available
                        </li>
                        <li>
                          <i className="fal fa-check"></i>Sales 30% Off Use
                          Code: MOTIVE30
                        </li>
                      </ul>
                      <p className="description">
                        In ornare lorem ut est dapibus, ut tincidunt nisi
                        pretium. Integer ante est, elementum eget magna.
                        Pellentesque sagittis dictum libero, eu dignissim
                        tellus.
                      </p>

                      <div className="product-variations-wrapper">
                        <div className="product-variation">
                          <h6 className="title">Colors:</h6>
                          <div className="color-variant-wrapper">
                            <ul className="color-variant mt--0">
                              <li className="color-extra-01 active">
                                <span>
                                  <span className="color"></span>
                                </span>
                              </li>
                              <li className="color-extra-02">
                                <span>
                                  <span className="color"></span>
                                </span>
                              </li>
                              <li className="color-extra-03">
                                <span>
                                  <span className="color"></span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="product-variation">
                          <h6 className="title">Size:</h6>
                          <ul className="range-variant">
                            <li>xs</li>
                            <li>s</li>
                            <li>m</li>
                            <li>l</li>
                            <li>xl</li>
                          </ul>
                        </div>
                      </div>

                      <div className="product-action-wrapper d-flex-center">
                        <div className="pro-qty">
                          <input type="text" defaultValue="1" />
                        </div>

                        <ul className="product-action d-flex-center mb--0">
                          <li className="add-to-cart">
                            <Link
                              href="cart.html"
                              className="axil-btn btn-bg-primary"
                            >
                              Add to Cart
                            </Link>
                          </li>
                          <li className="wishlist">
                            <Link
                              href="wishlist.html"
                              className="axil-btn wishlist-btn"
                            >
                              <i className="far fa-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
