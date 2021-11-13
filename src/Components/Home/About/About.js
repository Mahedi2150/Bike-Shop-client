import React from "react";

import "./About.css"

const About = () => {
  return (
    <div className="container my-5">




      {/* service section  */}

      <div className="container1 my-5">
        <h1 className="text-center fw-bold p-4 text-dark">Our Special Bikes</h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="http://www.cycleconnections.com/media/k2/items/cache/0072fc861f8558ddd0a5b9efefe3ec0b_XL.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Ghost Rider</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrhfc3099LUI5mb_wSj-T_iHNTfOUIG4MZvRTRuufMPYM2A1yS7FUTT9cGrwCHvqOL-MA&usqp=CAU" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Speed Bikers</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjAMVbqUNt_FosQ1OY0rIJnACZcaw50cwn2hNvuH5T6gr8BD1tmyKsh2xvSzAAn1_LDc&usqp=CAU" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Race Mafia</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="http://beginnerriders.com/wp-content/uploads/2019/09/FirstMotorcycleRide.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Black Panther</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://img.wallpapersafari.com/desktop/1366/768/91/20/yNe23z.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Ghost Biker</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://cdn.wallpapersafari.com/85/35/g8KxZ7.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>Road Monster</h5>
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

export default About;
