import React, {useState} from 'react';
import './App.css';

function App() {
  const[catPics, setCatPics] = useState([])

  const addCatToScreen = () => {
    let catPicsNewArray = catPics.slice()
    fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(data => {
        catPicsNewArray.push(data.file)
        setCatPics(catPicsNewArray)
      }) 
  }
  const deleteImg = (i) => {
    let catImgs = catPics.slice()
    delete catImgs[i]
    setCatPics(catImgs)
  }
  const newImgTags = catPics.map((url, i) => <img key={i} onClick={()=>deleteImg(i)} src={url}/>)

  window.onload = addCatToScreen

  return (
    <div className="App">
      {newImgTags}
      <button onClick={addCatToScreen}>Another one!</button>
    </div>
  );
}

export default App;
