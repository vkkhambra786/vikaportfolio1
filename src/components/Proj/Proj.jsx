import img1 from "./pulse.PNG";
import img2 from "./health.PNG";
import img3 from "./tanshiq.PNG";
import React from "react";
import("./Proj.css");
export default function Proj(props) {
  return (
    <div id="project" className="proj">
      <h1 className="h14">My Recent Work</h1>
      <div className="projCont">
        <div className="final">
          <div className="img">
            <img src={img2} alt="" />
          </div>
          <div>
            <h2>Bemz clone</h2>
            <p>
              Bemz.com is India's largest online IKEA furniture store for home
              and office. Shop online from the latest collections of bed, sofa
              and similar products featuring the best brands.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
                <i class="fab fa-html5"></i>
                <p>HTML</p>
              </div>
              <div>
                <i class="fab fa-css3"></i>
                <p>CSS</p>
              </div>
              <div>
                <i class="fab fa-js"></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://bemz-1.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/vkkhambra786/BEMZ-1.git"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>

        <div className="final">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div>
            <h2>Fabbag clone</h2>
            <p>
              Fabbag.com is a leading Online Cosmetics in India that offers
              prescription cosmetics and its different products all over India.
              Fabbag provide Cosmetics to us which ensure health to all the
              individuals and chemicals free.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
                <i class="fab fa-html5"></i>
                <p>HTML</p>
              </div>
              <div>
                <i class="fab fa-css3"></i>
                <p>CSS</p>
              </div>
              <div>
                <i class="fab fa-js"></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://fagbag-com.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/vkkhambra786/Fagbag.com.git"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>

        <div className="final">
          <div className="img">
            <img src={img3} alt="" />
          </div>
          <div>
            <h2> Tanshiq clone</h2>
            <p>
              Tanishq is an Indian Jewellery brand and a division of Titan
              Company. It is an E-Commerce Website Clone Where Users can order
              Jewellery Items through this website.
            </p>
            <h3>Tech Stack</h3>

            <div className="tech">
              <div>
                <i class="fab fa-html5"></i>
                <p>HTML</p>
              </div>
              <div>
                <i class="fab fa-css3"></i>
                <p>CSS</p>
              </div>
              <div>
                <i class="fab fa-js"></i>
                <p>JavaScript</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://tanishq-web-clone.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/mm-asraf/Tanishq-Web-Clone.git"
                target="_blank"
                rel="noreferrer"
              >
                <button>Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
