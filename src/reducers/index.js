import {combineReducers} from 'redux';


const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05 min', artist: 'TLC', image:'https://upload.wikimedia.org/wikipedia/en/a/ae/Tlc-noscubs2.jpg', listen: 'https://www.youtube.com/watch?v=FrLequ6dUdM', description: '"No Scrubs" is a song recorded by American girl group TLC for their third studio album FanMail (1999). The lyrics posit that a man who does not own an automobile is a "scrub" (also known as a "buster") and is undesirable as a romantic or sexual partner. LaFace Records and Arista Records released it as the albums lead single on February 2, 1999.' },
    {title: 'Macarena', duration: '2:45 min', artist: 'Los Del Rio', image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/MacarenaLosDelRio.jpg', listen: 'https://www.youtube.com/watch?v=anzzNp8HlVQ', description: 'Macarena" (Spanish pronunciation: [makaˈɾena]) is a Spanish dance song by Los del Río about a woman who cheats on her boyfriend while he is being drafted into the army.[2] Appearing on the 1993 album A mí me gusta, it was an international hit in 1995, 1996, and 1997, and continues to be a popular dance at weddings, parties, and sporting events.'},
    {title: 'Drip Too Hard', duration: '3:52 min', image: 'https://upload.wikimedia.org/wikipedia/en/8/89/Drip_Too_Hard.jpg', listen: 'https://www.youtube.com/watch?v=THcVOf1kNh0', description: '"Drip Too Hard" is a song by American rappers Lil Baby and Gunna, released by YSL Records, Quality Control Music, Motown and Capitol Records on September 12, 2018 as the lead single from Lil Baby and Gunnas collaborative project Drip Harder (2018).[1] It peaked at number 4 on the US Billboard Hot 100, becoming the highest-charting song for both artists'},
    {title: 'ZEZE', duration: '3:18 min', image: 'https://upload.wikimedia.org/wikipedia/en/2/23/Zeze_%28official_single_cover%29.png', listen: 'https://www.youtube.com/watch?v=mjaayCARwro', description: '"Zeze" is a song by American rapper Kodak Black featuring Travis Scott and Offset. It was released by Atlantic Records on October 12, 2018.[3] The song was produced by D. A. Doman.[4] The song debuted at number two on the US Billboard Hot 100 behind "Girls Like You" by Maroon 5 featuring Cardi B and at number one in Canada.'}
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
}


export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});