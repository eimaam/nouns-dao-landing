import React from 'react'
import certificate from "../Assets/Team_Nouns_Stakeholder_Certificate_II.png"
import dao from "../Assets/Group 213.png"
import joinEth from "../Assets/Group 285.png"

export const MembershipCert = () => {
  return (
    <section>
      <div className='section'>
        <div className='text--container'>
          <div className='flex-row' style={{justifyContent: "flex-start"}}>
            <img src={dao} alt="dao" style={{width: "50px", height: "50px"}}/>
            <h2>Team Nouns Dao 
              <br />Membership
            </h2>
          </div>
          <h3>750 Seats, 1 ETH Participation</h3>
          <p>Wyoming DAO LLC formation 
            <br /> Snapshot Voting Structures 
            <br /> Gnosis Safe Treasury
          </p>
          <h3>Capital to fund development 
            <br />of core technologies
          </h3>
          <p>Messaging on Blockchains, Postcards Generative Nouns 
            <br />  NFTs, Stamps, Scenes Art and Community Spaces
          </p>
          <p>Post build, capital accumulation, distribute capital 
          <br /> by Wyoming LLC DAO guidelines direct to the DAO 
          <br /> Certificate holders distribution, direct to wallet, quarterly.
          </p>
          <h2>Current available: <span>750</span></h2>
        </div>

        <div className='image--container'>
          <div>
            <img src={certificate} alt="Team_Nouns_Stakeholder_Certificate_II" />
          </div>
          <div>
            <img src={joinEth} alt="" style={{width: "max-content", height: "50px"}}/>
          </div>
        </div>
      </div>
    </section>
  )
}
