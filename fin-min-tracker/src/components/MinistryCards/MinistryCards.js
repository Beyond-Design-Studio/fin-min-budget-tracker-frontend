import React from 'react'
import {Link} from 'react-router-dom'

// Images were GIVEN to me BY AARAV, just saying.
import aca_min from "../../assets/mins/academic_ministry.jpg";
import budg_min from "../../assets/mins/budget_min.jpg";
import camp_min from "../../assets/mins/campus_Life.jpg";
import cwb_min from "../../assets/mins/community_well_being.jpg";
import cul_min from "../../assets/mins/cultural_min.jpg";
import env_min from "../../assets/mins/environment_min.jpg";
import fin_min from "../../assets/mins/fin_min.jpg";
import home_min from "../../assets/mins/house_min.jpg";
import parl_min from "../../assets/mins/parliamentary_min.jpg";
import sprt_min from "../../assets/mins/sports_min.jpg";
import tech_min from "../../assets/mins/tech_min.jpg";

import styles from './MinistryCards.module.css'

// An object mapping ministry to it's image.
const minToImg = {
  "Academic Affairs": aca_min,
  "Campus Life": camp_min,
  "Community Well-Being": cwb_min,
  "Cultural": cul_min,
  "Environment": env_min,
  "Finance": fin_min,
  "House Reserve": home_min,
  "Interim Budget Reserve": budg_min,
  "Parliamentary Affairs": parl_min,
  "Sports": sprt_min,
  "Technology": tech_min
}


export default function MinistryCards(props) {
  return (
    <div style={{backgroundImage: `url(${minToImg[props.name]})`}} className={styles.Card}>
      <h1 className={styles.Title}>{props.name}</h1>

      <div className={styles.Links}>
        <Link to={`/overview/${props.name}`}><p className={styles.Link}>Overview</p></Link>
        <Link to={`/budget/${props.name}`}><p className={styles.Link}>Budget Breakdown</p></Link>
        <Link to={`/transactions/${props.name}`}><p className={styles.Link}>Transactions</p></Link>
      </div>
    </div >

  )
}
