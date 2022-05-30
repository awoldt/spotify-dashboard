import type { GetServerSideProps } from "next";
import cookieHandler from "cookies";
import Head from "next/head";
import {
  getTopTracks,
  getTopArtists,
  getRecentlyPlayed,
  getUserProfile,
  getRecommendedTracks,
  getRecommendedArtists,
} from "../scripts/spotifyFunctions";
import { Container, Button, Pagination, Row, Col } from "react-bootstrap";
import {
  user_data,
  top_tracks,
  top_artists,
  recently_played,
  user_profile,
  top_track_pagination,
  top_artists_pagination,
  recently_played_pagination,
  recommended_tracks,
  recommended_artists,
} from "../interfaces/spotifyData";
import TopTracks from "../components/TopTracks";
import TopArtists from "../components/TopArtists";
import RecentlyPlayed from "../components/RecentlyPlayed";
import RecommendedTracks from "../components/RecommendedTracks";
import RecommendedArtists from "../components/RecommendedArtists";
import { generatePagination } from "../scripts/generatePagination";
import { useState } from "react";

const Account = ({
  user_data,
  top_tracks_data,
  top_artists_data,
  recently_played_data,
  recommended_tracks,
  recommended_artists,
}: {
  user_data: user_data | null;
  top_tracks_data: top_track_pagination | null;
  top_artists_data: top_artists_pagination | null;
  recently_played_data: recently_played_pagination | null;
  recommended_tracks: recommended_tracks[] | null;
  recommended_artists: recommended_artists[] | null;
}) => {
  const [topTracksActivePage, setTopTracksActivePage] = useState<number>(1);
  const [topArtistsActivePage, setTopArtistsActivePage] = useState<number>(1);
  const [recentlyPlayedActivePage, setRecentlyPlayedActivePage] =
    useState<number>(1);

  let topTracksPaginationItems = [];
  for (let number = 1; number <= top_tracks_data!.pages!.length; number++) {
    if (topTracksActivePage == number) {
      topTracksPaginationItems.push(
        <Pagination.Item key={number} active={true}>
          {number}
        </Pagination.Item>
      );
    } else {
      topTracksPaginationItems.push(
        <Pagination.Item
          key={number}
          active={false}
          onClick={(e: any) => {
            setTopTracksActivePage(e.target.text);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  let topArtistsPaginationItems = [];
  for (let number = 1; number <= top_artists_data!.pages!.length; number++) {
    if (topArtistsActivePage == number) {
      topArtistsPaginationItems.push(
        <Pagination.Item key={number} active={true}>
          {number}
        </Pagination.Item>
      );
    } else {
      topArtistsPaginationItems.push(
        <Pagination.Item
          key={number}
          active={false}
          onClick={(e: any) => {
            setTopArtistsActivePage(e.target.text);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  let recentlyPlayedPaginationItems = [];
  for (
    let number = 1;
    number <= recently_played_data!.pages!.length;
    number++
  ) {
    if (recentlyPlayedActivePage == number) {
      recentlyPlayedPaginationItems.push(
        <Pagination.Item key={number} active={true}>
          {number}
        </Pagination.Item>
      );
    } else {
      recentlyPlayedPaginationItems.push(
        <Pagination.Item
          key={number}
          active={false}
          onClick={(e: any) => {
            setRecentlyPlayedActivePage(e.target.text);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  return (
    <>
      <Head>
        {user_data!.userProfile!.name && (
          <title>{user_data!.userProfile!.name}&apos;s Spotify Stats</title>
        )}
        {user_data == null && <title>Spotify Stats</title>}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Container>
        {user_data !== null && user_data.userProfile !== null && (
          <div className="text-center" style={{ marginBottom: "50px" }}>
            {user_data.userProfile.name !== null && (
              <>
                <div className="mt-4">
                  {user_data.userProfile.profile_img !== null && (
                    <img
                      src={user_data.userProfile.profile_img}
                      style={{
                        borderRadius: "100px",
                        width: "150px",
                        height: "100px",
                      }}
                    />
                  )}
                  <a
                    href={user_data.userProfile.spotify_profile_link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <h1>
                      {user_data.userProfile.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-up-right"
                        viewBox="0 0 16 16"
                        style={{ marginLeft: "10px" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                        />
                      </svg>
                    </h1>
                  </a>
                </div>

           
                <div className="text-center mt-3">
                  <a href={"/api/auth?signout"}>
                    <Button variant={"danger"}>Sign Out</Button>
                  </a>
                </div>
              </>
            )}
          </div>
        )}

        <TopTracks
          tracks_data={top_tracks_data}
          active_page={topTracksActivePage}
          pagination={topTracksPaginationItems}
        />

        <hr></hr>

        <TopArtists
          artists={top_artists_data}
          active_page={topArtistsActivePage}
          pagination={topArtistsPaginationItems}
        />

        <hr></hr>

        <RecentlyPlayed
          recent_tracks={recently_played_data}
          active_page={recentlyPlayedActivePage}
          pagination={recentlyPlayedPaginationItems}
        />

        <hr></hr>
        <Row className="text-center">
          <p className="mt-3 mb-5">Based on your listening habits, here are some songs and artists you might be interested in </p>
          <Col>
            <RecommendedTracks tracks={recommended_tracks} />
          </Col>
          <Col>
            <RecommendedArtists artists={recommended_artists} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Account;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("GET /account");

  const c = new cookieHandler(context.req, context.res);
  console.log("cookie before loading page = " + c.get("access_token"));

  //400
  //no access_token cookie installed
  if (c.get("access_token") == undefined) {
    console.log("user does not have cookie installed :(");

    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  //200
  else {
    console.log("user has cookie installed");
    console.log("fetching user data...");
    console.log("access_token: " + c.get("access_token"));

    try {
      const topTracks: top_tracks[] | null = await getTopTracks(
        String(c.get("access_token"))
      );
      const topArtists: top_artists[] | null = await getTopArtists(
        String(c.get("access_token"))
      );
      const recentlyPlayedSongs: recently_played[] | null =
        (await getRecentlyPlayed(String(c.get("access_token")))) || null;

      const userProfileData: user_profile | null = await getUserProfile(
        String(c.get("access_token"))
      );
      const recommendedTracks: recommended_tracks[] | null =
        await getRecommendedTracks(String(c.get("access_token")), topTracks);

      const recommendedArtists: recommended_artists[] | null =
        await getRecommendedArtists(String(c.get("access_token")), topArtists);

      const TopTrackspaginationData = await generatePagination(topTracks);
      const TopArtistsPaginationData = await generatePagination(topArtists);
      const RecentlyPlayedPaginationData = await generatePagination(
        recentlyPlayedSongs
      );

      //CONTAINS ALL RETURN DATA
      let userData: user_data = {
        userProfile: userProfileData,
      };

      return {
        props: {
          user_data: userData,
          top_tracks_data: TopTrackspaginationData,
          top_artists_data: TopArtistsPaginationData,
          recently_played_data: RecentlyPlayedPaginationData,
          recommended_tracks: recommendedTracks,
          recommended_artists: recommendedArtists,
        },
      };
    } catch (e) {
      console.log(e);
      console.log("could not get user account deta :(");

      return {
        props: {
          user_data: null,
        },
      };
    }
  }
};
