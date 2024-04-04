/* eslint-disable */

// import { RenderFunctionComponent } from "../applicationTableData";

export default interface ITutorApplications {
  id: number;
  fullName?: string;
  sex: boolean;
  city: string;
  age: number;
  education: string;
  additionalEducation: string;
  languages: string;
  features: string;
  interest: string;
  hobbies: string;
  businessTrip: boolean;
  informalHoursWork: boolean;
  willingnesImproveSkills: boolean;
  extraInfo: string;
  additionalDocuments: string;
  render?: any;
}
