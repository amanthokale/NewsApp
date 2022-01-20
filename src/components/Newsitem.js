import React, { Component } from 'react';

export default class App extends Component {
  render() {
    let { title, desc, imageurl, newsurl, publishedAt, author,source} = this.props;
    return (
      <>
        <div className="my-3">
          <div className="card">
          <div className="badgee">
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
            <img src={imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}...</p>
              <a href={newsurl} target="_blank" className="btn btn-dark btn-sm">
                Read more
              </a>
              <p className="card-text">
                <small className="text-muted">
                  By {author}&nbsp;on &nbsp;{new Date(publishedAt).toGMTString()}
                  <br />

                </small>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
