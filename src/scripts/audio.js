const clientId = 'c30058818b0743d7845c4327e4d39bb5';
const clientSecret = '9c21ce36cf3149758b9394eb9e96910c'
const url = 'https://accounts.spotify.com/api/token'
let accessToken;
export const track_id = ['2t33vDAERvsbqTLQuphuwA', '2kLmAwQCBSlvtcptioAoTv', '2WWlNStuw5Tqg5noCtR7oq']
//аудиофайлы


export async function getTrackData() {
    const musicData = {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret
    }

    const formData = new URLSearchParams();
    for (const [key, value] of Object.entries(musicData)) {
        formData.append(key, value);
    }

    try {
        const data = await(await fetch(url, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        })).json() 
        accessToken = data.access_token;
        return accessToken
    } catch (error) {
        console.error(new Error(error));
    }
}

export async function getProfile(ind) {
    await getTrackData();
    const response = await fetch(`https://api.spotify.com/v1/tracks/${track_id[ind]}`, {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    });
  
    const trackData = await response.json();
    return trackData;
}








