import React from "react";
import ListItemBookmark from "./listItems/ListItemBookmark"


class Bookmarked extends React.Component {
    render() {
        return (
            <div className="bookmarked">
                <p>Bookmarked</p>
                <ListItemBookmark/>
            </div>
        )
    }
}
export default Bookmarked;