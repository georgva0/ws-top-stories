import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
} from "reactstrap";
import services from "../listings/services";

const regions = services.reduce((regionList, service) => {
  if (service.region && !regionList.includes(service.region)) {
    regionList.push(service.region);
  }
  return regionList;
}, []);

const LatestArticlesSubnav = ({ onFilterChange }) => {
  const [openRegion, setOpenRegion] = useState(null);

  const selectFilter = (label, serviceUrls) => {
    onFilterChange({ label, serviceUrls });
    setOpenRegion(null);
  };

  return (
    <div className="section-nav-wrap latest-articles-nav-wrap">
      <div className="section-nav-label">Browse services</div>
      <Nav
        pills
        className="section-nav latest-articles-nav"
        aria-label="Browse services"
      >
        {regions.map((region) => {
          const regionServices = services.filter(
            (service) => service.region === region,
          );

          return (
            <Dropdown
              nav
              key={region}
              isOpen={openRegion === region}
              toggle={() =>
                setOpenRegion(openRegion === region ? null : region)
              }
            >
              <DropdownToggle nav caret>
                {region}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem
                  onClick={() =>
                    selectFilter(
                      `All services -  ${region}`,
                      regionServices.map((service) => service.serviceUrl),
                    )
                  }
                  className="all-services-item"
                >
                  All services
                </DropdownItem>
                <DropdownItem divider />
                {regionServices.map((service) => (
                  <DropdownItem
                    key={service.serviceUrl}
                    onClick={() =>
                      selectFilter(service.serviceName, [service.serviceUrl])
                    }
                  >
                    {service.serviceName}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          );
        })}
      </Nav>
    </div>
  );
};

export default LatestArticlesSubnav;
