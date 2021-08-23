import userApi from "api/userApi";
import { generateDownload } from "lib/CropUtils";
import React, { useCallback, useState } from "react";
import {
  Modal,
  Button,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import Cropper from "react-easy-crop";

export default function EditAvatar(props) {
  const update = props.update;
  const close = props.handleClose;
  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  const handleCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const handleSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file =event.target.files[0];
      setImage(window.URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    const callback = (file, link) => {
      userApi.updateAvatar(file);
      update(link);
      close();
    };
    generateDownload(image, croppedArea, callback);
  };
  return (
    <Modal show={props.showEditAvatar} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật Avatar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormGroup className="mb-3">
          <FormLabel>Chọn ảnh</FormLabel>
          <FormControl
            accept="image/*"
            type="file"
            onChange={handleSelectFile}
          ></FormControl>
        </FormGroup>
        {image ? (
          <div id="crop-container">
            <div className="crop-container">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={handleCropComplete}
              />
            </div>
          </div>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={handleSubmit}
          variant="primary"
          className="w-100 my-3"
          type="submit"
        >
          Cập nhật
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
