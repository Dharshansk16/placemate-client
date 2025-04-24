import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";

type CompanyCardProps = {
  companyName?: string;
  icon?: IconType;
  description?: string;
  img?: string;
};

const CompanyCard = ({
  companyName,
  icon: Icon,
  description,
  img,
}: CompanyCardProps) => {
  return (
    <div className="mt-5 cursor-pointer hover:scale-95 transition-all">
      <div className="p-4 w-full text-left shadow hover:shadow-md transition my-4 border-2 rounded-2xl">
        <div className="flex items-center gap-4">
          {Icon && <Icon className="text-4xl" />}
          {img && (
            <Image
              src={img}
              alt="logo"
              width={20}
              height={10}
              className="object-contain"
            />
          )}
          <span className="text-2xl font-semibold text-gray-800">
            {companyName}
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-lg text-gray-900 font-semibold">{companyName}</h3>
          <p className="text-base text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
