import React from "react";
import { useState } from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import FolderIcon from "@mui/icons-material/Folder";
import PostAddIcon from "@mui/icons-material/PostAdd";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SegmentRoundedIcon from "@mui/icons-material/SegmentRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const Folder = ({ folderData, handleFileAddition, handleFolderAddition }) => {
  const [open, setOpen] = useState(false);
  const [openInputField, setOpenInputField] = useState(false);
  const [openInputFieldFolder, setOpenInputFieldFolder] = useState(false);

  const handleParentClick = (event) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  const handleFileOpen = () => {
    setOpenInputField((prev) => !prev);
  };

  const handleFolderOpen = () => {
    setOpenInputFieldFolder((prev) => !prev);
  };
  const handleFileInput = (e) => {
    if (e.target.value) {
      handleFileAddition(e, e.target.value, folderData?.name);
    }
    setOpenInputField(false);
  };

  const handleFolderInput = (e) => {
    if (e.target.value) {
      handleFolderAddition(e, e.target.value, folderData?.name);
    }
    setOpenInputFieldFolder(false);
  };

  return (
    <div onClick={(event) => handleParentClick(event)}>
      {folderData?.type === "file" ? (
        <>
          <div
            style={{
              display: "flex",
              gap: "20px",
              height: "30px",
              fontSize: "14px",
              alignItems: "center",
              fontWeight: "normal",
            }}
          >
            <InsertDriveFileIcon style={{ color: "rgb(101 102 120)" }} />
            {folderData?.name}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "5px",
                fontSize: "14px",
                alignItems: "center",
              }}
            >
              <KeyboardArrowRightRoundedIcon />
              <FolderIcon style={{ color: "#ac6900" }} />
              {folderData?.name}
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <PostAddIcon onClick={handleFileOpen} />
              <FolderOpenIcon onClick={handleFolderOpen} />
            </div>
          </div>

          {open && (
            <div style={{ paddingLeft: "40px" }}>
              {openInputField && (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    height: "24px",
                    margin: "2px 0px",
                  }}
                >
                  <SegmentRoundedIcon
                    style={{ display: "flex", alignItems: "center" }}
                  />
                  <input
                    style={{
                      outline: "none",
                      backgroundColor: "unset",
                      border: "0.1px solid #2573ff",
                      borderRadius: "2px",
                      color: "white",
                    }}
                    autoFocus={true}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleFileInput(e);
                      }
                    }}
                    onBlur={(e) => handleFileInput(e)}
                  ></input>
                </div>
              )}
              {openInputFieldFolder && (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    height: "24px",
                    margin: "2px 0px",
                  }}
                >
                  <SegmentRoundedIcon
                    style={{ display: "flex", alignItems: "center" }}
                  />
                  <input
                    style={{
                      outline: "none",
                      backgroundColor: "unset",
                      border: "0.1px solid #2573ff",
                      borderRadius: "2px",
                      color: "white",
                    }}
                    autoFocus={true}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleFolderInput(e);
                      }
                    }}
                    onBlur={(e) => handleFolderInput(e)}
                  ></input>
                </div>
              )}
              {folderData?.folderData?.map((item) => {
                return (
                  <Folder
                    folderData={item}
                    handleFileAddition={handleFileAddition}
                    handleFolderAddition={handleFolderAddition}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Folder;
