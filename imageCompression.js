const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Function to compress image
async function compressImage(inputPath, outputPath, quality = 80) {
    try {
        // Get file extension
        const ext = path.extname(inputPath).toLowerCase();
        
        // Read the image and apply compression based on the file type
        let compressedImage;
        if (ext === '.jpg' || ext === '.jpeg') {
            compressedImage = sharp(inputPath).jpeg({ quality: quality });
        } else if (ext === '.png') {
            compressedImage = sharp(inputPath).png({ compressionLevel: 9 });
        } else if (ext === '.webp') {
            compressedImage = sharp(inputPath).webp({ quality: quality });
        } else {
            throw new Error("Unsupported image format. Only JPG, PNG, and WebP are supported.");
        }

        // Write the compressed image to the output path
        await compressedImage.toFile(outputPath);
        console.log(`Image compressed successfully: ${outputPath}`);
    } catch (error) {
        console.error(`Error compressing image: ${error.message}`);
    }
}

// Example usage
const inputImagePath = 'input.jpg'; // Path to the input image
const outputImagePath = 'output.jpg'; // Path to save the compressed image

// Call the function with a quality of 80 (out of 100)
compressImage(inputImagePath, outputImagePath, 80);
