# Js-YouTube-Id-Parser

The easiest way to get YouTube url address with Javascript.

## Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install **js-youtube-id-parser**.

```javascript
npm install js-youtube-id-parser@latest
```

## Import Package

```javascript
import { parseYouTubeURL } from "js-youtube-id-parser";
```

## Usage

```javascript
const youtubeURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const videoID = parseYouTubeURL(youtubeURL);

if (videoID) {
  console.log("Extracted video ID:", videoID);
} else {
  console.log("Invalid YouTube URL format.");
}
```

## Support Me

This software is developed during my free time and I will be glad if somebody will support me.

Everyone's time should be valuable, so please consider donating.

[https://buymeacoffee.com/oxcakmak](https://buymeacoffee.com/oxcakmak)
