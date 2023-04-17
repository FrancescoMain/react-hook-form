import { useState } from "react";
import { Container, Preview, Image, Delete } from "./style";
import { uiUploadProps } from "./type";

const App = ({ register }: uiUploadProps) => {
  const [selectedImage, setSelectedImage] = useState<any>();

  // This function will be triggered when the file field change
  const imageChange = (e: React.ChangeEvent<any>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Container>
        <input
          {...register}
          accept="image/*"
          type="file"
          onChange={imageChange}
        />

        {selectedImage && (
          <Preview>
            <Image src={URL.createObjectURL(selectedImage)} alt="Thumb" />
            <Delete onClick={removeSelectedImage}>Remove This Image</Delete>
          </Preview>
        )}
      </Container>
    </>
  );
};

export default App;
