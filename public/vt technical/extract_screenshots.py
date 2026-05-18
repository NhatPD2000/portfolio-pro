# -*- coding: utf-8 -*-
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

import fitz
import os
from pathlib import Path

pdf_path = 'TÀI LIỆU HỆ THỐNG VT TECHNICAL.pdf'
output_dir = 'screenshots'

Path(output_dir).mkdir(exist_ok=True)

doc = fitz.open(pdf_path)
image_count = 0

print(f'Đang xử lý: {pdf_path}')
print(f'Tổng trang: {len(doc)}')
print()

for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images()
    
    if image_list:
        print(f'Trang {page_num + 1}: Tìm thấy {len(image_list)} hình ảnh')
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)
            
            if pix.n - pix.alpha < 4:
                pix = fitz.Pixmap(fitz.csRGB, pix)
            
            filename = f'{output_dir}/screenshot_page{page_num + 1:03d}_img{img_index + 1:02d}.png'
            pix.save(filename)
            image_count += 1
            print(f'  → {filename}')

print()
print(f'Hoàn thành! Tổng cộng: {image_count} hình ảnh')
print(f'Thư mục: {os.path.abspath(output_dir)}')
