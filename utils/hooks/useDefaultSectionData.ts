
// utils/hooks/useDefaultSectionData.ts
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../functions/axios";

export const useDefaultSectionData = (endpoint: string) => {
  const [sectionData, setSectionData] =
    useState<DefaultSectionInterface | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state

  const fetchSectionData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axiosInstance.get<DefaultSectionInterface>(
        `https://cms.jmassociates.co.ke/api/content/item/${endpoint}?locale=en`
      );
      setSectionData(data); // Set fetched data
    } catch (axiosError: unknown) {
      // Handle errors
      const message =
        axiosError instanceof Error
          ? axiosError.message
          : "An unknown error occurred";
      setError(message);
    } finally {
      setLoading(false); // Stop loading
    }
  }, [endpoint]);

  // Fetch data on endpoint change
  useEffect(() => {
    fetchSectionData();
  }, [fetchSectionData]);

  // Return data, error, and loading state
  return { sectionData, error, loading };
};
