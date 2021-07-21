import React from "react";
import styles from "./DocList.module.scss";
import collection from "../../icons/collection.svg";
import moment from "moment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";
const DocList = ({ id, fileName, date }) => {
  const router = useRouter();
  const TextHandler = () => {
    router.push(`/document/${id}`);
  };
  return (
    <div onClick={TextHandler} className={styles.docList}>
      <div class={styles.docCard}>
        <img src={collection} />
        <div className={styles.docName}>{fileName}</div>
      </div>
      <div className={styles.timestamp}>
        {date?.toDate().toLocaleDateString()}
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
