import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('')
  const {user, setUser} = useContext(AuthContext)
  const firebase = useContext(FirebaseContext)
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const date = new Date()
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref}) => {
      ref.getDownloadURL().then((url) =>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name, 
          category, 
          price, 
          url,
          userId: user.uid, 
          createdAt: date.toDateString()
        })
        history.push('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" 
             value={price}
             onChange={(e) => setPrice(e.target.value)}
            type="number" id="fname" 
            name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" 
          src={image ? URL.createObjectURL(image) : ''}
          style={{display: !image && 'none'}}
          width="200px" height="200px"></img>
          <form>
            <br />
            <input type="file" onChange={(e) => setImage(e.target.files[0])}/>
            <br />
            <button onClick={(e) => handleSubmit(e)} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
