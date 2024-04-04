import { fetchCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CustomerTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Customers',
  description: 'Official Customers of Acme',
};

const Customers = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <div className="mb-5 flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}> Customers</h1>
      </div>

      <Search placeholder="Search customers..." />
      <Suspense fallback={<CustomerTableSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  );
};

export default Customers;
