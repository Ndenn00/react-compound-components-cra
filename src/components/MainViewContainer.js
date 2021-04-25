import React, {
  useState,
} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CompoundContent from './CompoundContent'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  components: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Bar = ({ classes }) => (
  <>
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Compound Components
    </Typography>
      </Toolbar>
    </AppBar>
  </>
);

const Banner = ({ classes }) => (
  <div className={classes.heroContent}>
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Component layout
    </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Using Material UI to create a structure for a page to hold some components.
    </Typography>
    </Container>
  </div>
);

const MainViewContainer = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((open) => !open);

  return (
    <>
      <CssBaseline />
      <Bar classes={classes} />
      <main>
        <Banner classes={classes} />
        <Container align="center" className={classes.compoundContainer}>
          <Button onClick={toggleOpen}>Show Content</Button>
          {isOpen ? (
            <CompoundContent>
              <CompoundContent.Header>This is a basic compound</CompoundContent.Header>
              <CompoundContent.Body>
                <p>Inside it is some information</p>
                <p>You can render whatever JSX you want in here</p>
              </CompoundContent.Body>
              <CompoundContent.Body>
                More Body, keep adding
              </CompoundContent.Body>
              <CompoundContent.Actions>
                <Button onClick={toggleOpen}>Cancel</Button>
                <Button onClick={() => alert("You have accepted!")}>Accept</Button>
              </CompoundContent.Actions>
            </CompoundContent>) : 
            null}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Compound Components
        </Typography>
      </footer>
    </>
  );
};

export { MainViewContainer };
