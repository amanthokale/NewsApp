import React, { Component } from 'react';
import Newsitem from './Newsitem';
import propTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export default class App extends Component {
  static defaultProps = {
    country:"in",
    pagesize:5,
    category:"general",
    page:1,
  };
  static propTypes = {
    country: propTypes.string,
    pagesize:propTypes.number,
    category:propTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
    };
  }

    async updatenews(){
    this.props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
 this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();

    this.setState({ articles: this.state.articles.concat(parseddata.articles),
		    totalresults:parseddata.totalResults,
		    loading:false
		    });
        this.props.setProgress(100);
  }



    async componentDidMount(){
//   this.setState({ loading: true });
   this.props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    // let a = JSON.parse(parseddata);
    console.log(parseddata);
    this.setState({ articles: parseddata.articles });
    this.props.setProgress(100);
  //  this.setState({ loading: false });
  }

fetchMoreData=async()=>{

	const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
this.setState({page:this.state.page+1});
    let data = await fetch(url);
    let parseddata = await data.json();

    this.setState({ articles: this.state.articles.concat(parseddata.articles),
		    totalresults:parseddata.totalResults,
		    });
}
capitalizeFirstLetter(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  render() {
    return (
      <>

            <h1 id="heading" className="text-center">PTownNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>

           <div className="spinner text-center">
              {this.state.loading && <Spinner/>}
            </div>
<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.totalResults}
          loader={<Spinner/>}
        >
<div className="container">
	<div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                    <Newsitem
                      title={element.title ? element.title : ''}
                      imageurl={element.urlToImage}
                      desc={element.description ? element.descrription : ''}
                      newsurl={element.url}
                      publishedAt={element.publishedAt}
                      author={element.author?element.author:"unknown"}
		      source={element.source.name} />
                  </div>
            })}

          </div>
            </div>

    </InfiniteScroll>

</>

  )
}
}
//{this.state.page<=this.state.totalResults/this.state.pagesize?
