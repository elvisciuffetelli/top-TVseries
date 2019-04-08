import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardItem from '../../components/cardItem';
import Typography from '@material-ui/core/Typography';
import Loader from '../../components/loader';
import urls from '../../backendApi/constUrls';
import TablePagination from '@material-ui/core/TablePagination';
import HttpClient from '../../backendApi/httpClient/httpClient';
import './TopRatedView.css';


class TopRatedView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topRatedCards: [],
      page: 1,
      totalPages: 0,
      loading: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.getTvShowsTopRatedList = this.getTvShowsTopRatedList.bind(this);
    this.forwardPagination = this.forwardPagination.bind(this);
    this.backPagination = this.backPagination.bind(this);
  }

  render() {

    return (
      <React.Fragment>
        <div className="heroUnit">
          <div className="heroContent">
            <Typography component="h1" variant="display2" align="center" color="textPrimary" gutterBottom>
              Top Rated series
            </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" paragraph>
              The top rated series by our users
            </Typography>
          </div>
        </div>
        <div className="cardsContainer">
          <Grid container spacing={40}>
            {
              this.state.loading ? 
                <Loader/> : 
              this.state.topRatedCards.map(card => (
              <Grid item sm={6} md={4} lg={3} key={card.id}>
                <CardItem item sm={6} md={4} lg={3}
                  heading={card.original_name || "Missing title"}
                  overView={card.overview || "Missing overview"}
                  image={`${urls.getDetails().IMAGE}${card.backdrop_path}` || require("../../assets/images/image-not-found.jpg")}
                  primaryLabel="Popularity"
                  primaryContent={card.popularity}
                  secondaryLabel="Average vote"
                  secondaryContent={card.vote_average}
                  terthiaryLabel="Vote count"
                  terthiaryContent={card.vote_count}
                  detailButton="Go to seasons detail"
                  handleClick={() => this.handleClick(card.id)}
                />
              </Grid>
            ))}
            <TablePagination
              className="table-pagination"
              component="div"
              count={this.state.totalPages || 0} //  total_elements
              labelRowsPerPage="" // this to hide label rows
              rowsPerPageOptions={[]} // this to hide rows option button , [5, 10, 25]
              rowsPerPage={20} // element per page
              page={this.state.page - 1 || 0}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
                onClick: this.backPagination
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
                onClick: this.forwardPagination
              }}
              onChangePage={() => null}
            />
          </Grid>
        </div>
      </React.Fragment>
    )
  }

  componentDidMount() {
    const params = this.state.page;
    this.getTvShowsTopRatedList(params);
  }

  forwardPagination() {
    let params = this.state.page;
    params += 1;
    this.getTvShowsTopRatedList(params);
  }

  backPagination() {
    let params = this.state.page;
    params -= 1;
    this.getTvShowsTopRatedList(params);
  }

  handleClick(id) {
    this.props.history.push(`/seasons/${id}`);
  }

  getTvShowsTopRatedList(params) {
    HttpClient(urls.getTvShows(params).TOP_RATED)
    .then(res => {
      const topRatedCards = res.results;
      const totalPages = res.total_pages;
      const page = res.page;
      this.setState({
        topRatedCards,
        totalPages,
        page,
        loading: false
      });
    })
  }
}

export default TopRatedView;