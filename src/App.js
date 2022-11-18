import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { mockData } from "./data"
function App() {
  const [data, setData] = useState([]);
  const [flagAll, setFlagAll] = useState(false);
  const [flagElectronics, setFlagElectronics] = useState(false);
  const [flagMusic, setFlagMusic] = useState(false);
  const [flagBooks, setFlagBooks] = useState(false);

  useEffect(() => {
    setData(mockData);
  }, [])
  const handleAll = (e) => {
    setFlagAll(true)
    setData(mockData);
    setFlagElectronics(false);
    setFlagBooks(false);
    setFlagMusic(false);
  }
  const handleElectronics = (e) => {
    let filter = mockData.filter((x) => x.type === "electronics")
    setData(filter);
    setFlagElectronics(true);
    setFlagAll(false);
    setFlagMusic(false);
    setFlagBooks(false);
    console.log(data);
  }
  const handleBooks = (e) => {
    let filter = mockData.filter((x) => x.type === "book")
    setFlagBooks(true);
    setData(filter);
    setFlagAll(false);
    setFlagElectronics(false);
    setFlagMusic(false);
    console.log(data);
  }
  const handleMusic = (e) => {
    let filter = mockData.filter((x) => x.type === "music");
    setFlagMusic(true);
    setData(filter);
    setFlagAll(false);
    setFlagBooks(false);
    setFlagElectronics(false);

  }
  return (
    <div className="App" >
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3} lg={3}>
            <button className={!flagAll ? "button" : "button green"} onClick={handleAll}>All</button>
          </Grid>
          <Grid item md={3} lg={3}>
            <button className={!flagElectronics ? "button" : "button green"} onClick={handleElectronics}>Electronics</button>
          </Grid>
          <Grid item md={3} lg={3}>
            <button className={!flagBooks ? "button" : "button green"} onClick={handleBooks}>Books</button>
          </Grid>
          <Grid item md={3} lg={3}>
            <button className={!flagMusic ? "button" : "button green"} onClick={handleMusic}>Music</button>
          </Grid>
        </Grid>

      </Container>
      <Container>
        <Grid container spacing={2} style={{ marginTop: "2px" }}>
          {data.map((x) => <Grid item md={3} lg={3} display={"flex"} justifyContent={"center"}><div className='cardContainer'>
            <div className="cardBody">
              <img src={x.image} alt="image" className='imageIcon' />
              <p className='title'>{x.title}</p>
            </div>
          </div></Grid>)}
        </Grid>
      </Container>

    </div>
  );
}

export default App;
