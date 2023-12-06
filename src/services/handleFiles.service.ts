export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      resolve(base64String); // Lấy phần base64 từ chuỗi data URL
    };

    reader.onerror = reject;

    // Đọc thông tin kích thước của ảnh
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;
      canvas.width = 500; // Kích thước mới
      canvas.height = (500 * img.height) / img.width;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Chuyển đổi canvas thành Base64
      const resizedBase64 = canvas.toDataURL("image/jpeg");
      resolve(resizedBase64);
    };

    reader.readAsDataURL(file);
  });
};
