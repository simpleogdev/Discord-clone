"use client";

import { FC } from "react";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";

interface FileUpload {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload: FC<FileUpload> = ({ onChange, value, endpoint }) => {
  const file = value?.split(".").pop();
  if (value && file !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image src={value} alt="upload" className="rounded-full" fill />
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    ></UploadDropzone>
  );
};

export default FileUpload;
