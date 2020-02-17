import React from "react";
import { connect } from "react-redux"


class ListItemRecent extends React.Component {
    onVideoLinkClickHandler(index) {
                  
           return this.props.dispatch({
                type: "play_clicked_recent",
                payLoad: this.props.recent[index].id.videoId,
            })
    }
    onBookmarkClick(index) {
        return this.props.dispatch({
            type: "add_to_bookmark",
            payLoad: this.props.recent[index]
        })
    }

    isPresentInBookMark(recent){
        let bookmarked = this.props.bookmarked;
        for(let i = 0 ; i<bookmarked.length ;i++){
            if(bookmarked[i].id.videoId == recent.id.videoId){
                return true;
            }
        }
        return false;
    }
    render() {
       console.log("props--->",this.props)
        return (
            <div>
                <div>
                    {this.props.recent.map((item, index) =>
                        <div className="row search-items">
                            <div className="col-sm-4">
                                <img src={item.snippet.thumbnails.default.url} />
                            </div>
                            <div className="col-sm-6">
                                <div className="title">
                                    <a href="#"><p onClick={() => this.onVideoLinkClickHandler(index)}>{item.snippet.title}</p></a>
                                </div>
                                <span>{item.snippet.channelTitle}</span></div>
                            <div className="col-sm-2">
                                <i className={this.isPresentInBookMark(item)?"fa fa-bookmark" : "fa fa-bookmark-o"}></i>
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
        recent: state.recent,
        bookmarked : state.bookmarked
    }

}
export default connect(mapStateToProps)(ListItemRecent);