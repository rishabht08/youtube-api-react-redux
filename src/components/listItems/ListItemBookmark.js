import React from "react";
import { connect } from "react-redux"


class ListItemBookmark extends React.Component {
    onVideoLinkClickHandler(index) {
        return this.props.dispatch({
            type: "play_clicked_recent",
            payLoad: this.props.bookmarked[index].id.videoId,
        })
    }
    onBookMarkRemove(index){
        return this.props.dispatch({
            type:"remove_from_bookmark",
            payLoad : index
        })
    }
    render() {
       
        return (
            <div>
                <div>

                    {this.props.bookmarked.map((item, index) =>
                        <div className="row search-items">
                            <div className="col-sm-4">
                                <img src={item.snippet.thumbnails.default.url} />
                            </div>
                            <div className="col-sm-6">
                                <div className="title">
                                    <a href="#"><p onClick={() => this.onVideoLinkClickHandler(index, this.props.current)}>{item.snippet.title}</p></a>
                                </div>
                                <span>{item.snippet.channelTitle}</span></div>
                            <div className="col-sm-2">
                            <i className="fa fa-close" style={{"fontSize":"20px", "color":"red"}} onClick={()=>this.onBookMarkRemove(index)}></i>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        bookmarked: state.bookmarked
    }

}
export default connect(mapStateToProps)(ListItemBookmark);