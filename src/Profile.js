import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import './css/Profile.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

export default function Profile() {
  const classes = useStyles();
  const { id } = useParams();
  const [profileData, setProfileData] = useState([]);
  const [image, setImage] = useState([]);

  const getProfile = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    setProfileData(data);
  };
  const getImage = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );

    setImage(data);
  };

  useEffect(() => {
    getProfile();
    getImage();
  }, []);

  return (
    <div>
      <div className="container my-5">
        <div class="card">
          <div className="row">
            <div className="col-lg-6">
              <div class="card-body">
                <div className="row ">
                  <div className="col text-center">
                    <div className={classes.root}>
                      <Avatar
                        alt="Remy Sharp"
                        src={image.thumbnailUrl}
                        className={classes.large}
                      />
                    </div>
                    <div>
                      <h4>{profileData.name}</h4>
                      <p>{profileData.email}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div class="card-body">
                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="row">NAME </th>
                      <td>{profileData.name}</td>
                    </tr>
                    <tr>
                      <th scope="row">COMPANY </th>
                      <td>{profileData.username}</td>
                    </tr>
                    <tr>
                      <th scope="row">EMAIL </th>
                      <td>{profileData.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">PHONE </th>
                      <td>{profileData.phone}</td>
                    </tr>
                    <tr>
                      <th scope="row">WEBSITE </th>
                      <td>{profileData.website}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
