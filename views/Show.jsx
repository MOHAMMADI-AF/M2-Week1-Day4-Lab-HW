const React = require("react");

const myStyle = {
  color: "#154360",
  backgroundColor: "#ffffff",
};

class Show extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div style={myStyle}>
        <h1>Gotta Catch 'Em All!</h1>
        <h2>{pokemons.name}</h2>
        <img src={pokemons.img.concat(".jpg")} />
        <br></br>
        <a href={`/pokemon/`}> Back to Home</a>
      </div>
    );
  }
}
module.exports = Show;
