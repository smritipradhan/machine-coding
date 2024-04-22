import "./App.css";
import { useEffect, useState } from "react";
import Folder from "./Folder";

const data = [
  {
    name: "src",
    type: "folder",
    folderData: [
      {
        name: "App.css",
        type: "file",
      },
      {
        name: "index.scss",
        type: "file",
      },
      {
        name: "a",
        type: "folder",
        folderData: [
          {
            name: "pretyui.css",
            type: "file",
          },
          {
            name: "vbnm.scss",
            type: "file",
          },
        ],
      },
    ],
  },
  {
    name: "asset",
    type: "file",
  },
];
function App() {
  const [folderData, setFolderData] = useState(data);

  function addFileToFolderData(folderData, fileName, parentName) {
    // Iterate through each item in the folderData array
    for (let i = 0; i < folderData?.length; i++) {
      const item = folderData[i];
      // If the item is a folder and its name matches the parentName
      if (item?.type === "folder" && item?.name === parentName) {
        // Add the file to the folderData of this folder
        item?.folderData?.unshift({
          name: fileName,
          type: "file",
        });

        return; // Exit the function after adding the file
      } else if (item?.type === "folder") {
        // If the item is a folder, recursively search its folderData
        addFileToFolderData(item?.folderData, fileName, parentName);
      }
    }
  }

  function addFolderToFolderData(folderData, fileName, parentName) {
    // Iterate through each item in the folderData array
    for (let i = 0; i < folderData?.length; i++) {
      const item = folderData[i];
      // If the item is a folder and its name matches the parentName
      if (item?.type === "folder" && item?.name === parentName) {
        // Add the file to the folderData of this folder

        item?.folderData?.unshift({
          name: fileName,
          type: "folder",
          folderData: [],
        });

        return; // Exit the function after adding the file
      } else if (item?.type === "folder") {
        // If the item is a folder, recursively search its folderData
        addFolderToFolderData(item?.folderData, fileName, parentName);
      }
    }
  }

  const handleFileAddition = (event, fileName, parentName) => {
    event.stopPropagation();
    addFileToFolderData(folderData, fileName, parentName);
    console.log({ folderData });
    setFolderData([...folderData]);
  };

  const handleFolderAddition = (event, fileName, parentName) => {
    event.stopPropagation();

    addFolderToFolderData(folderData, fileName, parentName);
    console.log({ folderData });
    setFolderData([...folderData]);
  };

  return (
    <div
      className="App"
      style={{
        cursor: "pointer",
        backgroundColor: "rgb(30 32 36 / 93%)",
        color: "white",
        maxWidth: "300px",
        height: "100vh",
        padding: "20px",
      }}
    >
      {Array.isArray(folderData) &&
        folderData?.length &&
        folderData?.map((elementData) => {
          return (
            <Folder
              folderData={elementData}
              handleFileAddition={handleFileAddition}
              handleFolderAddition={handleFolderAddition}
            />
          );
        })}
    </div>
  );
}

export default App;
