import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav/Nav';
import BookService from './service/book-service';
import EmailInput from './small-demos/EmailInput'

// export default class App extends Component {
//   state = {
//     email: 'john.smith@gmail.com',
//     name :'john smith'
//   };
//   handleSerachBooks = (searchText) => {
//     BookService.loadBooks(searchText);
//   }
//   changeName = () => {
//     this.setState({name: 'mary.smith'});
//   }
//   changeEmail = () => {
//     this.setState({email: 'mary.smith@gmail.com'});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Nav onSearchBooks={this.handleSerachBooks} />
//         <div className="section no-pad-bot">
//           <div className="container">
//             <h1 class="header orange-text">Your Favourite Books</h1>
//             <div>Email of {this.state.name}: </div>
//             <EmailInput email={this.state.email} key={this.state.email} />
//             <div className="Nav-button col s2 waves-effect btn light-blue" onClick={this.changeName}>
//               <i className="material-icons">search</i>
//             </div>
//             <div className="Nav-button col s2 waves-effect btn light-blue" onClick={this.changeEmail}>
//               <i className="material-icons">email</i>
//             </div>

//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

function App() {
  function handleSerachBooks(searchText) {
    BookService.loadBooks(searchText);
  }
  return (
    <React.Fragment>
      <Nav onSearchBooks={handleSerachBooks} />
      <div className="section no-pad-bot">
        <div className="container">
          <h1 class="header orange-text">Your Favourite Books</h1>


        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
