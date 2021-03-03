

import React ,{Component} from 'react';
import Header from './components/Header/Header' ;
import Footer from './components/Footer/Footer' ;

// function App() {
//      return (
//      <div>
//               < Header/>
//              <h1> hello world</h1>
//             <Footer/>
//          </div>
//      ) ;
// }

class App extends Component {



   //   state = {
   //        name: "nader",
   //        lastname : "chargui",
   //         country   :"tunis",
   //        cp: "1200",
   //   }

     state = {
        products:[
           {id:1,productName:"laptop"},
           {id:2,productName:"tablet"}
        ]
    
 }
     render(){

          return (
               <div>
                        < Header/>
                       <h1> hello world</h1>
                      <Footer/>
                      <pre>

                         
                      </pre>
                      { this.state.name}
                   <pre>
                         
                      { this.state.lastname}
                   </pre>
                   <p>
                         
                      { this.state.cp}
                   </p>
                   <p>
                         
                         { this.state.country}
                      </p>
                   </div>
               ) ;
     }
}

export default App ;