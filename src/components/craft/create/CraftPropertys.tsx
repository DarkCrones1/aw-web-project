"use client";

import { BaseCatalogCreateRequestDto } from "@/dtos/request/create/BaseCatalogCreateRequestDto";

export function CraftProperty({
  handleAddProperty,
  property,
}: {
  handleAddProperty: any;
  property: BaseCatalogCreateRequestDto;
}) {
  return (
    <div>
      <input
        type="text"
        name="Name"
        placeholder="Nombre"
        value={property.Name}
        onChange={handleAddProperty}
      />
      <input
        type="text"
        name="Description"
        placeholder="Descripción"
        value={property.Description}
        onChange={handleAddProperty}
      />
      <button>Agregar propiedad</button>
      <div>
        <span>Propiedades</span>
        <ul>{}</ul>
      </div>
    </div>
  );
}
