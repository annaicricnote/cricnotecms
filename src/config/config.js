
const hostname = "http://api.cricnote.in/"

export const api = {
    post: hostname + "wp-json/wp/v2/posts?categories=1",
    trendvideo: hostname + "wp-json/wp/v2/posts?categories=3",
    slotpic: hostname + "wp-json/wp/v2/posts?categories=4&filter[orderby]=date&order=asc"
}