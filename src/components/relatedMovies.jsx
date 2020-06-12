import React, { Component } from 'react'
import { fetchMovieDetail, fetchCastList, fetchTrailerList} from '../actions';
import { Grid, Row, Col} from 'react-bootstrap/lib';
import {Link} from 'react-router';
import Poster from './Poster';



export default class RelatedMovies extends Component {
    render() {
        const style={
            display: 'flex',
            flexWrap: 'wrap'
          }
          let relatedMovieList = this.props.relatedMovieList.filter(function(movie) {
            return movie.poster_path != null;
          }).map(function(movie) {
              return(
                  <Col xs={6} sm={4} md={3} key={movie.results} >
                  <Link to={'/movie/'+movie.id+'/similar'} ><Poster info id={movie.results.id} path={movie.poster_path} title={movie.title} voteAverage={movie.vote_average} release_date={movie.release_date} responsive /></Link>
                </Col>
              );
          });
      
          return(
            <Grid fluid={false}>
              <Row style={style}>
                {relatedMovieList}
              </Row>
            </Grid>
        )
    }
}

