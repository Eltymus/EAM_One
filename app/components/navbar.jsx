import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function Nav() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="">
        <img src="EAMONElogo.png" className="m-3 h-10" alt="EAM ONE Logo" />
      </NavbarBrand>
      <NavbarCollapse>
        <NavbarLink href="#">Ventajas</NavbarLink>
        <NavbarLink href="#">FAQs</NavbarLink>
        <NavbarLink href="#">Contacto</NavbarLink>
      </NavbarCollapse>
      <div className="flex">
        <Button>Solicitar demo</Button>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}
