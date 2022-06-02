export interface user_profile {
  name: String;
  profile_img: string | undefined;
  spotify_profile_link: string;
  num_of_followers: number | null;
}

export interface top_artists {
  artist_name: String;
  artist_profile_pic: string;
  artist_id: String;
  spotify_artist_link: string;
}

export interface top_tracks {
  track_name: String;
  artist_name: String;
  track_cover_art: string;
  track_id: String;
  spotify_track_link: string
}

export interface recently_played {
  track_name: String;
  artist_name: String;
  track_cover_art: string;
  played_at: String;
  spotify_track_link: string;
}

export interface recommended_tracks {
  track_art_cover: string;
  track_name: String;
  artist_name: String;
  spotify_preview_url: string | undefined;
  spotify_track_link: string;
}

export interface recommended_artists {
  artist_name: String;
  artist_profile_pic: string;
  artist_spotify_link: string;
}

export interface user_data {
  userProfile: user_profile | null;
}

export interface top_track_pagination {
  pages: top_tracks[][] | null;
}

export interface top_artists_pagination {
  pages: top_artists[][] | null;
}

export interface recently_played_pagination {
  pages: recently_played[][] | null;
}
