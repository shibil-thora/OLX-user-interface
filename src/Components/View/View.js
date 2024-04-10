import React, { useContext, useEffect, useState } from 'react';
import {PostContext} from '../../store/PostContext'
import './View.css';
import { FirebaseContext } from '../../store/FirebaseContext';

function View() {
  const [userDetails, setUserDetails] = useState()
  const {postDetails, setPostDetails} = useContext(PostContext)
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    if (postDetails) {
    const {userId} = postDetails 
    firebase.firestore().collection('users').where('id', '==', {userId}).get().then((res) => {
      res.forEach(doc => {
        setUserDetails(doc.data())
      })
    })}
  }, [])

  return (
    
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails ? postDetails.url: ''}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails ? postDetails.price: ''} </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        { userDetails &&
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
        }
        
      </div>
    </div>
  );
}
export default View;
