import { top_tracks, top_artists } from "../interfaces/spotifyData";

//gets unique stats to show above each row
export function getTopArtistsStats(
  topTracks: top_tracks[] | null,
  topArtists: top_artists[] | null
) {
  //make sure there is atleast 3 artists
  if (topArtists!.length >= 3) {
    let arr = new Array<number>(3);
    arr = [0, 0, 0];

    //loop through top 3 artists and compare to top track look for artist_name matches
    for (let i = 0; i < 3; ++i) {
      for (let y = 0; y < topTracks!.length; ++y) {
        if (topTracks![y].artist_name == topArtists![i].artist_name) {
          arr[i] += 1;
        }
      }
    }

    //#1 top artist is featured most in top tracks
    if (arr[0] > arr[1] && arr[0] > arr[2]) {
      return [
        topArtists![0].artist_name +
          " was featured the most in your top tracks, over " +
          arr[0] +
          " times",
      ];
    }
    //#2 top artist is featured most in top tracks
    else if (arr[1] > arr[0] && arr[1] > arr[2]) {
      return [
        topArtists![1].artist_name +
          " was featured the most in your top tracks, over " +
          arr[1] +
          " times",
      ];
    }
    //#3 top artist is featured most in top tracks
    else if (arr[2] > arr[0] && arr[2] > arr[1]) {
      return [
        topArtists![2].artist_name +
          " was featured the most in your top tracks, over " +
          arr[2] +
          " times",
      ];
    } else {
      return null;
    }
  } else {
    return null;
  }
}
