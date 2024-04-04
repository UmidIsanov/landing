import { ReauthBaseQuery } from "@/src/app/config/reauthBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  IPostTutor,
  IPostTutorResponse,
  IUpdateTutorApplication,
  TutorProfileApplication,
  TutorProfileApplicationOnUpdate,
} from "../types/application";
import { ISearchParams, MessageType } from "@/src/shared/types/general";
import { ITutorProfileConnectsList, ITutorProfileSingleConnect } from "../types/connect";
import { ConnectStatuses } from "@/src/shared/types/connect";

const prefix = ":5001";

const pushIfIsExist = (formData: FormData, key: string, data?: string | File | null) => {
  if (data) {
    formData.append(key, data);
  }
};

export const tutorApi = createApi({
  reducerPath: "api/tutor",
  baseQuery: ReauthBaseQuery(prefix),
  tagTypes: ["connects", "single_connect", "single_application"],
  endpoints: build => ({
    postTutorApplication: build.mutation<IPostTutorResponse, IPostTutor>({
      invalidatesTags: [{ type: "single_application", id: "LIST" }],
      query: data => {
        const formData = new FormData();
        formData.append("gender", data.gender);
        formData.append("cityId", String(data.cityId));
        formData.append("dateOfBirth", data.dateOfBirth);
        formData.append("educationIds", data.educationIds);
        formData.append("languageIds", data.languageIds);
        if (data.addEducation) {
          formData.append("addEducation", data.addEducation);
        }
        formData.append("experience", data.experience);
        formData.append("specialNeedsIds", data.specialNeedsIds);
        formData.append("otherInfo", data.otherInfo);
        if (data.interestsAndHobbies) {
          formData.append("interestsAndHobbies", data.interestsAndHobbies);
        }
        formData.append("businessTripOpportunity", data.businessTripOpportunity);
        formData.append("readinessToContinueStudying", data.readinessToContinueStudying);
        formData.append("posibilityOfIrregularSchedule", data.posibilityOfIrregularSchedule);
        formData.append("videoLink", data.videoLink);
        if (data.docs) {
          data.docs.forEach(doc => {
            formData.append("docs", doc);
          });
        }

        return {
          url: "/api/tutor/create-application",
          body: formData,
          method: "POST",
        };
      },
    }),
    getTutorApplication: build.query<TutorProfileApplication, unknown>({
      query: () => ({
        url: "/api/tutor/application",
      }),
      providesTags: [{ type: "single_application", id: "SINGLE" }],
    }),
    putTutorApplication: build.mutation<MessageType, IUpdateTutorApplication>({
      query: data => {
        const formData = new FormData();
        pushIfIsExist(formData, "gender", data.gender);
        pushIfIsExist(formData, "cityId", String(data.cityId));
        pushIfIsExist(formData, "dateOfBirth", data.dateOfBirth);
        pushIfIsExist(formData, "educationIds", data.educationIds);
        pushIfIsExist(formData, "addEducation", data.addEducation);
        pushIfIsExist(formData, "experience", data.experience);
        pushIfIsExist(formData, "specialNeedsIds", data.specialNeedsIds);
        pushIfIsExist(formData, "otherInfo", data.otherInfo);
        if (data.interestsAndHobbies) {
          formData.append("interestsAndHobbies", data.interestsAndHobbies);
        }
        pushIfIsExist(formData, "businessTripOpportunity", data.businessTripOpportunity);
        pushIfIsExist(formData, "readinessToContinueStudying", data.readinessToContinueStudying);
        pushIfIsExist(formData, "posibilityOfIrregularSchedule", data.posibilityOfIrregularSchedule);
        pushIfIsExist(formData, "videoLink", data.videoLink);
        if (data.docs) {
          data.docs.forEach(doc => {
            formData.append("docs", doc);
          });
        }

        return {
          url: "/api/tutor/application",
          method: "PUT",
          body: formData,
        };
      },
    }),
    getOnUpdateTutorApplication: build.query<TutorProfileApplicationOnUpdate, unknown>({
      query: () => "/api/tutor/application/on-update",
    }),
    getConnects: build.query<
      ITutorProfileConnectsList,
      Omit<ISearchParams<{ are_incoming: 0 | 1; status: ConnectStatuses }>, "search">
    >({
      query: data => ({
        url: "/api/connect/connects",
        params: {
          order: data.order,
          are_incoming: data.are_incoming,
          status: data.status,
          limit: data.limit,
          page: data.page,
        },
      }),
    }),
    getSingleConnect: build.query<ITutorProfileSingleConnect, number>({
      query: data => `/api/connect/connects/${data}`,
      providesTags: [{ type: "single_connect", id: "SINGLE" }],
    }),
    createConnect: build.mutation<MessageType, { hirerId: number }>({
      query: data => ({
        url: "/api/connect/create-connect",
        body: {
          hirerId: data.hirerId,
        },
        method: "POST",
      }),
      invalidatesTags: [{ type: "connects", id: "LIST" }],
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
  usePostTutorApplicationMutation,
  usePutTutorApplicationMutation,
  useGetTutorApplicationQuery,
  useAnswerToConnectMutation,
  useCreateConnectMutation,
  useGetSingleConnectQuery,
  useGetConnectsQuery,
  useGetOnUpdateTutorApplicationQuery,
} = tutorApi;
