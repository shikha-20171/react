import Card from './Card';
function App(){
  return(
    <div id = "app">
<h1>Available Experts</h1>
<Card name = "Shikha Gour">
  <p>Shikha is a professor of computer science at the university of america.
     </p>
     <p>
      <a href="mailto:gour@gmail.com">Email shikha </a>
     </p>
</Card>
<Card name= "Nidhi Gour">
  <p>
    nidhi is a professor of computer science at the university of california .
  </p>
  <p>
    <a href="mailto:gour@gmail.com">Email nidhi</a>
  </p>
 </Card>

    </div>
  );
}
export default App;