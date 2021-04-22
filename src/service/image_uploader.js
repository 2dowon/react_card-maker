class ImageUploader {
  async upload(file) {
    const url = "https://api.cloudinary.com/v1_1/dt6q5f6qc/upload";
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "qylkilc1");

    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.json();
  }
}

export default ImageUploader;
