import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table.js';
import Form from './Form.js';
import { useHistory } from 'react-router-dom';
let urlPosts = 'https://jsonplaceholder.typicode.com/posts';
export default function Posts() {
  // STATE (STORE POSTS) :
  let [posts, setPosts] = useState([]);
  let [id, setId] = useState();
  let [userId, setuserId] = useState();
  let [title, setTitle] = useState();
  let [body, setBody] = useState();
  let [isClick, setisClick] = useState(false);
  let [comments, setComments] = useState([]);
  let history = useHistory();

  //USE EFFECT FOR CALLING THE API INITIALLY (COMPONENTDIDMOUNT):

  useEffect(() => {
    getPosts();
  }, []);

  //GET DATA FROM API USING AXIOS :

  const getPosts = async () => {
    const { data } = await axios.get(urlPosts);
    setPosts(data);
  };

  //GET COMMENTS FROM AXIOS :
  const getComments = async idofPost => {
    const commentsUrl = `https://jsonplaceholder.typicode.com/posts/${idofPost}/comments`;
    let response = await axios.get(commentsUrl);
    setComments(response.data);

    setisClick(!isClick);
  };
  //DELETE POST USING AXIOS API :

  const deletePosts = async POSTID => {
    await axios.delete(`${urlPosts}/${POSTID}`);
    posts = posts.filter(post => post.id !== POSTID);
    setPosts(posts);
  };

  //CREATE POSTS USING AXIOS API  :

  const createPosts = async () => {
    let { data } = await axios.post(urlPosts, {
      userId,
      title,
      body
    });
    posts = [...posts];
    posts.push(data);
    setPosts(posts);
    setuserId(''), setTitle(''), setBody('');
  };

  //SELECT POST :

  const selectPosts = POSTs => {
    setId(POSTs.id);
    setuserId(POSTs.userId);
    setTitle(POSTs.title);
    setBody(POSTs.body);
  };

  //UPDATE POST :

  const updatePosts = async () => {
    let { data } = await axios.put(`${urlPosts}/${id}`, {
      userId,
      title,
      body
    });
    posts = [...posts];
    const postIndex = posts.findIndex(post => post.id === id);
    posts[postIndex] = data;
    setPosts(posts);
    setuserId(''), setTitle(''), setBody(''), setId('');
  };

  // HANDLE CHANGE :
  const handleChange = ({ target: { value, name } }) => {
    console.log([name], value);
    if (name === 'userId') {
      setuserId(value);
    } else if (name === 'title') {
      setTitle(value);
    } else {
      setBody(value);
    }
  };
  // HANDLE SUBMIT :
  const handleSubmit = event => {
    event.preventDefault();

    if (id) {
      updatePosts();
    } else {
      createPosts();
    }
  };

  //TOGGLE :
  const toggle = () => {
    setisClick(!isClick);
  };

  // HANDLE ROW CLICK :

  const handleRowClick = postid => {
    history.push(`/profile/${postid}`);
  };

  return (
    <>
      <div>
        <Form
          handleSubmit={handleSubmit}
          userId={userId}
          title={title}
          body={body}
          handleChange={handleChange}
        />

        <Table
          posts={posts}
          deletePosts={deletePosts}
          selectPosts={selectPosts}
          getComments={getComments}
          isClick={isClick}
          comments={comments}
          toggle={toggle}
          handleRowClick={handleRowClick}
        />
      </div>
    </>
  );
}
