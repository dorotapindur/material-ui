import './App.css';
import { CssBaseline, Button, IconButton, Icon, Container, Card, CardActions, CardContent, Typography, CardHeader, Avatar, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  media: {
    height: 200
  },
  readMore: {
    marginLeft: "auto",
    color: "purple"
  },
  avatar: {
    backgroundColor: "purple"
  },
  cardMargin: {
    margin: 20
  }
})

function ArticleCard(props) {
  const classes = useStyles();
  const author = "John Smith";
  const imageUrl = "https://picsum.photos/600/400";
  const arcticleTitle = "Clickbait title";
  const articleFirstSentence = "First sentence - something very interesting..."
  return (
    <Card className={classes.cardMargin}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>JD</Avatar>}
        title={author}
        subheader="written 01-01-2021"
      />
      <CardMedia
        className={classes.media}
        component="img"
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="h6" component="h2">{arcticleTitle}</Typography>
        <Typography variant="body2">{articleFirstSentence}</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>share</Icon>
        </IconButton>
        <Button className={classes.readMore} variant="outlined" color="primary">Read more</Button>
      </CardActions>
    </Card>
  )
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
