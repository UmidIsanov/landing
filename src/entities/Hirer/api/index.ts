import { ReauthBaseQuery } from "@/src/app/config/reauthBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  FullHirerProfileApplication,
  HirerProfileApplicationsList,
  IPostHirer,
  IPostHirerResponse,
  PutHirerType,
} from "../types/application";
import { ISearchParams, MessageType } from "@/src/shared/types/general";
import { ApplicationStatuses } from "@/src/shared/types/application";
import { IHirerConnectList, ISingleHirerConnect } from "../types/connect";
import { ConnectStatuses } from "@/src/shared/types/connect";

const prefix = ":5002";

export const hirerApi = createApi({
  reducerPath: "api/hirer",
  baseQuery: ReauthBaseQuery(prefix),
  tagTypes: ["connects", "applications", "single_connect", "single_application"],
  endpoints: build => ({
    postHirerApplication: build.mutation<IPostHirerResponse, IPostHirer>({
      invalidatesTags: [{ type: "applications", id: "LIST" }],
      query: data => {
        return {
          url: "/api/hirer/create-application",
          method: "POST",
          body: data,
        };
      },
    }),
    getHirerApplications: build.query<HirerProfileApplicationsList, ISearchParams<{ status?: ApplicationStatuses }>>({
      query: data => ({
        url: "/api/hirer/applications",
        params: {
          search: data.search,
          limit: data.limit,
          order: data.order,
          page: data.page,
          status: data.status,
        },
      }),
      providesTags: [{ type: "applications", id: "LIST" }],
    }),
    getSingleHirerApplication: build.query<FullHirerProfileApplication, number>({
      query: data => ({
        url: `/api/applications/${data}`,
      }),
      providesTags: [{ type: "single_application", id: "SINGLE" }],
    }),
    putSingleHirerApplication: build.mutation<MessageType, { id: number; data: PutHirerType }>({
      query: data => ({ url: `/api/hirer/applications/${data.id}`, body: data, method: "PUT" }),
      invalidatesTags: [{ type: "single_application", id: "SINGLE" }],
    }),
    deleteSingleHirerApplication: build.mutation<MessageType, number>({
      query: data => ({ url: `/api/hirer/applications/${data}`, method: "DELETE" }),
      invalidatesTags: [{ type: "applications", id: "LIST" }],
    }),
    changeApplicationStatus: build.mutation<
      MessageType,
      { id: number; status: ApplicationStatuses.ACTIVE | ApplicationStatuses.DISABLED }
    >({
      query: data => ({
        url: `/api/hirer/change-application-status/${data.id}`,
        body: { status: data.status },
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "single_application", id: "SINGLE" }],
    }),
    createConnect: build.mutation<MessageType, { hirerId: number; tutorId: number }>({
      query: data => ({
        url: "/api/connect/create-connect",
        method: "POST",
        body: data,
      }),
    }),
    getConnects: build.query<
      IHirerConnectList,
      Omit<ISearchParams<{ are_incoming: 0 | 1; status: ConnectStatuses }>, "search">
    >({
      query: data => ({
        url: "/api/connect/connects",
        params: {
          order: data.order,
          status: data.status,
          limit: data.limit,
          page: data.page,
          are_incoming: data.are_incoming,
        },
      }),
      providesTags: [{ type: "connects", id: "LIST" }],
    }),
    getSingleConnect: build.query<ISingleHirerConnect, number>({
      query: data => `/api/connect/connects/${data}`,
      providesTags: [{ type: "single_connect", id: "SINGLE" }],
    }),
    answerToConnect: build.mutation<
      MessageType,
      { connectId: number; statusId: ConnectStatuses.ACCEPTED | ConnectStatuses.REJECTED }
    >({
      query: data => ({
        url: `/api/connect/answer-to-connect/${data.connectId}`,
        method: "POST",
        body: { statusId: data.statusId },
      }),
    }),
  }),
});

export const {
  usePostHirerApplicationMutation,
  useAnswerToConnectMutation,
  useChangeApplicationStatusMutation,
  useCreateConnectMutation,
  useDeleteSingleHirerApplicationMutation,
  useGetConnectsQuery,
  useGetHirerApplicationsQuery,
  useGetSingleConnectQuery,
  useGetSingleHirerApplicationQuery,
  usePutSingleHirerApplicationMutation,
} = hirerApi;
