import React from 'react';
import $ from 'jquery';
import MovieRow from './MovieRow.js'
import 'bootstrap/dist/css/bootstrap.css';


export default class Search extends React.Component {

    constructor(props){
        super(props)
        this.state = {}
        this.performSearch("")
    }

    

    performSearch(searchTerm){
        const urlString = "https://www.omdbapi.com/?apikey=71fd61eb&s=" + searchTerm;
        $.ajax({

            url: urlString,
            success: (searchResults) =>{
                
                var movieRows = [];

                $.each(searchResults.Search, function(key, movie){
                    
                    console.log(movie.imdbID);
                    const movieRow = <MovieRow movie={movie}/>
                    movieRows.push(movieRow)

                })
                
                this.setState({rows: movieRows})

            },
            error: (xhr, status, err) =>{
                console.log("Error");
            }

        })
    }


    searchChangeHandler(event){
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
    }


    render(){
        return(
            <div className="container">
                <input className="form-control" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter a movie"></input>
            
                {this.state.rows}
            </div>

        )
    }


}