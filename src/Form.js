import React from 'react';
import './css/Form.css';
export default function Form({
  handleSubmit,
  userId,
  title,
  body,
  handleChange
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4" />
        <div className="col-lg-4">
          <form className="form_border">
            <div class="mb-3">
              <label class="form-label">
                <b>USER ID : </b>
              </label>
              <input
                type="text"
                class="form-control"
                value={userId}
                onChange={handleChange}
                name="userId"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">
                <b>TITLE : </b>
              </label>
              <input
                type="text"
                class="form-control"
                value={title}
                onChange={handleChange}
                name="title"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">
                <b>BODY : </b>
              </label>
              <input
                type="text"
                class="form-control"
                value={body}
                onChange={handleChange}
                name="body"
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-light"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-4" />
      </div>

      <br />
    </div>
  );
}
