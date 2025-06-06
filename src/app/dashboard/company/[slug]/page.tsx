import CompanyTabs from "../_components/CompanyTabs";
import { fetchCompanyData } from "@/lib/fetchCompanyData";
import type { Company } from "@/types/company";

interface Props {
  params: {
    slug: string;
  };
}

export default async function CompanyInfoPage({ params }: Props) {
  const { slug } = params;
  const company: Company | null = await fetchCompanyData(slug);

  if (!company) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
        <p>Sorry, we could not find any data for "{slug}".</p>
      </div>
    );
  }

  return <CompanyTabs company={company} />;
}
