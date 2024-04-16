import { useState } from 'react'
import './App.css'
import MainPage from './mainpage/MainPage'
import Header from './common/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainPage />
    </>
  )
}

export default App
// import React, { Component } from "react";
// import axios from "axios";
// import './App.css';class App extends Component{
//   constructor() {
//     super();
//     this.state = {
//       url: 'localhost:8000',
//     };this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }handleChange(event) {
//     this.setState({url: event.target.value})
//   }
  
//   handleSubmit(event) {
//     console.log(this.state.url)

//     axios
//       .post("/api/url_checker", {'url': this.state.url})
//       .then(res => {
//         alert(res.data)
//       })
//     event.preventDefault();
//   };
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <form onSubmit={this.handleSubmit}>
//             <label>
//                 url:
//                 <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
//             </label>
//               <input type="submit" value="Check URL" />
//           </form>
//         </header>
//       </div>
//     );
//   }
// }
// export default App;