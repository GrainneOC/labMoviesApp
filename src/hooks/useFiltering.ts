import { useState } from "react";

interface Filter {
    name: string;
    value: string;
    condition: (item: any, value: string) => boolean;
}

const useFiltering = (filters: Filter[]) => {
  const [filterValues, setFilterValues] = useState(() => {
    const filterInitialValues = filters.map((f) => ({
      name: f.name,
      value: f.value,
    }));
    return filterInitialValues;
  });

  const filterFunction = (collection: any) => {
    if (!collection || !Array.isArray(collection)) {
      return [];
    }
    
    let filteredData = collection;
    
    // Apply each filter one by one
    filters.forEach((filter, index) => {
      const currentValue = filterValues[index].value;
      if (currentValue && currentValue !== "All") {
        filteredData = filteredData.filter((item: any) => 
          filter.condition(item, currentValue)
        );
      }
    });
    
    return filteredData;
  };

  return {
    filterValues,
    setFilterValues,
    filterFunction,
  };
};

export default useFiltering;
