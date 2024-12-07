import {Traits, Scroll}  from '@/app/ui/dashboard/traits';
import { lusitana } from '@/app/ui/fonts';
import { fetchTraits } from '@/app/lib/data';
import styles from '@/app/ui/home.module.css';
 
export default async function Page() {
  const traits = await fetchTraits();

  return (
    <main>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {<Traits traits={traits} />}
      </div>
    </main>
  );
}