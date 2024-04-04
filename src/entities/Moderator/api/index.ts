import { ReauthBaseQuery } from "@/src/app/config/reauthBaseQuery";
import { ApplicationStatuses } from "@/src/shared/types/application";
import { ISearchParams, MessageType } from "@/src/shared/types/general";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IModerHirers, IModerSingleHirer, IModerSingleTutor, IModerTutors } from "../types/application";

const prefix = ":5004";

export const moderatorApi = createApi({
  reducerPath: "api/moderator",
  baseQuery: ReauthBaseQuery(prefix),
  tagTypes: ["applications"],
  endpoints: build => ({
    changeApplicationStatus: build.mutation<MessageType, { applicationId: number; statusId: ApplicationStatuses }>({
      query: data => ({
        method: "PATCH",
        body: data,
        url: "/api/moderation/change-application-status",
      }),
    }),
    getTutorApplications: build.query<IModerTutors, ISearchParams<{}>>({
      query: data => ({
        url: "/api/moderation/tutor-applications",
        params: {
          search: data.search,
          limit: data.limit,
          page: data.page,
          order: data.order,
        },
      }),
    }),
    getHirerApplications: build.query<IModerHirers, ISearchParams<{}>>({
      query: data => ({
        url: "/api/moderation/hirer-applications",
        params: {
          search: data.search,
          limit: data.limit,
          page: data.page,
          order: data.order,
        },
      }),
    }),
    getSingleTutorApplication: build.query<IModerSingleTutor, { id: number }>({
      query: ({ id }) => ({
        url: `/api/moderation/tutor-applications/${id}`,
      }),
    }),
    getSingleHirerApplication: build.query<IModerSingleHirer, { id: number }>({
      query: ({ id }) => ({
        url: `/api/moderation/hirer-applications/${id}`,
      }),
    }),
  }),
});

export const {
  useChangeApplicationStatusMutation,
  useGetHirerApplicationsQuery,
  useGetSingleHirerApplicationQuery,
  useGetSingleTutorApplicationQuery,
  useGetTutorApplicationsQuery,
} = moderatorApi;
