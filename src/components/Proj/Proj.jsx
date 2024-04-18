//import img1 from "./pulse.PNG";
import img1 from "./chatp.PNG";
import img2 from "./tictacttoe.PNG";
import img3 from "./tanshiq.PNG";
import img4 from "./todopep1.PNG";
import img5 from "./todoo.PNG";
import React from "react";
import("./Proj.css");
export default function Proj(props) {
  return (
    <div id="project" className="proj">
      <h1 className="h14">My Recent Work</h1>
      <div className="projCont">
        <div className="final">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div>
            <h2>Chat Application</h2>
            <p>
              Developed a real-time chat application using modern web
              technologies to facilitate instant communication between users.
              The application focuses on one-on-one messaging, providing users
              with a seamless platform to connect individually.
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
              <div>
                <i class="fab fa-react"></i>
                <p>ReactJs</p>
              </div>
              <div>
                <i class="fab fa-node"></i>
                <p>NodeJs</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://chatappproduction1.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/vkkhambra786/ChatApp.git"
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
            <img src={img2} alt="" />
          </div>
          <div>
            <h2> TIC TAC TOE GAME</h2>
            <p>
              Tic Tac Toe Game is play by two person build on ReactJs. You click
              one box at one time , you can go o your previous step and it show
              win , lose and draw
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
              <div>
                <i class="fab fa-react"></i>
                <p>ReactJs</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://tic-tac-toe-pepcoding2.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/vkkhambra786/TIC_TAC_TOE_.git"
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
            <img src={img4} alt="" />
          </div>
          <div>
            <h2> TODO LIST</h2>
            <p>
              Todo List App you can add the data use input box. If you click on
              tick mark then it add to finished task if you click on cross marks
              it ad on Todo task.
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
              <div>
                <i class="fab fa-react"></i>
                <p>ReactJs</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://todoapp-pepcoding1.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/vkkhambra786/TodoappPepcoding1.git"
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
            <img src={img5} alt="" />
          </div>
          <div>
            <h2> TODO LIST </h2>
            <p>
              Todo List you can add the data my using all input box craete by
              ReactJs.
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
              <div>
                <i class="fab fa-react"></i>
                <p>ReactJs</p>
              </div>
            </div>
            <div className="buttons">
              <a
                href="https://todo-list-react-three-gamma.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Preview</button>
              </a>
              <a
                href="https://github.com/vkkhambra786/TODO_LIST_React.git"
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
