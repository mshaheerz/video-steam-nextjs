
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
// export const { UploadButton, UploadDropzone, Uploader } =
//   generateComponents<OurFileRouter>();



  import {
    generateUploadButton,
    generateUploadDropzone,
    generateUploader
  } from "@uploadthing/react";
   
   
  export const UploadButton = generateUploadButton<OurFileRouter>();
  export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
  export const Uploader = generateUploader<OurFileRouter>();