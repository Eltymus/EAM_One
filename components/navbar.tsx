import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { motion } from "motion/react";

export function Nav() {
  return (
    <motion.div>
      <Navbar fluid>
        <NavbarBrand href="">
          <img src="EAMONElogo.png" className="m-3 h-10" alt="EAM ONE Logo" />
        </NavbarBrand>{" "}
        <div className="flex md:order-2">
          <Button
            href="#contact"
            className="bg-amber-500 delay-150 duration-150 hover:bg-purple-500"
          >
            Solicitar demo
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#advantages">Ventajas</NavbarLink>
          <NavbarLink href="#faq">FAQs</NavbarLink>
          <NavbarLink href="#contact">Contacto</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </motion.div>
  );
}
