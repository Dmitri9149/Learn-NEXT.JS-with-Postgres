import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import {fetchBreedsQuantity} from '@/app/lib/data';
 
export default async function Page() {
  const breedsQuantity = await fetchBreedsQuantity();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Total Breeds" value={breedsQuantity} type="breeds" />
        <Card
          title="Total Customers"
          value={1}
          type="customers"
        />
      </div>
    </main>
  );
}