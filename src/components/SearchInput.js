import React from "react";
import { connect } from "react-redux"
import axios from "axios";
const API_KEY = "AIzaSyCYP-MYEkYjyR9WsoiwjacWd8nNYSQFzrA";


class SearchInput extends React.Component {

  onChangeHandler(event) {

    this.props.dispatch({
      type: "search_value",
      payLoad: event.target.value
    })

  }
  async getVideosFromSearch(query) {
    let request = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=15&key=${API_KEY}`)
      .then((response) => {
        return response.data.items;
      })
    return request

  }
  OnClickHandler() {
    if (this.props.search) {
      this.getVideosFromSearch(this.props.search).then(res => {
        console.log(res)
        this.props.dispatch({
          type: "load_videos",
          payLoad: res
        })
      })


    }
  }
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" value={this.props.search} onChange={(e) => this.onChangeHandler(e)} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={() => this.OnClickHandler()}>Search</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    search: state.search
  }
}
export default connect(mapStateToProps)(SearchInput);