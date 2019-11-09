import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';


export default class MovieDetails extends React.Component{
    

    state = {
        loading: true,
        movies : ""
        
    }

    constructor(props){
        super(props)
        this.state = {}
        this.findDetails()
    }

    

    findDetails(){
        let imdbID = this.props.match.params.id;
        console.log(this.props.match.params.id);
        const urlString = "http://www.omdbapi.com/?apikey=71fd61eb&i=" + imdbID;
        $.ajax({

            url: urlString,
            success: (searchResults) =>{
                this.setState({movies : searchResults, loading: false})
            },
            error: (xhr, status, err) =>{
                console.log("Error");
            }

        })
    }

    render(){
        return (
        <div className="container">
            {this.state.loading || !this.state.movies ?(
                <div>loading...</div>
            ): (
                <div className="row"> 
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <h3>Name: {this.state.movies.Title}</h3>
                    <h5>Year: {this.state.movies.Year}</h5>
                    <img alt="poster" className="img-thumbnail" width="400" height="200" src={this.state.movies.Poster}/>
                    <h5>Directors: {this.state.movies.Director}</h5>
                    <h5>Actors: {this.state.movies.Actors}</h5>
                    <p>Plot: {this.state.movies.Plot}</p>
                    <h5>Awards: {this.state.movies.Awards}</h5>
                    </div>
                   
                </div>
            )}
        </div>);

        
    }
}