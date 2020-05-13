import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'audio';
  msbapTitle = 'Audio Title';
  msbapAudioUrl = 'c:\Users\gouth\Source\player\audio\src\app\L2_Repeat_sentence_1.mp3';   
     
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;  
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
     
  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
    {
      title: 'Audio One Title',
      link: 'Link to Audio One URL'
    },
    {
      title: 'Audio Two Title',
      link: 'Link to Audio Two URL'
    },
    {
      title: 'Audio Three Title',
      link: 'Link to Audio Three URL'
    },
  ];
}
