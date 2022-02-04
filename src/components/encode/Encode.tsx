import React, { useCallback, useState } from 'react';
import styles from "components/encode/scss/Encode.module.scss";
import Dropzone from '../dropzone/Dropzone';
import { post } from '../../utils/requests';
import SubmitButton from '../buttons/SubmitButton';

const Encode = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [textToEncode, setTextToEncode] = useState("");
  const [result, setResult] = useState("");
  useCallback(() => {
    console.log(result);
  }, [result]);
  const handleDecoding = () => files.map(file => post(
    "encode",
    {
     inputPath: (file as any).path, 
     textToEncode: textToEncode,
    },
    (response: any) => setResult(response),
    ));
  return (
    <>
      <div className={styles.container}>
        <Dropzone onFileDropped={(file) => setFiles(file)} placeholderText="Drag'n'drop images, you would like to encode"/>
        {
          files.length
          ? <input placeholder='Text to encode' className={styles.input} onChange={state => setTextToEncode(state.currentTarget.value)}/>
          : undefined
        }
        {
          files.length && textToEncode.length
          ? <SubmitButton onSuccessCallback={handleDecoding} label="Encode"/>
          : undefined
        }
      </div>
    </>
  );
}

export default Encode;