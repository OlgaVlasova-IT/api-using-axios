import {Component} from "react"
import './App.css';
import axios from "axios";

class App extends Component  {
  constructor() {

    super()
    this.state={
       users: [],
       posts: []
      
    }
  }
componentDidMount() {

  axios.get("https://jsonplaceholder.typicode.com/users" )
  .then( res => {const users = res.data
  this.setState({users}) 
})


axios.get("https://jsonplaceholder.typicode.com/posts")
.then( res => { this.setState({posts: res.data}); 
})


}
 
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
     {this.state.users.map(( item, index) => (
     
     <li key={index}> <h3>User {index+1}</h3>
     <p>name: {item.name} <span>
     email: {item.email} </span>
     <span>
     city: {item.address.city}</span></p>
     <ul>
       {this.state.posts.map((item, index1) => ( (index === item.userId-1 ? <div> <p key={index1}>{item.title}</p></div> : <p className="noDisplay" key={index1}></p>)) ) }
     
     </ul>

     </li> ))}
     
     
     
     
        
     </ul>
      
      </header>
    </div>
  );
}}

export default App;
