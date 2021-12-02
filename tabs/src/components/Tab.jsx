import React, { useState  } from 'react';
import microsoftTeams from '@microsoft/teams-js';
import './Tab.css';
import longDate from "@microsoft/teams-js";

function Test(){
  const appContentUrl = "https://www.bing.com/";
  console.log('Center button pressed');
  microsoftTeams.initialize();

  return(
    microsoftTeams.meeting.shareAppContentToStage ((err, result) => {
      if(result) {
        console.log('log result');
        this.setState({ isAppSharing: true });
       }
      if(err) {
        console.log('log error');
        this.setState({ sharingError: err, isAppSharing: false })
       }
      }, appContentUrl) 
  )
}


function Videos(){
  const [x, setX] = useState(1);
  const y = longDate;

  if (x === 1){
    return (
       <div className="vid-list-container">
      <div className="vid-list">
      <div className="vid-container">
       <div className="vid-frame">
           <img src="https://img.youtube.com/vi/HKTSUqZ0mqQ/1.jpg"></img>
        </div>
        <div className="vid-info">
           <div className="vid-title">Accenture Mexico 1</div>
           <div className="vid-options">
               <button onClick={()=> setX('vid1')} className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button>
               <button onClick={()=> window.open('https://www.youtube.com/embed/HKTSUqZ0mqQ')}>Preview window</button>
               <div>{y}</div>
               <button onClick={Test}>Center Stage</button>
           </div>
        </div>
       </div>

       <div className="vid-container">
       <div className="vid-frame">
       <img src="https://img.youtube.com/vi/F5pthGIdGvA/1.jpg"></img>
       </div>
       <div className="vid-info">
           <div className="vid-title">The Automation Advantage</div>
           <div className="vid-options">
               <button  onClick={()=> setX('vid2')} className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button>
               <button onClick={()=> window.open('https://www.youtube.com/embed/F5pthGIdGvA')}>Preview window</button>
           </div>
       </div>
       </div>

      <div className="vid-container">
       <div className="vid-frame">
       <img src="https://img.youtube.com/vi/o_4WYuThnkY/1.jpg"></img>
       </div>
       <div className="vid-info">
           <div className="vid-title">Somos Accenture</div>
           <div className="vid-options">
               <button onClick={()=> setX('vid3')} className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button>
               <button onClick={()=> window.open('https://www.youtube.com/embed/o_4WYuThnkY')}>Preview window</button>
           </div>
       </div>
       </div>
       <div className="vid-container">
       <div className="vid-frame">
       <img src="https://img.youtube.com/vi/B_IOk3iVwRQ/1.jpg"></img>
        </div>
        <div className="vid-info">
           <div className="vid-title">La historia de Accenture</div>
           <div className="vid-options">
               <button onClick={()=> setX('vid4')} className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button>
               <button onClick={()=> window.open('https://www.youtube.com/embed/B_IOk3iVwRQ')}>Preview window</button>
           </div>
        </div>
       </div>
       <div className="vid-container">
       <div className="vid-frame">
       <img src="https://img.youtube.com/vi/rfNiC_alpkU/1.jpg"></img>
        </div>
        <div className="vid-info">
           <div className="vid-title">This is Accenture</div>
           <div className="vid-options">
               <button onClick={()=> setX('vid5')} className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button>
               <button onClick={()=> window.open('https://www.youtube.com/embed/rfNiC_alpkU')}>Preview window</button>
           </div>
        </div>
       </div>
       <div className="vid-container">
       <div className="vid-frame">
       <img src="https://img.youtube.com/vi/0kgqMDACSi8/1.jpg"></img>
        </div>
        <div className="vid-info">
           <div className="vid-title">Accenture CEO</div>
           <div className="vid-options">
               <button onClick={()=> setX('vid6')} className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button>
               <button onClick={()=> window.open('https://www.youtube.com/embed/0kgqMDACSi8')}>Preview window</button>
           </div>
        </div>
       </div>
       <div className="vid-container">
       <div className="vid-frame">
       <img src="https://img.youtube.com/vi/GkZt7eDYCbw/1.jpg"></img>
        </div>
        <div className="vid-info">
           <div className="vid-title">Accenture Monterrey</div>
           <div className="vid-options">
               <button onClick={()=> setX('vid7')} className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button>
               <button onClick={()=> window.open('https://www.youtube.com/embed/GkZt7eDYCbw')}>Preview window</button>
           </div>
        </div>
       </div>
       <div className="vid-container">
       <div className="vid-frame">
           <img src="https://img.youtube.com/vi/9dbqupL2mro/1.jpg"></img>
        </div>
        <div className="vid-info">
           <div className="vid-title">Accenture Mexico 2</div>
           <div className="vid-options">
               <button onClick={()=> setX('vid8')} className="vid-options__btn vid-options__btn-preview"><i class="fa fa-play-circle-o vid-options__btn__icon-play"></i>Preview</button>
               <button onClick={()=> window.open('https://www.youtube.com/embed/9dbqupL2mro')}>Preview window</button>
           </div>
        </div>
       </div>

       </div>

      </div>
     );
   }
   if (x==='vid1'){
     return(
       <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/HKTSUqZ0mqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <br />
         <button onClick={()=> setX(1)} >
         Back
        </button>
       </div>
       

    );

   }
   if (x==='vid2'){
     return(
       <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/F5pthGIdGvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <br />
         <button onClick={()=> setX(1)} >
         Back
        </button>
       </div>
       

    );

   }
   if (x==='vid3'){
     return(
       <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/o_4WYuThnkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <br />
         <button onClick={()=> setX(1)} >
         Back
        </button>
       </div>
       

      );
    }

    if (x==='vid4'){
      return(
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/B_IOk3iVwRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br />
          <button onClick={()=> setX(1)} >
          Back
         </button>
        </div>
        
 
       );
     }

     if (x==='vid5'){
      return(
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rfNiC_alpkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br />
          <button onClick={()=> setX(1)} >
          Back
         </button>
        </div>
        
 
       );
     }

     if (x==='vid6'){
      return(
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0kgqMDACSi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br />
          <button onClick={()=> setX(1)} >
          Back
         </button>
        </div>
        
 
       );
     }

     if (x==='vid7'){
      return(
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GkZt7eDYCbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br />
          <button onClick={()=> setX(1)} >
          Back
         </button>
        </div>
        
 
       );
     }

     if (x==='vid8'){
      return(
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9dbqupL2mro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br />
          <button onClick={()=> setX(1)} >
          Back
         </button>
        </div>
        
 
       );
     }

     if (x==='vid9'){
      return(
        <div>Loading</div>
        
 
       );
     }
}



export default function Tab() {
  


  
  return <Videos />;
}
