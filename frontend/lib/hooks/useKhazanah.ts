"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { useSearchParams } from "next/navigation";

import api from "@/lib/api/client";

import type {
  CreateKnowledgeAssetInput,
  KnowledgeAssetDTO,
  PaginatedKnowledgeAssetsDTO,
  UpdateKnowledgeAssetInput,
} from "@/lib/khazanah/types";

export interface UseKhazanahResult {
  assets: KnowledgeAssetDTO[];

  total: number;
  page: number;
  pageSize: number;
  totalPages: number;

  loading: boolean;
  error: string | null;

  refresh: () => Promise<void>;

  createAsset: (
    data: CreateKnowledgeAssetInput
  ) => Promise<KnowledgeAssetDTO>;

  updateAsset: (
    id: number,
    data: UpdateKnowledgeAssetInput
  ) => Promise<KnowledgeAssetDTO>;

  deleteAsset: (
    id: number
  ) => Promise<void>;
}

export function useKhazanah(): UseKhazanahResult {
  const searchParams = useSearchParams();

  const [assets, setAssets] =
    useState<KnowledgeAssetDTO[]>([]);

  const [total, setTotal] =
    useState(0);

  const [page, setPage] =
    useState(1);

  const [pageSize, setPageSize] =
    useState(20);

  const [totalPages, setTotalPages] =
    useState(1);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const query =
        searchParams.toString();

      const response =
        await api.get<PaginatedKnowledgeAssetsDTO>(
          query
            ? `/api/khazanah-politik?${query}`
            : "/api/khazanah-politik"
        );

      if (!response.success) {
        throw new Error(
          response.message
        );
      }

      setAssets(response.data.assets);

      setTotal(response.data.total);

      setPage(response.data.page);

      setPageSize(
        response.data.pageSize
      );

      setTotalPages(
        response.data.totalPages
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ralat tidak diketahui."
      );
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  const createAsset = useCallback(
    async (
      data: CreateKnowledgeAssetInput
    ) => {
      const response =
        await api.post<KnowledgeAssetDTO>(
          "/api/khazanah-politik",
          data
        );

      if (!response.success) {
        throw new Error(
          response.message
        );
      }

      await refresh();

      return response.data;
    },
    [refresh]
  );

  const updateAsset = useCallback(
    async (
      id: number,
      data: UpdateKnowledgeAssetInput
    ) => {
      const response =
        await api.put<KnowledgeAssetDTO>(
          `/api/khazanah-politik/${id}`,
          data
        );

      if (!response.success) {
        throw new Error(
          response.message
        );
      }

      await refresh();

      return response.data;
    },
    [refresh]
  );

  const deleteAsset = useCallback(
    async (id: number) => {
      const response =
        await api.delete<null>(
          `/api/khazanah-politik/${id}`
        );

      if (!response.success) {
        throw new Error(
          response.message
        );
      }

      await refresh();
    },
    [refresh]
  );

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return {
    assets,

    total,
    page,
    pageSize,
    totalPages,

    loading,
    error,

    refresh,

    createAsset,
    updateAsset,
    deleteAsset,
  };
}