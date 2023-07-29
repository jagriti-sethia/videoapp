export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH":
      return { ...state, search: payload };

    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: [payload, ...state.watchLaterVideos],
      };
    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...state,
        watchLaterVideos: state.watchLaterVideos.filter(
          (video) => video?._id !== payload?._id
        ),
      };
      case "ADD_NOTE": 
        return {
            ...state,
            notes: [...state.notes, payload]
        };
        case "ADD_PLAYLIST":
          return { ...state, playlists: [payload, ...state?.playlists] };
        case "DELETE_PLAYLIST":
          return {
            ...state,
            playlists: state.playlists.filter(
              (playlist) =>
                playlist?.name.toLowerCase().trim() !== payload.toLowerCase().trim()
            ),
          };
    
    default:
      return state;
  }
};