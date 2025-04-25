# Hướng dẫn đẩy dự án lên GitHub với nhánh `main`

###1 Khởi tạo Git trong dự án
```bash
git init

###2 Thêm tất cả file vào staging
git add .

###3 Commit
git commit -m "first commit"

###4 Đổi tên nhánh thành main
git branch -M main

###5 Đẩy code lên GitHub
git push -u origin main

##6 Mỗi lần cập nhật chỉ cần
git add .
git commit -m "Update nội dung"
git push
