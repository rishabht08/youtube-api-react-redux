import React from "react";
import { connect } from "react-redux";
const embed = "https://www.youtube.com/embed/";


class Video extends React.Component {
    render() {
        return (

            <iframe width="100%" height="600" src={embed + this.props.videoId+"?autoplay=1&showinfo=0&controls=0"} frameBorder="0" allowFullscreen>
            </iframe>

        )
    }
}
const mapStateToProps = (state)=>{
    return{
        videoId : state.nowPlaying
    }
}
export default connect(mapStateToProps) (Video);