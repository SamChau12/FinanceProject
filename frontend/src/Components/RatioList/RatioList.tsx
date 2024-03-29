import React from "react";
import { TestDataCompany } from "../Table/testData";

type Props = {};
const data = TestDataCompany[0]; //very  first actual object
type Company = typeof data;
const config = [
  {
    label: "Company Name",
    render: (company: Company) => company.companyName,
    subTitle: "this is the company name",
  },
  {
    label: "Company Name",
    render: (company: Company) => company.companyName,
    subTitle: "this is the company name",
  },
];
const RatioList = (props: Props) => {
  const renderedRow = config.map((row) => {
    return (
      <li className="py-6 sm:py-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {row.label}
            </p>
            <p className="text-sm text-gray-500 truncate">
              <a
                href="/cdn-cgi/l/email-protection"
                className="__cf_email__"
                data-cfemail="17727a767e7b57607e7973646372653974787a"
              >
                {row.subTitle && row.subTitle}
              </a>
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 w-full">
      <ul className="divide-y divide-gray-200">{renderedRow}</ul>
    </div>
  );
};

export default RatioList;
