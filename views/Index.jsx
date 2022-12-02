const React = require("react");
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#154360",
};

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div style={myStyle}>
        <hr></hr>
        <h1 align="center">
          All of The Pokemon are here! <br></br> What are they for?
        </h1>
        <hr></hr>
        <ul>
          {pokemons.map((pokemon, i) => {
            return (
              <li>
                To know more Click here{" "}
                <a href={`/pokemon/${i}`}>
                  {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                </a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
