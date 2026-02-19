import PropertyDetails from "@/components/PropertyDetails";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <main className="min-h-screen">
     <PropertyDetails params={params}/>
    </main>
  );
}