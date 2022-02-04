import React, { useState } from "react";
import Dropzone from "../dropzone/Dropzone";
import styles from "components/decode/scss/Decode.module.scss";
import SubmitButton from "../buttons/SubmitButton";
import { post } from "../../utils/requests";
import OutputField from "../output/OutputField";
const Decode = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [result, setResult] = useState("");
  const handleDecoding = () => files.map(file => post(
    "decode",
    {
      // Electron adds .path property to `File` object.
     inputPath: (file as any).path 
    },
    (response: any) => setResult(response),
    ));
  return (
    <>
      <div className={styles.container}>
        <Dropzone onFileDropped={(file) => setFiles(file)} placeholderText="Drag'n'drop images, you would like to decode"/>
        {
          files.length
          ? <SubmitButton onSuccessCallback={handleDecoding} label="Process"/>
          : undefined
        }
        <OutputField payload={result} />
      </div>
    </>
  );
};

export default Decode;
