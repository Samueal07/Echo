import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "e5471a60f0msh222598066925a7fp15e857jsnfb96d0436c18",
//     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//   },
// };

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

  export const shazamCoreApi = createApi({
    // name of API
    reducerPath: "shazamCoreApi",

    // Base query
    baseQuery: fetchBaseQuery({
      baseUrl: "https://shazam-core.p.rapidapi.com/v1",
      // making headers
      prepareHeaders:(headers)=>{
        headers.set(
          "x-rapidapi-key",
          "e5471a60f0msh222598066925a7fp15e857jsnfb96d0436c18"
        );

        return headers;
      }
    }),

    endpoints:(builder)=>({


        // redux helps us to call this as hoook
        getTopCharts:builder.query({query:()=>"/charts/world"}),
        getSongDetails:builder.query({query:({songid})=>`/tracks/details?track_id=${songid}`}),

        /*New apiEndpoint to get realted songs to that artists */
        getSongRelated:builder.query({query:({songid})=>`/tracks/related?track_id=${songid}`}),
        getArtistDetails:builder.query({query:(artistId)=>`/artists/details?artists_id=${artistId}`}),
        getSongsByGenre:builder.query({query:(genre)=>`/charts/genre-world?genre_code=${genre}`}),
        getSongsByCountry:builder.query({query:(countryCode)=>`/charts/country?country_code=${countryCode}`}),
        getSongsBySearch:builder.query({query:(searchTerm)=>`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`}),
    }),
  });
/*export hooks for that endpiont */
  export const {
    useGetSongDetailsQuery,
    useGetTopChartsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery
  }=shazamCoreApi