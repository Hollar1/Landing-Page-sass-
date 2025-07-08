import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import company_logo from "../src/assets/images/need_01.jpeg";
import { FaBars, FaXmark } from "react-icons/fa6";
import img_01 from "../src/assets/images/sitting_angel.jpg";

function App() {
  const [showLink, setShowLink] = useState(false);

  return (
    <div className="parent_wrapper">
      <nav className="nav">
        <div>
          <img src={company_logo} alt="" />
          <h3>Company's Name</h3>
        </div>

        <div>
          {showLink ? (
            <FaXmark
              onClick={() => {
                setShowLink(false);
              }}
            />
          ) : (
            <FaBars
              onClick={() => {
                setShowLink(true);
              }}
            />
          )}
        </div>
      </nav>

      <div className="wrapper">
        {showLink && (
          <div className="links">
            <ul>
              <li>home</li>
              <li>services</li>
              <li>about</li>
              <li>fqa</li>
            </ul>
          </div>
        )}

        <nav className="desktop_navBar">
          <div>
            <img src={company_logo} alt="" />
            <h3>Company's Name</h3>
          </div>

          <div className="link_div">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Location</li>
              <li>Vacancy</li>
            </ul>
          </div>
        </nav>

        <section className="sec_01">
          <h3>Landing Page Website For Design Template</h3>
        </section>

        <section className="sec_02">
          <div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              obcaecati. Incidunt sequi sit enim atque ut, dolorem, dignissimos
              magni omnis voluptates exercitationem aliquam ipsa? Omnis ex
              excepturi adipisci praesentium inventore.
            </p>
            <button>Get Started</button>
          </div>

          <div>
            <img src={img_01} alt="" />
          </div>
        </section>

        <section className="sec_03">
          <h3>Our Services</h3>

          <article>
            <div>Baby's Wear</div>
            <div>Ladies Wear</div>
            <div>Men's Shoes</div>
            <div>Mens Cap</div>
            <div>Ladies Jeans</div>
          </article>
        </section>

        <section className="sec_04">
          <h3>About Us</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          praesentium eligendi voluptatum quam quidem illo debitis, similique,
          quia exercitationem fugiat nemo asperiores consectetur iure possimus,
          a aut magni dolorum accusantium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos praesentium eligendi voluptatum
          quam quidem illo debitis, similique, quia exercitationem fugiat nemo
          asperiores consectetur iure possimus, a aut magni dolorum accusantium.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          dignissimos illo fuga delectus temporibus, vel dolore amet
          necessitatibus sapiente modi quam velit? Voluptate dignissimos nisi
          repellendus sint assumenda placeat deserunt!
        </section>
      </div>
      <footer className="sec_05">
        <h2>Our Footer</h2>

        <section>
          <div className="div_A">
            <h3>Quick Link</h3>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            <p>Home</p>
          </div>

          <div className="div_B">
            <h3>Social Medias</h3>
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
            <p>Facebook</p>
          </div>

          <div className="div_C">
            <address>
              No. 30 God's willing Street, I'll Prosper Area, All The Best
              Country.
            </address>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
