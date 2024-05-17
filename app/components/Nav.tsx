"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { div } from "three/examples/jsm/nodes/Nodes.js";


export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-3" />
      {/* <img  src="../assets/logo.png" alt="image not found"/> */}

    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const productspaths = "/pages/solutions"
  const servicespath = "/pages/services"
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >



      <Menu setActive={setActive}>

        <a href={servicespath}>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href={servicespath}>Virtual Maintenance Contract & IT Solutions</HoveredLink>
              <HoveredLink href={servicespath}>IContent Services</HoveredLink>
              <HoveredLink href={servicespath}>IT Maintenance and ELV Maintenance Services</HoveredLink>
              <HoveredLink href={servicespath}>Retrofit and System Upgrades Solutions</HoveredLink>
              <HoveredLink href={servicespath}>Authorized Service Centers</HoveredLink>
              <HoveredLink href={servicespath}>IT and ELV Consultants</HoveredLink>
            </div>
          </MenuItem>
        </a>
        <a href={productspaths}>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Regal Hospitality Solutions"
              href={productspaths}
              src="https://regaltech.ae/wp-content/uploads/2020/01/hospitality.jpg"
              description=" Established in 1952, Regal Group has diversified interests from Textile to Technology."
            />
            <ProductItem
              title="Content Delivery Solutions"
              href={productspaths}
              src="https://regaltech.ae/wp-content/uploads/2019/05/content-services-2.jpg"
              description=" Regal Technology delivers high quality content to communities."
            />
            <ProductItem
              title="Security and ELV solutions"
              href={productspaths}
              src="https://regaltech.ae/wp-content/uploads/2019/03/on-demand-img.jpg"
              description="From a small CCTV installation to an integrated command control centre of a large community."
            />
            <ProductItem
              title="IT,ELV Services & Solutions"
              href={productspaths}
              src="https://regaltech.ae/wp-content/uploads/2019/03/manage-services.jpg"
              description=" Information Technology is the key tool of every business to meet its objective."
            />
          </div>

        </MenuItem>
      </a>
      <a href="/pages/projects">
        <MenuItem setActive={setActive} active={active} item="Projects"></MenuItem>
      </a>

      <MenuItem setActive={setActive} active={active} item="Blogs"></MenuItem>
      <MenuItem setActive={setActive} active={active} item="Happy Customers"></MenuItem>
      <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>



    </Menu>
    </div >
  );
}
