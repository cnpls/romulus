/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement } from 'react';
import Image from 'react-bootstrap/Image';
import { ClickableUploadIconType } from './Types';
import icon from '../../assets/upload.svg';

const ClickableUploadIcon = (props: ClickableUploadIconType): ReactElement => {
  const { files, updateFiles, height, width } = props;

  const handleChange = (e: any) => {
    if (!e.target.files.length) {
      return;
    }

    if (!e.target.files[0].path.endsWith('.py')) {
      return; // TODO: notification?
    }

    updateFiles([
      ...files,
      {
        name: e.target.files[0].name,
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
        path: e.target.files[0].path,
      },
    ]);
  };

  return (
    <div>
      <label htmlFor="clickable-upload">
        <Image
          className="interactive-icon"
          src={icon}
          width={width}
          height={height}
          alt="icon"
        />
      </label>
      <input
        id="clickable-upload"
        className="file-upload"
        type="file"
        name="upload"
        onChange={handleChange}
      />
    </div>
  );
};

export default ClickableUploadIcon;
