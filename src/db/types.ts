import { ReactElement } from "react";

type Image = {
  title: string;
  desc?: string;
  src: string;
};

export type Project = {
  title: string;
  alias: string;
  subtitle: string;
  description: string;
  image: string;
  url?: string;
  year: string;
  tags?: string[];
  images?: Image[];
};

export type WorkProject = Project & {
  company: string;
};

export type Work = {
  workplaceId: string;
  workplaceName: string;
  workplaceUrl: string;
  workplaceLogo: string;
  workplaceCity: string;
  workedFrom: string;
  workedTill: string;
  position: ReactElement<any, any>;
  jobDescription: ReactElement<any, any>;
  furtherProjects?: string[];
};
