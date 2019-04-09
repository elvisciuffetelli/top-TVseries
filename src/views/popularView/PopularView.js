import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardItem from '../../components/cardItem';
import Typography from '@material-ui/core/Typography';
import TablePagination from '@material-ui/core/TablePagination';
import Loader from '../../components/loader';
import urls from '../../backendApi/constUrls';
import HttpClient from '../../backendApi/httpClient/httpClient';
import './PopularView.css';


class PopularView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popularCards: [],
      page: 1,
      totalPages: 0,
      loading: true,
    };

    this.handleClick = this.handleClick.bind(this);
    this.getTvShowsPopularList = this.getTvShowsPopularList.bind(this);
    this.forwardPagination = this.forwardPagination.bind(this);
    this.backPagination = this.backPagination.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="heroUnit">
          <div className="heroContent">
            <Typography component="h1" variant="display2" align="center" color="textPrimary" gutterBottom>
              Popular Series
            </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" paragraph>
              The most popular series at the moment
            </Typography>
          </div>
        </div>
        <div className="cardsContainer">
          <Grid container spacing={40}>
            {
              this.state.loading ? 
                <Loader/> : 
              this.state.popularCards.map(card => (
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
              count={this.state.totalPages || 0}
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
    this.getTvShowsPopularList(params);
  }

  handleClick(id) {
    this.props.history.push(`/seasons/${id}`);
  }

  forwardPagination() {
    let { page } = this.state;
    page += 1;
    this.getTvShowsPopularList(page);
  }

  backPagination() {
    let params = this.state.page;
    params -= 1;
    this.getTvShowsPopularList(params);
  }

  getTvShowsPopularList(params) {
    HttpClient(urls.getTvShows(params).POPULAR)
     .then(res => {
      const popularCards = res.results;
      const totalPages = res.total_pages;
      const page = res.page;
      this.setState({
        popularCards,
        totalPages,
        page,
        loading: false
      });
    })
  }
}

export default PopularView;