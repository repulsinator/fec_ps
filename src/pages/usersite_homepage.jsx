import React from 'react'
import './usersite_homepage.css'
import {testy,testyz} from './testy'
import { useState } from 'react'
import Timeline from '../popups/timeline'

function UsersiteHomepage() {

  const [timelinePop,settimelinePop]=useState(false)
  //baki hai reports ki designing....
  const [reportsPop,setreportsPop]=useState(false)

  return (
    <div id='userhome'>
       <div className="navbaruser">
          <div className="logouser">LIFE LEDGER</div>
          <div className="updatediv" onClick={testy}><i class="fa-solid fa-pen" id='update'></i></div>
          <div className="messagediv" onClick={testyz}><i class="fa-solid fa-message" id='message'></i></div>
          
          {/* <div className='upload'>
            <i class="fa-solid fa-circle-plus" id='uploadicon'></i>
            <span>Upload</span>
          </div> */}
          
       </div>
    {/*Here i have to apply a js script which can render with respect to the existence of user
     Kam baccha hai eske bad user existence check karna padega */}
      <div className="bodyuser">
        <div className="Details">
          <div className="Name">
             <div className="Nametext">Name:</div>
             <div className="Namebox"></div>
          </div>
          <div id="Id">
            <div className="Nametext">Id:</div>
            <div className="Namebox"></div>
          </div>
        </div>
           <div className="blocksuser">
            <div className="Box1 Box">
              <ul>
                <li>Name: Satadip Debnath</li>
                <li>Age:</li>
                <li>Gender:</li>
                <li>Contact Info:</li>
              </ul>


            </div>
            <div className="Box2 Box">
            <ul>
                <li>Blood group:</li>
                <li>Allergies:</li>
                <li>Deficiencies:</li>
                <li>Chronic Diseases:</li>
              </ul>
               


            </div>
            <div className="Box3 Box">
              Reports
            </div>
            <div className="Box4 Box" onClick={()=> settimelinePop(true)}>
                   Timeline 
            </div>
            <Timeline trigger={timelinePop} setTrigger={settimelinePop}/>
        </div>
      </div>
      <div className="notificationuser" onClick={testyz}>
      <i class="fa-solid fa-bars fa-2x" id='notiIcon' ></i>
      </div>
    </div>
  )
}

export default UsersiteHomepage