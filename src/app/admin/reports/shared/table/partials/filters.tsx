'use client';

import { FilterDrawerView } from '@/components/controlled-table/table-filter';
import { type Table as ReactTableType } from '@tanstack/react-table';
import { useState } from 'react';
import { PiFunnel } from 'react-icons/pi';
import { Button, Flex, Input } from 'rizzui';

type SearchProps = {
  reporting_date: string;
};

type TableToolbarProps<T extends Record<string, any>> = {
  table: ReactTableType<T>;
  search: SearchProps;
  onSearchChange: (newSearch: Partial<SearchProps>) => void;
};

export default function Filters<TData extends Record<string, any>>(
  props: TableToolbarProps<TData>
) {
  const { table, search, onSearchChange } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <FilterDrawerView
        isOpen={openDrawer}
        drawerTitle="Products Filters"
        setOpenDrawer={setOpenDrawer}
      >
        <div className="grid grid-cols-1 gap-6">
          <Input
            type="text"
            size="lg"
            label="Reporting Date"
            placeholder="Search Reporting Date"
            className="w-full [&>label>span]:font-medium"
            inputClassName="text-sm"
            value={search.reporting_date}
            onChange={(e) => onSearchChange({ reporting_date: e.target.value })}
          />
        </div>
      </FilterDrawerView>

      <Flex align="center" gap="3" className="w-auto">
        <Button
          variant={'outline'}
          onClick={() => setOpenDrawer(!openDrawer)}
          className="h-9 pe-3 ps-2.5"
        >
          <PiFunnel className="me-1.5 size-[18px]" strokeWidth={1.7} />
          Filters
        </Button>
      </Flex>
    </div>
  );
}