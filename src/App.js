import React from "react";
import './App.css';
import { CssBaseline, Button, IconButton, Icon, Container, Card, CardActions, CardContent, Typography, CardHeader, Avatar, CardMedia } from "@material-ui/core";

class ArticleCard extends React.Component {
  state = {
    isLiked: false
  }
  handleLike = (event) => {
    this.toggleLike();
  }
  toggleLike = () => {
    this.setState(
      function(prevState) {
        const isLiked = !prevState.isLiked;
        return {
          isLiked
        }
      }
    )
    console.log(this.state.isLiked);
  }
  render() {
    const author = "John Smith";
    const imageUrl = "https://picsum.photos/id/1078/600/400";
    const arcticleTitle = "Clickbait title";
    const articleFirstSentence = "First sentence - something very interesting..."
    const { isLiked } = this.state;
    let likeStyle = {};
    if (isLiked) {
      likeStyle = {
        backgroundColor: "red"
      }
    } else {
      likeStyle = {}
    }
    return (
      <Card style={{margin: 20}}>
        <CardHeader
          avatar={<Avatar style={{backgroundColor: "purple"
            }}>JD</Avatar>}
          title={author}
          subheader="written 01-01-2021"
        />
        <CardMedia
          style={{height: 200}}
          component="img"
          image={imageUrl}
        />
        <CardContent>
          <Typography variant="h6" component="h2">{arcticleTitle}</Typography>
          <Typography variant="body2">{articleFirstSentence}</Typography>
        </CardContent>
        <CardActions>
          <IconButton style={likeStyle} onClick={this.handleLike} >
            <Icon>favorite</Icon>
          </IconButton>
          <IconButton>
            <Icon>share</Icon>
          </IconButton>
          <Button
            style={{marginLeft: "auto", color: "purple"}}
            variant="outlined"
            color="primary">Read more</Button>
        </CardActions>
      </Card>
    )
  }
}

function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Container>
          <ArticleCard />
          <ArticleCard />
        </Container>
      </CssBaseline>
    </div>
  );
}

export default App;
