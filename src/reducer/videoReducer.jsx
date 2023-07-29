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
    default:
      return state;
  }
};