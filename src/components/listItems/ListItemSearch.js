import React from "react";
import { connect } from "react-redux"


class ListItemSearch extends React.Component {
    onVideoLinkClickHandler(index) {
            return this.props.dispatch({
                type: "play_clicked",
                payLoad: this.props.videos[index].id.videoId,
                recent: this.props.videos[index]
            })
    }
    onBookMarkRemove(index){
        return this.props.dispatch({
            type:"remove_bookmark_from_search",
            payLoad : index
        })
    }
    onBookmarkClick(index,event) {
        if(event.target.className == "fa fa-bookmark"){
                  return this.onBookMarkRemove(index)
        }
        return this.props.dispatch({
            type: "add_to_bookmark",
            payLoad: this.props.videos[index]
        })

    }
    isPresentInBookMark(list){
        let bookmarked = this.props.bookmarked;
        for(let i = 0 ; i<bookmarked.length ;i++){
            if(bookmarked[i].id.videoId == list.id.videoId){
                return true;
            }
        }
        return false;
    }
    render() {
       
        return (
            <div>
                <div>
                    {this.props.videos.length != 0 && this.props.videos.map((item, index) =>
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
                                <i className={this.isPresentInBookMark(item)?"fa fa-bookmark" : "fa fa-bookmark-o"} onClick={(e) => this.onBookmarkClick(index,e)}></i>
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
        videos: state.videos,
        bookmarked : state.bookmarked
    }

}
export default connect(mapStateToProps)(ListItemSearch);