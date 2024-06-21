"use client";

import { TechniqueTypeResponseDto } from "@/dtos/response/TechniqueTypeResponseDto";

export function CraftTechniqueTypesIds({
  technique,
  handleAddTechnique,
  handleRemoveTechnique,
  techniqueTypeIds,
}: {
  technique: TechniqueTypeResponseDto[];
  handleAddTechnique: any;
  handleRemoveTechnique: any;
  techniqueTypeIds: number[];
}) {
  const unselectedTechnique = technique.filter(
    (tec) => !techniqueTypeIds.includes(tec.Id)
  );
  const selectedTechnique = technique.filter((tec) =>
    techniqueTypeIds.includes(tec.Id)
  );

  return (
    <div>
      <div className="col-span-2 sm:col-span-1 flex flex-col">
        <label
          htmlFor="technique"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Técnicas Artesanales
        </label>
        <div>
          {unselectedTechnique.length > 0 ? (
            <select
              id="opcionesT"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-1/3 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              {unselectedTechnique.map((technique) => (
                <option key={technique.Id} value={technique.Id}>
                  {technique.Name}
                </option>
              ))}
            </select>
          ) : (
            <span
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-1/3
                p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-primary-500
                dark:focus:border-primary-500"
            >
              Vacío
            </span>
          )}
          <button
            type="button"
            id="addTechnique"
            onClick={handleAddTechnique}
            className={`text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
              technique.length === techniqueTypeIds.length
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-blue-500"
            }`}
            disabled={technique.length === techniqueTypeIds.length}
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Agregar Técnica
          </button>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 flex flex-col">
        <span className="mb-2">Técnicas seleccionadas</span>{" "}
        <ul className="flex flex-wrap">
          {selectedTechnique
            .sort((a, b) => a.Name.localeCompare(b.Name))
            .map((technique, index) => (
              <span
                className="bg-blue-100 text-blue-800 text-xs font-medium me-2 mb-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 flex-col"
                key={index}
              >
                {technique.Name}
                <button
                  type="button"
                  className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                  data-dismiss-target="#badge-dismiss-default"
                  aria-label="Remove"
                  onClick={() => handleRemoveTechnique(technique.Id)}
                >
                  <svg
                    className="w-2 h-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Remove badge</span>
                </button>
              </span>
            ))}
        </ul>
      </div>
    </div>
  );
}
