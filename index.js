function Navbar() {
    const { user } = useContext(UserContext);
    console.log(user);
    return <div>{user}</div>;
  }
  

ReactDOM.render(<h1>Hello, Everyone. . . </h1>, document.getElementById("root"))
ReactDOM.render(<p>we are creating webpages,</p>, document.getElementById("root2"))
ReactDOM.render(<p>we are creating webpages,</p>, document.getElementById("root3"))
ReactDOM.render(<Button onClick={clickMe}> Button </Button>, document.getElementById("Button1"))