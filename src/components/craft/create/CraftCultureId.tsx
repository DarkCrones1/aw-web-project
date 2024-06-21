"use client";

import { CraftCreateRequestDto } from "@/dtos/request/create/CraftCreateRequestDto";
import { CultureResponseDto } from "@/dtos/response/CultureResponseDto";

export function CraftCultureId({
  culture,
  handleChangeCulture,
}: {
  culture: CultureResponseDto[];
  handleChangeCulture: any;
}) {
  return (
    <div className="col-span-2 sm:col-span-1">
      <label
        htmlFor="Culture"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Culturas
      </label>
      <select
        id={"opcionesCu"}
        onChange={handleChangeCulture}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
        rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-1/3
        p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
        dark:text-white dark:focus:ring-primary-500
        dark:focus:border-primary-500 mb-3"
      >
        {culture.map((culture) => (
          <option key={culture.Id} value={culture.Id}>
            {culture.Name}
          </option>
        ))}
      </select>
    </div>
  );
}
