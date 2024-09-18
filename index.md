# An Image Compression Tool

## Introduction
As part of my recent portfolio project, I set out to build an Image Compression Tool using Node.js and the Sharp image-processing library. The journey was filled with challenges, new learnings, and valuable insights that molded the final product. 

The Image Compression Tool is a web-based application designed to optimize and reduce image file sizes without compromising quality. This tool leverages advanced image compression algorithms to provide fast and efficient compression, making it ideal for web developers, photographers, and anyone looking to reduce image file sizes for storage or sharing.

## Team Members
- **Esther Nnamani** - Frontend
- **Kester Uzum** - Backend

Two key features were critically considered while developing the compression tool:
- **High Compression Efficiency**
- **Real-Time Preview**

We aimed to create an experience that would be both web and mobile-friendly.

## Inspiration
The inspiration for this project came from personal experiences of struggling to resize and share high-resolution images online. The constant frustration of longer upload times, large file sizes, and loss of image quality inspired my teammate and me to create a tool that could compress images efficiently without compromising quality. The goal was to make this tool accessible to everyone—photographers, students, researchers, and web developers—ensuring smoother workflows and better user experience.

In this post, I’ll share the process from start to finish, highlighting obstacles faced, lessons learned, and the rewarding moments along the way.

## Choosing the Right Tools

- **Node.js**: We chose Node.js for its non-blocking, event-driven architecture, making it perfect for handling real-time image uploads and processing.
- **Sharp Algorithm**: Sharp is a high-performance image processing library that supports various formats, including compression, resizing, and format conversion. It integrates seamlessly with Node.js.
- **HTML & CSS**: These were used to design the frontend interface, ensuring a user-friendly experience. We focused on making the UI responsive, so the tool works seamlessly on both web and mobile platforms.

The Image Compression Tool allows users to effortlessly upload images and download the compressed version, providing an optimal balance between file size and quality.

## Most Difficult Technical Challenges

### 1. Image Compression with Sharp
Integrating Sharp into the project was challenging. Understanding how to balance image quality and file size remains a tricky problem. We wanted to ensure significant file size reductions without losing high image quality.
- **Challenge**: Quality vs. File Size

### 2. Handling Large File Uploads
Another issue was handling large image uploads. Users could potentially upload high-resolution images that exceed several megabytes, which could strain the server.
- **Challenge**: Managing large uploads efficiently

### 3. Deployment
Deploying the app on Vercel was challenging. After several tries, the deployment was successful but returned a "404 error." We decided to switch to GitHub Pages for simplicity, and the process of pushing the app was straightforward.

## Key Learnings

1. **Balancing Compression and Quality**  
   Working with image compression requires a delicate balance between reducing file size and maintaining quality. Parameters need to be tweaked based on the image type.
   
2. **Handling Large Files Efficiently**  
   Large image files can overwhelm your server if you don't put proper measures in place. Setting size limits and using memory streams were essential steps in ensuring the app handled large uploads smoothly.
   
3. **Frontend Design Matters**  
   User experience is critical to the success of any app. Building a simple, intuitive interface made the tool much more accessible and user-friendly.
   
4. **Deployment Considerations**  
   Each deployment environment comes with its own challenges. Our experience with Vercel and GitHub Pages taught us to anticipate these issues early on.

This project has reformed our mindset and methods as backend engineers. We learned the importance of clearly stating requirements, designing a prototype, and having an architecture review before starting development.

## About the Author
Kester Uzum is an enthusiastic backend engineer with a passion for creating resourceful, user-friendly applications. Specializing in backend technologies, he also enjoys bringing designs to life with clean, responsive frontends.

- **GitHub link for the project**: [https://github.com/slickback101/slickback101.github.io](https://github.com/slickback101/slickback101.github.io)
- **Deployed project page**: [https://github.com/slickback101/slickback101.github.io/deployments](https://github.com/slickback101/slickback101.github.io/deployments)
- **Project’s landing page**: [https://slickback101.github.io/](https://slickback101.github.io/)
- **LinkedIn profile**: [www.linkedin.com/in/kesteruzum](https://www.linkedin.com/in/kesteruzum)
