import React, { Component } from 'react';

import "./Footer.css";


// function Footer() {
//     return (
//         <div  className="foo">
//             <footer>

//                 this is footer
//             </footer>
//         </div>
//     );
// }


class Footer extends Component {
    state = {
        nemeproduct: "pen",
        desc: "this is product is good",
    }
    render() {

        return (
            <div className="foo">
                <footer  >

                    this is some  works   with library <span>  supported by company <a href="https://facebook.com">facebook</a></span>
                </footer>
                <div className="container">
                    hello nader chargui
                     <br />

                     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#" className="logo">Nader Chargui</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>

    </ul>
  </div>
</nav>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                          </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                               </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th> name of product</th>
                                            <th> description</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">{this.state.nemeproduct}</td>
                                            <td>{this.state.desc}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td scope="row"></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
        );      
    } 
}



export default Footer ;