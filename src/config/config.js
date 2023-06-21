import { current } from "@reduxjs/toolkit"

const hostname = "http://api.cricnote.in/"

export const api = {
    post: hostname + "wp-json/wp/v2/posts?per_page=4&",
    trendvideo: hostname + "wp-json/wp/v2/posts?categories=3",
    slotpic: hostname + "wp-json/wp/v2/posts?categories=4&filter[orderby]=date&order=asc",
    currentmatch: "https://api.cricapi.com/v1/currentMatches?apikey=549a65f2-8776-4596-b151-3d14b6ebad9b&offset=0",
    allmatch : "https://api.cricapi.com/v1/matches?apikey=549a65f2-8776-4596-b151-3d14b6ebad9b&offset=0",
    categories:"http://api.cricnote.in/wp-json/wp/v2/categories"
}