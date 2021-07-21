import React from "react";
import styles from "./DocList.module.scss";
import collection from "../../icons/collection.svg";
import moment from "moment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";

const DocList = ({ document }) => {
  const unix = document?.timestamp?.seconds;
  let dateString = moment.unix(unix).format("MM/DD/YYYY");
  return (
    <div className={styles.docList}>
      <div class={styles.docCard}>
        <img src={collection} />
        <div className={styles.docName}>{document?.docName}</div>
      </div>
      <div className={styles.timestamp}>
        {dateString}
        <div className={styles.remove}>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default DocList;
