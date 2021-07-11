import React from 'react';
import Modal from './Modal.js';
import './style.css';
import { useState } from 'react';
import './css/table.css';
import DeleteIcon from '@material-ui/icons/Delete';
export default function Table({
  posts,
  deletePosts,
  selectPosts,
  getComments,
  isClick,
  comments,
  toggle,
  handleRowClick
}) {
  const [selectedComment, setselectedComment] = useState();

  return (
    <div className="container ">
      <table class="table table-dark ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">POST ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">BODY</th>
            <th /> <th /> <th />
          </tr>
        </thead>
        <tbody>
          {posts.map(post => {
            return (
              <>
                <tr>
                  <th
                    className="viewProfile"
                    scope="row"
                    className="viewProfile"
                  >
                    {post.id}
                  </th>
                  <td className="viewProfile">{post.userId}</td>
                  <td className="viewProfile">{post.title}</td>
                  <td
                    onClick={() => {
                      handleRowClick(post.userId);
                    }}
                  >
                    {post.body}
                  </td>

                  {/* UPDATE BUTTON : */}
                  <td>
                    <button
                      type="button"
                      class="btn btn-light"
                      onClick={() => {
                        selectPosts(post);
                      }}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-light"
                      onClick={() => {
                        getComments(post.id);
                        setselectedComment(post.id);
                      }}
                    >
                      COMMENTS
                    </button>
                  </td>
                  {/* DELETE BUTTON : */}
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        deletePosts(post.id);
                      }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
                <br />

                {isClick && selectedComment === post.id ? (
                  <tr>
                    <Modal data={comments} toggle={toggle} />
                  </tr>
                ) : (
                  <div />
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
