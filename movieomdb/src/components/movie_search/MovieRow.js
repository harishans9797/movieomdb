import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



export default class MoviRow extends React.Component{

    render() {

        return(

            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <table className="table table-hover" key={this.props.movie.imdbID}>

                    <tbody>
                        <tr>
                            <td> <p><img alt="poster" className="img-thumbnail" width="300" height="150" src={this.props.movie.Poster}></img> </p> 
                                <p><h3>{this.props.movie.Title}</h3></p>
                                <p><h5>{this.props.movie.Year}</h5></p>
                                <Link to={`/details/${this.props.movie.imdbID}`} ><button className="btn btn-secondary" onClick={this.clearSearch}>Details</button></Link>
                            </td>  
                             
                            
                        </tr>
                    </tbody>
            </table>
            </div>
         
            
        )

    }
}