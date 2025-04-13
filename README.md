# sp1d-url

**Simple URL Shortener Client for JS/TS projects**  
Easily shorten URLs using your custom API key, with support for custom shortcodes and expiration.

## ✨ Features

- ✅ Works in both JavaScript and TypeScript
- ⚡ Minimal, fast, and no dependencies except `axios`
- 🏷️ Supports custom short codes
- ⏳ Optional expiry/validity for shortened URLs

## 📦 Installation

```bash
npm install sp1d-url
```

## 🚀 Usage

### TypeScript / ESModule

```ts
import { Sp1d } from "sp1d-url";

const sp1d = new Sp1d("your-api-key");

const shortUrl = await sp1d.create("https://kritarth.com");
const customShort = await sp1d.create("https://kritarth.com", "mycode", "7d");

console.log(shortUrl);
```

### JavaScript / CommonJS

```js
const { Sp1d } = require("sp1d-url");

const sp1d = new Sp1d("your-api-key");

sp1d.create("https://kritarth.com", "custom", "7d").then(console.log);
```

## 📖 API Reference

### `sp1d.create(originalUrl, shortCode?, validity?)`

Creates a shortened URL with optional custom shortcode and validity period.

#### Parameters

| Parameter    | Type     | Description                          |
|-------------|----------|--------------------------------------|
| originalUrl | string   | The original long URL to shorten     |
| shortCode   | string   | (Optional) Custom short link ID      |
| validity    | string   | (Optional) Validity like "7d"        |

#### Returns

`Promise<string>` - The shortened URL

## 📄 License

MIT © [Kritarth Agrawal](LICENSE)

