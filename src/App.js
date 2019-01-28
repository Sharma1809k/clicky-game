import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./components/Container";
import images from "./images.json";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images ,
    score: 0,
    highScore: 0,
    message: "" , 
  alreadyClicked:[],
 
  };
  //Shuffle the images
  shuffleArray = (images) => {
    for (let i = images.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
}

//Click function
  clickedImg = idClicked => {
  
  const shuffledArray = this.shuffleArray(images);

  // new state of images is shuffled array everytime any image is clicked

  this.setState({images: shuffledArray});
 
  // check if alreadyClicked array have the id that has been clicked then set state of score , alreadyClicked and send message
    if (this.state.alreadyClicked.includes(idClicked)) {
      this.setState({ score: 0, alreadyClicked: [], message: "Incorrect!! Click an image to start again!", clicked: "true"});
    }
  else {
    // if not then concat it in alreadyClicked array then keep adding score 
    this.setState({
      alreadyClicked: this.state.alreadyClicked.concat([idClicked]),
      score: this.state.score + 1,
    //  highScore: this.state.highScore +1 ,
      message: "Correct!!",
      clicked: "false"
    });
    
  }
  //if score is higher than highScore then set state of highScore as new score
  if (this.state.score > this.state.highScore) {
    this.setState({ highScore: this.state.score });
  }
}
  render() {
    return (
      <Wrapper>
        <Navbar>
        <nav 
    className="navbar">
      <a href="/">Clicky Game!</a>
    <p className = "message"> {this.state.message}</p>
      <p className = "score"> Score : {this.state.score}  ||  Highscore : {this.state.highScore}</p>
    </nav>
</Navbar>
        <Title>Click on an image to earn points, but don't click on any more than once!</Title>
        <Container>
        {this.state.images.map(image => (
          <FriendCard
            clickedImg={this.clickedImg}
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
        </Container>
      </Wrapper>
    );
  }
}
export default App;
