import React from 'react';

import './css/modal.css';

export default function Modal({ data, toggle }) {
  return (
    <>
      <div className="container-fluid center bg-dark ">
        {data.map(comment => {
          return (
            <div className="container bg-light ">
              <div className="row  ">
                <div className="col">
                  <div class="card mb-2">
                    <div class="card-body text-dark">
                      <h5 class="card-title">{comment.name}</h5>
                      <h6 className="badge bg-secondary">COMMENTS : </h6>
                      <p class="card-text">{comment.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="text-center mt-2">
          <button className="btn btn-secondary" onClick={toggle}>
            CLOSE
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}
