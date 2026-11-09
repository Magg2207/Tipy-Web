// Mảng lưu danh sách ảnh
const photos = [
    {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700",
        title: "Thiên nhiên"
    },
    {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700",
        title: "Núi và hồ"
    },
    {
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700",
        title: "Phong cảnh"
    },
    {
        src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=700",
        title: "Hoàng hôn"
    },
    {
        src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=700",
        title: "Bình minh"
    },
    {
        src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700",
        title: "Rừng xanh"
    }
];

// Lấy khu vực hiển thị ảnh
const gallery = document.getElementById("gallery");

// Duyệt qua mảng photos
for (let i = 0; i < photos.length; i++) {

    // Tạo thẻ chứa ảnh
    const card = document.createElement("div");
    card.className = "photo-card";

    // Tạo phần tử ảnh
    const img = document.createElement("img");
    img.src = photos[i].src;
    img.alt = photos[i].title;

    // Tạo tiêu đề ảnh
    const title = document.createElement("h3");
    title.textContent = photos[i].title;

    // Đưa ảnh và tiêu đề vào card
    card.appendChild(img);
    card.appendChild(title);

    // Đưa card vào gallery
    gallery.appendChild(card);
}