import { createStore } from "redux";


let initailState = {
    search: "",
    videos: [],
    nowPlaying: "",
    recent: [],
    bookmarked: []
}

let isItemPresentinList = (list, item) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id.videoId == item.id.videoId) {
            return true;
        }
    }
    return false;
}

let findIndexinBookmark=(video,bookmark)=>{
    let vidId = video.id.videoId;
    for(let i =0 ; i<bookmark.length ; i++){
        if(bookmark[i].id.videoId==vidId){
            return i;
        }
    }
}



function appReducer(state = initailState, action) {
    let stateCopy = { ...state };

    switch (action.type) {
        case "search_value":
            return {
                ...stateCopy,
                search : action.payLoad
            }
            // stateCopy.search = action.payLoad;
            // return stateCopy;
        case "load_videos":
            return{
                ...stateCopy,
                videos : action.payLoad
            }
            // stateCopy.videos = action.payLoad;
            // return stateCopy;
        case "play_clicked":
            if (isItemPresentinList(stateCopy.recent, action.recent) == false) {
                return {
                    ...stateCopy,
                    recent: [...stateCopy.recent, action.recent],
                    nowPlaying: action.payLoad
                }
                //stateCopy.recent.push(action.recent)
            }
            return {
                ...stateCopy,
                nowPlaying: action.payLoad
            }


        case "play_clicked_recent":
            return {
                ...stateCopy,
                nowPlaying: action.payLoad
            }
        case "add_to_bookmark":
            if (isItemPresentinList(stateCopy.bookmarked, action.payLoad) == false) {
            return{
                ...stateCopy,
                bookmarked : [...stateCopy.bookmarked , action.payLoad]
            }
            return stateCopy;
        }

        case "remove_from_bookmark":
            let bookMarked = stateCopy.bookmarked;
            bookMarked.splice(action.payLoad,1);
            return {
                ...stateCopy,
                bookmarked : [...bookMarked]
            }
        case "remove_bookmark_from_search":
            let bookMarkedSearch = stateCopy.bookmarked;
            let index  = findIndexinBookmark(stateCopy.videos[action.payLoad],bookMarkedSearch);
            bookMarkedSearch.splice(index,1);
            return {
                ...stateCopy,
                bookmarked : [...bookMarkedSearch]
            }


            // stateCopy.bookmarked.push(action.payLoad);
            // return stateCopy;
        default:
            return stateCopy;
    }
}

let store = createStore(appReducer);
export default store;

