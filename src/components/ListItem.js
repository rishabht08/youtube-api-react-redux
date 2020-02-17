// import React from "react";
// import img from "./aot.jpg"
// import { connect } from "react-redux"


// class ListItem extends React.Component {
//     onVideoLinkClickHandler(index, current) {
//         if (current == "search") {
//             this.props.dispatch({
//                 type: "play_clicked",
//                 payLoad: this.props.videos[index].id.videoId,
//                 recent: this.props.videos[index]
//             })
//         }
//         else {
//             this.props.dispatch({
//                 type: "play_clicked_recent",
//                 payLoad: this.props.videos[index].id.videoId,
//             })

//         }
//     }
//     onBookmarkClick(index) {
//         this.props.dispatch({
//             type: "add_to_bookmark",
//             payLoad: this.props.videos[index]
//         })

//     }
//     render() {
//         console.log("bookmark-->",this.props)
//         return (
//             <div>
//                 <div>
//                     {this.props.current == "search" && this.props.videos.length != 0 && this.props.videos.map((item, index) =>
//                         <div className="row search-items">
//                             <div className="col-sm-4">
//                                 <img src={item.snippet.thumbnails.default.url} />
//                             </div>
//                             <div className="col-sm-6">
//                                 <div className="title">
//                                     <a ><p onClick={() => this.onVideoLinkClickHandler(index, this.props.current)}>{item.snippet.title}</p></a>
//                                 </div>
//                                 <span>{item.snippet.channelTitle}</span></div>
//                             <div className="col-sm-2">
//                                 <i className="fa fa-bookmark-o" onClick={() => this.onBookmarkClick(index)}></i>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                 <div>

//                     {this.props.current == "recent" && this.props.recent.length != 0 && this.props.recent.map((item, index) =>
//                         <div className="row search-items">
//                             <div className="col-sm-4">
//                                 <img src={item.snippet.thumbnails.default.url} />
//                             </div>
//                             <div className="col-sm-6">
//                                 <div className="title">
//                                     <a href="#"><p onClick={() => this.onVideoLinkClickHandler(index, this.props.current)}>{item.snippet.title}</p></a>
//                                 </div>
//                                 <span>{item.snippet.channelTitle}</span></div>
//                             <div className="col-sm-2">
//                                 <i className="fa fa-bookmark-o"></i>
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 <div>

//                     {this.props.current == "bookmark" && this.props.bookmarked.length != 0 && this.props.bookmarked.map((item, index) =>
//                         <div className="row search-items">
//                             <div className="col-sm-4">
//                                 <img src={item.snippet.thumbnails.default.url} />
//                             </div>
//                             <div className="col-sm-6">
//                                 <div className="title">
//                                     <a href="#"><p onClick={() => this.onVideoLinkClickHandler(index, this.props.current)}>{item.snippet.title}</p></a>
//                                 </div>
//                                 <span>{item.snippet.channelTitle}</span></div>
//                             <div className="col-sm-2">
//                                 <i className="fa fa-bookmark-o"></i>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {

//     return {
//         videos: state.videos,
//         played: state.nowPlaying,
//         recent: state.recent,
//         bookmarked : state.bookmarked
//     }

// }
// export default connect(mapStateToProps)(ListItem);