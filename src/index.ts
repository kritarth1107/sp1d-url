import axios, { AxiosError } from "axios";

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
      const response = await axios.post(
        `${this.baseUrl}/shorten`,
        { originalUrl, shortCode, validity },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );
  
      return response.data.shortUrl;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const serverMessage = err.response?.data?.message;
        throw new Error(serverMessage || err.message || "Unknown Axios error");
      }
  
      // Fallback for unexpected errors
      throw new Error("Something went wrong while shortening the URL.");
    }
  }
}
