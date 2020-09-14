import loader from "../../../assets/images/loader.svg";
import styles from "../../Content/Users/users.module.css";
import React from "react";

let Preloader = (props) => {
    return <div className={styles.loaderWrapper}><img src={loader}/></div>
};

export default Preloader;

