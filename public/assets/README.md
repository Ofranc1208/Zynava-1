# Assets Folder

This folder contains all static assets (videos, images, etc.) for the ZYNAVA website.

## Folder Structure

```
public/
  assets/
    videos/     # Video files (MP4, WebM, etc.)
    images/     # Image files (JPG, PNG, SVG, etc.)
```

## How to Use

### Videos
Place your video files in `public/assets/videos/` and reference them in your code as:
```tsx
<video src="/assets/videos/your-video.mp4" />
```

**Current video expected:**
- `hero-background.mp4` - Background video for the home page hero section

### Images
Place your image files in `public/assets/images/` and reference them in your code as:
```tsx
<img src="/assets/images/your-image.jpg" alt="Description" />
```

## Important Notes

- Files in the `public` folder are served from the root path (`/`)
- Always use absolute paths starting with `/` when referencing assets
- Keep file sizes optimized for web performance
- Use appropriate formats (MP4 for videos, WebP/JPG for images)

