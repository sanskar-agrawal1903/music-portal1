import React from 'react'

import music1logo from "../../images/work-1.jpg";
import music2logo from "../../images/work-2.jpeg";
import music3logo from "../../images/work-3.jpg";

function MusicEveryOne() {
    return (
        <section className="section-music-everyone">
            <div className="section-music-everyone-child">
              <div className="text-center heading-secondary u-margin-bottom-medium">
                <h2>Beat your luck with your work</h2>
              </div>

              <div className="row">
                <div className="col-1-of-2">
                  <div className="text">
                    <div className="text-group">
                      <h4 className="text-heading">Work is the most important thing to do in life</h4>
                      <p className="text-paragraph">lorem qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqq</p>
                    </div>

                    <div className="text-group">
                      <h4 className="text-heading">Work is the most important thing to do in life</h4>
                      <p className="text-paragraph">lorem qqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqqqqqqq qqqqqqqqqqqqqqqqqqqq</p>
                    </div>
                    <a href="#" className="btn btn-green-boundary">Learn More &rarr;</a>
                
                  </div>
                </div>

                <div className="col-1-of-2">
                  <div className="image-composition">
                    <img src={music1logo} alt="1" className="image-composition__photo image-composition__photo--p1"/>
                    <img src={music2logo} alt="2" className="image-composition__photo image-composition__photo--p2"/>
                    <img src={music3logo} alt="3" className="image-composition__photo image-composition__photo--p3"/>
                  </div>
                </div>

              </div>

            </div>
          </section>
    )
}

export default MusicEveryOne;
