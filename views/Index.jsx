const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

//check the code form yesterday lecture

export default {
  name: "app",
  data() {
    return {
      myStyle,
    };
  },
  components: {
    //check the code form yesterday
  },
};
class MyFirstComponent extends React.Component() {
  return (
    <div style={myStyle}>My First React Component!</div>;
  }
}
module.exports = Index;
