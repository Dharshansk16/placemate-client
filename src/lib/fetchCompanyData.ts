import { Company } from "@/types/company";

export async function fetchCompanyData(slug: string): Promise<Company> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const AUTH_TOKEN = process.env.AUTH_TOKEN;

  if (!API_URL || !AUTH_TOKEN) {
    throw new Error(
      "API_URL or AUTH_TOKEN is not set in environment variables"
    );
  }

  const res = await fetch(
    `${API_URL}/view-info/?company_name=${encodeURIComponent(slug)}`,
    {
      method: "GET",
      headers: {
        Authorization: `Token ${AUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(
      `Failed to fetch company data: ${res.status} ${res.statusText} - ${errorText}`
    );
  }

  const data = await res.json();
  return data;
}
