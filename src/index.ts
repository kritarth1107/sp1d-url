import axios from 'axios';

export interface CreateOptions {
  shortCode?: string;
  validity?: string;
}

export class Sp1d {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl = 'https://api.sp1dy.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async create(originalUrl: string, shortCode?: string, validity?: string): Promise<string> {
    try {
      const res = await axios.post(`${this.baseUrl}/shorten`, {
        originalUrl,
        shortCode,
        validity,
      }, {
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        }
      });

      return res.data.shortUrl;
    } catch (err: any) {
      throw new Error(err?.response?.data?.message || 'URL shortening failed');
    }
  }
}
