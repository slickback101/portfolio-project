document.getElementById('image-upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('image-input');
    const file = fileInput.files[0];

    if (file) {
        compressImage(file);
    }
});

function compressImage(file) {
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const img = new Image();
        img.src = event.target.result;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Resize image
            canvas.width = img.width / 2;
            canvas.height = img.height / 2;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Compress image
            canvas.toBlob(function(blob) {
                const compressedImage = URL.createObjectURL(blob);
                document.getElementById('compression-result').innerHTML = `<img src="${compressedImage}" />`;
            }, 'image/jpeg', 0.7);
        };
    };
    reader.readAsDataURL(file);
}
