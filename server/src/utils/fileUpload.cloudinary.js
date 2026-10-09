/*
    File upload function use for media files
    on external cloud service like Cloudinary.

    In local directory we keep file temporary and 
    then upload on cloud service and then remove
    from local directory.

    After uploading file on cloud service we get
    response from cloudinary which contain file URL.
*/

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file uploaded successfully
    // console.log("File uploaded successfully ", response.url);

    /* 
        "fs" Remove the locally saved temporary file
        as the upload operation got failed.
    */

    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    /* 
        "fs" Remove the locally saved temporary file
        as the upload operation got failed.
    */
    fs.unlinkSync(localFilePath);

    return null;
  }
};

export { uploadOnCloudinary };
