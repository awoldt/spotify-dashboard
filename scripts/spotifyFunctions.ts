import axios from "axios";
import {
  top_tracks,
  top_artists,
  recently_played,
  user_profile,
  recommended_tracks,
  recommended_artists,
} from "../interfaces/spotifyData";

//GETS TOP TRACKS
export async function getTopTracks(t: String) {
  try {
    const data = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=50",
      {
        headers: {
          Authorization: "Bearer " + t,
        },
      }
    );
    let returnData: top_tracks[];

    returnData = await data.data.items.map((track: any) => {
      let track_name, artist_name, track_cover_art, track_id;
      track_name = track.name;
      artist_name = track.artists[0].name;
      track_cover_art = track.album.images[0].url;
      track_id = track.id;
      const x = {
        track_name,
        artist_name,
        track_cover_art,
        track_id,
      };

      return x;
    });

    return returnData;
  } catch (e) {
    console.log("error while getting top tracks :(");

    return null;
  }
}

//GETS TOP ARTISTS
export async function getTopArtists(t: String) {
  try {
    const data = await axios.get(
      "https://api.spotify.com/v1/me/top/artists?limit=50",
      {
        headers: {
          Authorization: "Bearer " + t,
        },
      }
    );

    let returnData: top_artists[];

    returnData = await data.data.items.map((track: any) => {
      let artist_name, artist_profile_pic, artist_id;
      artist_name = track.name;
      artist_profile_pic = track.images[0].url;
      artist_id = track.id;
      const x = {
        artist_name,
        artist_profile_pic,
        artist_id,
      };

      return x;
    });

    return returnData;
  } catch (e) {
    console.log("error while getting top artists :(");
    return null;
  }
}

//GETS RECENTLY PLAYED TRACKS
export async function getRecentlyPlayed(t: String) {
  try {
    const data = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played?limit=50",
      {
        headers: {
          Authorization: "Bearer " + t,
        },
      }
    );

    let returnData: recently_played[];

    returnData = await data.data.items.map((x: any) => {
      let track_name, artist_name, track_cover_art, played_at;
      track_name = x.track.name;
      artist_name = x.track.artists[0].name;
      track_cover_art = x.track.album.images[0].url;
      played_at = x.played_at;

      const y = {
        track_name,
        artist_name,
        track_cover_art,
        played_at,
      };

      return y;
    });

    return returnData;
  } catch (e) {
    console.log("error while getting recently played tracks :(");
    return null;
  }
}

//GETS USERS PROFILE
export async function getUserProfile(t: String) {
  try {
    const data = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + t,
      },
    });

    const x: user_profile = {
      name: data.data.display_name,
      profile_img:
        data.data.images.length !== 0 ? data.data.images[0].url : null,
      spotify_profile_link: data.data.external_urls.spotify,
      num_of_followers: data.data.followers.total,
    };

    return x;
  } catch (e) {
    console.log(e);
    console.log("could not get user profile data :(");
    return null;
  }
}

//GETS RECOMMENDED TRACKS
export async function getRecommendedTracks(
  t: String,
  topTracks: top_tracks[] | null
) {
  try {
    let Z = [...topTracks!];
    //get top 5 artist ids and generate comma seperated list to put in url query
    Z!.length > 5 ? (Z!.length = 5) : null;
    let query = new Array();
    query = Z!.map((x) => {
      return x.track_id;
    });
    let q: String = query.join(",");

    const data = await axios.get(
      "https://api.spotify.com/v1/recommendations?seed_tracks=" + q,
      {
        headers: {
          Authorization: "Bearer " + t,
        },
      }
    );

    let returnData: recommended_tracks[] = [];

    await data.data.tracks.forEach((x: any) => {
      //only add songs with preview url
      if (x.preview_url!) {
        let track_art_cover, track_name, artist_name, spotify_preview_url;
        track_name = x.name;
        track_art_cover = x.album.images[0].url;
        artist_name = x.artists[0].name;
        spotify_preview_url = x.preview_url;

        const y = {
          track_name,
          artist_name,
          track_art_cover,
          spotify_preview_url,
        };

        returnData!.push(y);
      }
    });

    return returnData;
  } catch (e) {
    console.log(e);
    console.log("could not get recommended track data :(");
    return null;
  }
}

//GETS RECOMMENDED ARTISTS
export async function getRecommendedArtists(
  t: String,
  topArtists: top_artists[] | null
) {
  try {
    let Z = [...topArtists!];
    let artistArray = Z.map((x) => {
      return x.artist_name;
    });

    //get top 5 artist ids and generate comma seperated list to put in url query
    Z!.length > 5 ? (Z!.length = 5) : null;
    let query = new Array();
    query = Z!.map((x) => {
      return x.artist_id;
    });
    let q: String = query.join(",");

    const data = await axios.get(
      "https://api.spotify.com/v1/recommendations?seed_artists=" + q,
      {
        headers: {
          Authorization: "Bearer " + t,
        },
      }
    );

    let returnData: recommended_artists[];

    returnData = await Promise.all(
      data.data.tracks.map(async (x: any, index: number) => {
        //only recommend artists that are not in topArtists array
        if (artistArray.indexOf(x.album.artists[0].name) == -1) {
          const data = await axios.get(x.album.artists[0].href, {
            headers: {
              Authorization: "Bearer " + t,
            },
          });
          let artist_name, artist_profile_pic, artist_spotify_link;
          artist_name = data.data.name;
          artist_profile_pic = data.data.images[0].url;
          artist_spotify_link = data.data.external_urls.spotify;

          const y = {
            artist_name,
            artist_profile_pic,
            artist_spotify_link,
          };
          return y;
        } else {
          return null;
        }
      })
    );
    return returnData;
  } catch (e) {
    console.log(e);
    console.log("could not get recommended artists data :(");
    return null;
  }
}
