import React, { useState } from "react";
import styles from "components/dropzone/scss/Dropzone.module.scss";
import FolderOpen from "@mui/icons-material/FolderOpenTwoTone"

import { useDropzone } from "react-dropzone";

export interface DropzoneProps {
  onFileDropped: (files: File[]) => void | undefined; 
  placeholderText: string;
  accepts?: string
}

const Dropzone = (props: DropzoneProps) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const handleDrop = (acceptedFiles: File[]) => {
    setFileNames(acceptedFiles.map((file) => URL.createObjectURL(file)));
    props.onFileDropped(acceptedFiles);  
  }
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: props.accepts ? props.accepts : "image/*",
    minSize: 1_024,
    maxSize: 3_072_000,
    maxFiles: 1,
  });
  return (
    <div className={styles.container}>
      <div {...getRootProps({ className: styles.dropzone })}>
        <input {...getInputProps()} />
        <p>{props.placeholderText}</p>
        {
         fileNames.length 
         ? <img src={fileNames[0]} alt="preview" className={styles["image-preview"]} />
         : <FolderOpen fontSize="large"/>
        }
      </div>
    </div>
  );
};

export default Dropzone;
