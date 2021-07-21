import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import styles from "./AppBar.module.scss";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import { auth } from "../../firebase";
import collection from "../../icons/collection.svg";
const AppBar = () => {
  const logoutHandler = async () => {
    await auth().signOut();
  };
  const profilePic = auth.currentUser.providerData?.[0]?.photoURL;
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.flex}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className={styles.logoIcon}>
          <img src={collection} />
        </div>
      </div>
      <div className={styles.inputBox}>
        <Box className={styles.searchBox}>
          <IconButton>
            <SearchIcon className={styles.searchIcon} />
          </IconButton>
          <InputBase placeholder="Search" />
        </Box>
      </div>
      <div className={styles.profilePic}>
        <img onClick={logoutHandler} src={profilePic} alt="profile" />
      </div>
    </div>
  );
};

export default AppBar;
