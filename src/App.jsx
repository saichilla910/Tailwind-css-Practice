import "./App.css";
import Effects from "./Effect(hover,etc)";
import Layout from "./Layout";
import Float from "./Float";
import Table from "./Table";
import Positions from "./Positions";
import Fonts from "./Fonts";
import Flex from "./Flex";
import Grid from "./Grid";
import Filters from "./Filters";
import Transeforms from "./Transeforms";
import TransformationsAndAnimations from "./TransformationsAndAnimations";
function App() {
  return (
    <>
      <h1>Effects(hover,active,ects)</h1>
      <Effects />
      <hr></hr>
      <Layout></Layout>
      <hr></hr>
      <Table></Table>
      <hr></hr>
      <Float></Float>
      <hr></hr>
      <p className="mb-10"></p>
      <Positions></Positions>
      <hr></hr>
      <Fonts></Fonts>

      <hr></hr>
      <Flex></Flex>
      <hr></hr>
      <Grid></Grid>
      <hr></hr>
      <Filters></Filters>
      
      <p className="mb-20"></p>
      <TransformationsAndAnimations></TransformationsAndAnimations>

      <hr>
      </hr>
      <Transeforms></Transeforms>

    </>
  );
}

export default App;
