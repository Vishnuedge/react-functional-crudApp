import React from 'react';
import './css/Home.css';

export default function Home() {
  return (
    <div>
      <div className="container text-center text-white">
        <h1 className="header">THIS SITE IS MADE WITH</h1>
        <div className="row text-center">
          <div className="col-lg-6">
            {/* HTML */}
            <div>
              <div class="card m-5">
                <div class="card-body">
                  <img src="https://img.icons8.com/color/144/4a90e2/html-5--v1.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* BOOTSTRAP */}
            <div>
              <div class="card m-5">
                <div class="card-body">
                  <img src="https://img.icons8.com/color/144/4a90e2/bootstrap.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-lg-6">
            {/* JAVASCRIPT */}

            <div>
              <div class="card m-5">
                <div class="card-body">
                  <img src="https://img.icons8.com/color/144/4a90e2/javascript--v2.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/* REACT */}
            <div class="card m-5">
              <div class="card-body">
                <img src="https://img.icons8.com/dotty/144/4a90e2/react.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
