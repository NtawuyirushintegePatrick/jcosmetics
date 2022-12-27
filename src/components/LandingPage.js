import MyImage from '../images/photo.jpg';
import productImage from '../images/shoe.jpg'
import productImage1 from '../images/shoe1.jpg'
import React from "react";

const LandingPage = () => {
  return (
    <>
      <div className="Header">
        <div className="submenu">
          <div className="submenu-list">
            <a
              href="#"
              class="text-blue-600 visited:text-purple-600 no-underline"
            >
              Daily Deals
            </a>
            <a href="#" class="text-blue-600 visited:text-purple-600">
              Sell
            </a>
            <a href="#" class="text-blue-600 visited:text-purple-600">
              Contact us
            </a>
            <a href="#" class="text-blue-600 visited:text-purple-600">
              About us
            </a>
            <a href="#" class="text-blue-600 visited:text-purple-600">
              Help
            </a>
          </div>
        </div>
        <div className="profile-menu">
          <a href="#" class="text-blue-600 visited:text-purple-600">
            Register
          </a>
          <a href="#" class="text-blue-600 visited:text-purple-600">
            Sign in
          </a>
        </div>
      </div>
      <div className="Header-two">
        <div className="logo">
          <p>JCOSMETICS</p>
        </div>
        <div className="search-landingPage">
          <input type="text" placeholder="Search any Product" />
        </div>
        <div className="cart-field">
          <div className="cart-shape">Cart logo</div>
          <div className="cart-amount">
            <h>Cart</h>
            <br />
            <p>
              Total: <b>$0:00</b>
            </p>
          </div>
        </div>
      </div>
      <div className="categorie">
        <div className="cat">
          <a href="#">All Categories</a>
        </div>
        <div className="all-categories">
          <div className="catt">
            <a href="#">Oral Care</a>
          </div>
          <div className="catt">
            <a href="#">Skin Care</a>
          </div>
          <div className="catt">
            <a href="#">Sun Care</a>
          </div>
          <div className="catt">
            <a href="#">Hair Care</a>
          </div>
          <div className="catt">
            <a href="#">Decorative Cosmetics</a>
          </div>
          <div className="catt">
            <a href="#">Body Care</a>
          </div>
          <div className="catt">
            <a href="#">Perfumes</a>
          </div>
        </div>
      </div>
      <div className="welcome-photo">
        <div className="welcome">
          <div className="big-rectangle">
            <div className="small-rectangle">
              <p1>
                Shop with us <br />
                <br />
                from <br /> <br /> Monday to Monday
                <br />
                <br />
                <p2>24/24</p2>
              </p1>
            </div>
          </div>
        </div>
        <div className="photo">
          <p>
            We are here to serve you all about <br />
            <br />
            <p3>Cosmetics</p3> <br />
            <br />
            Go with us
          </p>
        </div>
      </div>
      <div className="categories">
        <div className="cat-cat-see-all">
          <div className="cat">
            <h>Categories</h>
          </div>
          <div className="cat-see-all">
            <button>see all</button>
          </div>
        </div>
        <div className="categories-with-photos">
          <div className="categories-details-card">
            <div className="categorie-image">
            <img src={productImage} alt="shoe"/>
            </div>
            <div className="categorie-name">Oral care</div>
          </div>
          <div className="categories-details-card">
            <div className="categorie-image">
            <img src={MyImage} alt="hair"/>
            </div>
            <div className="categorie-name">Skin care</div>
          </div>
          <div className="categories-details-card">
            <div className="categorie-image">
            <img src={productImage} alt="shoe"/>
            </div>
            <div className="categorie-name">Sun care</div>
          </div>
          <div className="categories-details-card">
            <div className="categorie-image">
            <img src={MyImage} alt="hair"/>
            </div>
            <div className="categorie-name">Hair care</div>
          </div>
          <div className="categories-details-card">
            <div className="categorie-image">
            <img src={productImage} alt="shoe"/>
            </div>
            <div className="categorie-name">Body care</div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="pro-see-all">
          <div className="pro">Products</div>
          <div className="search-product">
            <input
              type="text"
              placeholder="Search a Product you are interested to buy"
            />
          </div>
          <div className="see-all">
            <button> See all</button>
          </div>
        </div>
        <div className="product-card">
          <div className="products-details-card">
            <div className="product-image">
            <img src={productImage} alt="shoe"/>
            </div>
            <div className="product-info">
              <p>$100</p>
              <p>$100</p>
              <button>shop now</button>
            </div>
          </div>
          <div className="products-details-card">
            <div className="product-image">
            <img src={productImage1} alt="food"/>
            </div>
            <div className="product-info">cdvdvdv</div>
          </div>
          <div className="products-details-card">
            <div className="product-image">
            <img src={productImage} alt="shoe"/>
            </div>
            <div className="product-info">cdvdvdv</div>
          </div>
          <div className="products-details-card">
            <div className="product-image">
            <img src={productImage1} alt="food"/>
            </div>
            <div className="product-info">cdvdvdv</div>
          </div>
          <div className="products-details-card">
            <div className="product-image">
            <img src={productImage1} alt="food"/>
            </div>
            <div className="product-info">cdvdvdv</div>
          </div>
          <div className="products-details-card">
            <div className="product-image">
            <img src={productImage} alt="shoe"/>
            </div>
            <div className="product-info">cdvdvdv</div>
          </div>

          <div className="products-details-card">
            <div className="product-image">
            <img src={productImage1} alt="food"/>
            </div>
            <div className="product-info">cdvdvdv</div>
          </div>
          <div className="products-details-card">
            <div className="product-image">
            <img src={productImage} alt="shoe"/>
            </div>
            <div className="product-info">cdvdvdv</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="stay-connected">
          <h4>Stay informed</h4>
          <h5>Sign for new updates</h5>
          <input type="text" placeholder="Email address"/><br/>
          <button>Subscribe</button>
          <h6>Stay connected</h6>
        </div>
        <div className="contact-us">
          <h4>Contact us</h4>
          <p>Jcosmetics<br/>The personal care center<br/><br/>
          Tel : +250786562343<br/>
          +250786767555
          </p>
        </div>
      </div>
      <div className="footer-privacy-managment">
        <div className="privacy">Copylight Jcosmetics  Policy&Privacy</div>
        <div className="managment">Design and Content Management System by Jcosmetics</div>
      </div>
    </>
  );
};

export default LandingPage;
