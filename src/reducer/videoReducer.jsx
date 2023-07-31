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
    case "ADD_NOTE":
      return {
        ...state,
        videoData: state?.videoData?.map((video) =>
          video?._id === payload?.videoId
            ? {
                ...video,
                notes: video?.notes
                  ? [...video?.notes, payload?.note]
                  : [payload?.note],
              }
            : video
        ),
      };
    case "EDIT_NOTE":
      return {
        ...state,
        videoData: state?.videoData?.map((video) =>
          video?._id === payload?.videoId
            ? {
                ...video,
                notes: video?.notes?.map((note) =>
                  note?.id === payload?.noteId ? payload?.note : note
                ),
              }
            : video
        ),
      };
    case "DELETE_NOTE":
      return {
        ...state,
        videoData: state?.videoData?.map((video) =>
          video?._id === payload?.videoId
            ? {
                ...video,
                notes: video?.notes?.filter((note) => note?.id !== payload?.id),
              }
            : video
        ),
      };
    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,
        playlists: state?.playlists.map((item) =>
          item?.name?.toLowerCase()?.trim() ===
          payload?.playlistName?.toLowerCase()?.trim()
            ? {
                ...item,
                videos: item?.videos
                  ? [...item?.videos, payload?.video]
                  : [payload?.video],
              }
            : item
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state?.playlists?.map((playlist) =>
          playlist?.name?.toLowerCase()?.trim() ===
          payload?.playlistName?.toLowerCase()?.trim()
            ? {
                ...playlist,
                videos: playlist?.videos?.filter(
                  (video) => video._id !== payload?.videoId
                ),
              }
            : playlist
        ),
      };
    default:
      return state;
  }
};