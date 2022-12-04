import React from 'react'
import referImage from "../Assets/Path 395.png"

export const ReferralPage = () => {
  return (
    <div id='referral'>
      <div className='referral'>
        <div className='flex-row'>
          <img src={referImage} alt="" style={{width: "150px"}}/>
          <h1>Referral Program</h1>
        </div>
        <form action="">
          <div className='input1'>
            <label htmlFor="wallet referral link">Enter Wallet REFERRAL LINK</label>
            <div>
              <input type="text" placeholder='trustwallet.com/t/trust-wallet-refer'/>
              <button>Send</button>
            </div>
          </div>
          <div className='input2'>
            <label htmlFor="referral link">Your REFERRAL LINK</label>
            <input type="text" placeholder='https://www.teamnouns.xyz?ref=0xC'/>
          </div>
        </form>
        <div className='flex-row' style={{gap: "2rem", marginBlock: "1rem"}}>
          <h4>Current reward total for each <br /> member joining through link</h4>
          <h2>$671.24</h2>
        </div>
      </div>
    </div>
  )
}
