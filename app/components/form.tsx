"use client";

import { Label, TextInput, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import {
  User,
  Store,
  ProfileCard,
  Envelope,
  Phone,
  Chalkboard,
} from "../icons";

export function FormSubmit() {
  const [switch1, setSwitch1] = useState(false);
  return (
    <div className="m-10 max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="Nombre">Nombre y apellido</Label>
      </div>
      <TextInput
        id="Nombre"
        placeholder="Nombre y apellido"
        addon={<User />}
        required
      />
      <div className="mb-2 block">
        <Label htmlFor="Empresa">Empresa</Label>
      </div>
      <TextInput
        id="Empresa"
        placeholder="Empresa"
        addon={<Store />}
        required
      />
      <div className="mb-2 block">
        <Label htmlFor="Cargo">Cargo</Label>
      </div>
      <TextInput id="Cargo" placeholder="Cargo" addon="@" required />
      <div className="mb-2 block">
        <Label htmlFor="Email">Email</Label>
      </div>
      <TextInput id="Email" placeholder="Email" addon="@" required />
      <div className="mb-2 block">
        <Label htmlFor="Numero">Numero de telefono</Label>
      </div>
      <TextInput id="Numero" placeholder="Numero de telefono" addon="@" />
      <div className="my-3 flex h-full w-full flex-row justify-center gap-10 rounded-2xl border border-gray-200 bg-white p-3 align-middle">
        <Chalkboard className="h-15 rounded-2xl bg-gray-100 p-2" />
        <div className="flex flex-col gap-2 rounded-3xl align-middle">
          <ToggleSwitch
            checked={switch1}
            label="Utilizo SAP Business One"
            onChange={setSwitch1}
          />
          <p className="text-gray-500">
            Selecciona si utilizas SAP Business One.
          </p>
        </div>
      </div>
    </div>
  );
}
