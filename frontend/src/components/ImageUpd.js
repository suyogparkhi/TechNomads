import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  let confidence = 0;

  const sendFile = async () => {
    if (image) {
      try {
        let formData = new FormData();
        formData.append("file", selectedFile);

        const apiUrl = "http://localhost:8000/predict";
        if (!apiUrl) {
          console.error('API URL is not defined');
          return;
        }

        let res = await axios.post(apiUrl, formData);
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (error) {
        console.error('Error during file upload:', error);
      } finally {
        setIsloading(false);
      }
    }
  };

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    setIsloading(true);
    sendFile();
  }, [preview]);

  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  return (
    <React.Fragment>
      <main className="container mx-auto px-4 py-6">
        <div className="flex justify-center">
          <div className={`w-full max-w-lg p-4 border-2 ${!image ? 'border-dashed border-gray-300' : ''} rounded-lg shadow-lg`}>
            {image && (
              <div className="max-w-full max-h-full overflow-hidden rounded-lg flex justify-center items-center">
                <img src={preview} alt="Uploaded" className="object-contain max-w-full max-h-96" />
              </div>
            )}
            {!image && (
              <div className="flex flex-col items-center justify-center h-64 border-dashed border-2 border-gray-300 rounded-lg p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => onSelectFile(e.target.files)}
                  className="hidden"
                  id="fileInput"
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer flex flex-col items-center justify-center h-full w-full text-gray-600 bg-gray-100 border-dashed border-2 border-gray-300 rounded-lg hover:bg-gray-200"
                >
                  <span className="text-lg">Drag and drop image</span>
                </label>
              </div>
            )}
            {data && (
              <div className="mt-4 p-4 border-t-2 border-gray-200">
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="font-bold py-2 px-4 border-b">Label:</th>
                      <th className="font-bold py-2 px-4 border-b text-right">Confidence:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">{data.class}</td>
                      <td className="py-2 px-4 border-b text-right">{confidence}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-64">
                <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
                <span className="mt-4 text-lg">Processing</span>
              </div>
            )}
          </div>
        </div>
        {data && (
          <div className="flex justify-center mt-4">
            <button
              onClick={clearData}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear
            </button>
          </div>
        )}
      </main>
    </React.Fragment>
  );
};
