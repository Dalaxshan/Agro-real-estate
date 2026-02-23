import PropertyList from '@/components/PropertyList';
import { Suspense } from 'react';

export const metadata = {
  title: 'Properties | Agro Real Estate',
  description: 'Explore premium agricultural, residential, and commercial properties across Sri Lanka.',
};

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-center p-8">
            <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 font-medium">Loading properties...</p>
          </div>
        </div>
      }
    >
      <PropertyList/>
    </Suspense>
  );
}