import React from "react";
import ListItemRecent from "./listItems/ListItemRecent"


class Recent extends React.Component {
    render() {
        return (
            <div className="recent">
                <p>Recently Played</p>
                <ListItemRecent/>

            </div>
        )
    }
}
export default Recent;