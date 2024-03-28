import os

import blurhash

for filename in os.listdir('../assets/paintings'):
    if filename.endswith('.jpg'):
        image_path = os.path.join('../assets/paintings', filename)
        print(f"Image: {filename}, Hash: {blurhash.encode(image_path, x_components=4, y_components=3)}")

print('done')
