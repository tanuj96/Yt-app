import axios from 'axios';

const KEY = 'AIzaSyCO4WIE1B_sruxPD80o8TnGhUqqrWEeBzI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 100,
        key : KEY
    }
});