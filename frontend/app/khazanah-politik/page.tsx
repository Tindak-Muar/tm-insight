import PageHeader from "@/components/ui/PageHeader";
import { BookOpen } from "lucide-react";

import KhazanahClient from "./KhazanahClient";

type PageProps = {
  searchParams: Promise<{
    success?: string;
  }>;
};

export default async function KhazanahPolitikPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  return (
    <div className="space-y-8">
      <PageHeader
        title="Khazanah Politik"
        description="Repositori aset pengetahuan untuk dasar, manifesto, penyelidikan, ucapan, media dan dokumen strategik."
        icon={BookOpen}
      />

      <KhazanahClient
        success={params.success}
      />
    </div>
  );
}