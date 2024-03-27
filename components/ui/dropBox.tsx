"use client";
import React, { useState, useEffect } from "react";
import ImageComponent from "@/node_modules/next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const DropBox = (props, ref) => {
  const [files, setFiles] = useState({});

  const createImage = (file: any) => {
    let fileArray = [] as any;
    for (let i = 0; i < file.target.files.length; i++) {
      
      fileArray.push(file.target.files[i]);
    }

    if (files && Object.values(files).length) {
      setFiles((prev: any) => prev.concat(fileArray));
      return;
    }

    setFiles(fileArray);
    return;
  };

  useEffect(() => {
    props.onChange(files);
  }, [files]);


  return (
    <div>
      <Label className="cursor-pointer" htmlFor="upload">
        <ImageComponent
          src={"/upload.png"}
          height={300}
          width={300}
          alt="upload"
        />
      </Label>

      <Input
        className="hidden"
        name="upload"
        id="upload"
        type="file"
        onChange={(e) => createImage(e)}
        multiple
      />

      <div className="flex flex-row gap-[50px] flex-wrap">
        {files
          ? Object.values(files).map((item, key): any => (
              <div className="w-[150px] h-[150px]" key={key}>
                <img
                  src={URL.createObjectURL(item)}
                  alt={`image ${key}`}
                  className="w-full h-full"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default React.forwardRef(DropBox);
