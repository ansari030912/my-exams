"use client";
// pages/index.js
import { useEffect, useRef } from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

export default function Home() {
  const cardsRef = useRef([]);
  const exams = [
    {
      name: "Developer Associate",
      image: "2",
      perma: "aws-certified-developer-associate-certification",
      vendor: "AWS",
    },
    {
      name: "Solution Architect Associate",
      perma: "aws-certified-solutions-architect-associate-certification",
      image: "3",
      vendor: "AWS",
    },
    {
      name: "Solution Architect Professional",
      perma: "aws-certified-solutions-architect-professional-certification",
      image: "6",
      vendor: "AWS",
    },

    {
      name: "SysOps Administrator - Associate",
      perma: "aws-certified-sysops-administrator-associate-certification",
      image: "7",
      vendor: "AWS",
    },
    {
      name: "CCNA",
      perma: "ccna",
      image: "11",
      vendor: "Cisco",
    },
    {
      name: "CCNP - Enterprise",
      perma: "ccnp-enterprise",
      image: "12",
      vendor: "Cisco",
    },
    {
      name: "CCIE - Enterprise Wireless",
      perma: "ccna-enterprise-wireless",
      image: "13",
      vendor: "Cisco",
    },

    {
      name: "Azure Solutions Architect Expert",
      perma: "azure-solutions-architect-expert",
      image: "14",
      vendor: "Microsoft",
    },
    {
      name: "Azure Fundamentals",
      perma: "azure-fundamentals",
      image: "15",
      vendor: "Microsoft",
    },
    {
      name: "Enterprise Administrator - Expert",
      perma: "Microsoft-365-certified-enterprise-administrator-expert",
      image: "16",
      vendor: "Microsoft",
    },
    {
      name: "Azure Administrator - Associate",
      perma: "azure-administrator-associate",
      image: "17",
      vendor: "Microsoft",
    },
    {
      name: "MCSA Windows Server 2016",
      perma: "mcsa-windows-server-2016",
      image: "18",
      vendor: "Microsoft",
    },
    {
      name: "MCSE",
      perma: "mcse-Microsoft-certified-solutions-expert",
      image: "20",
      vendor: "Microsoft",
    },
    {
      name: "MCSA Web Applications",
      perma: "mcsa-web-applications",
      image: "21",
      vendor: "Microsoft",
    },
    {
      name: "MCSA SQL 2016 Database Administration",
      perma: "mcsa-sql-2016-database-administration",
      image: "22",
      vendor: "Microsoft",
    },
    {
      name: "MCSE Core Infrastructure",
      perma: "mcse-core-infrastructure",
      image: "23",
      vendor: "Microsoft",
    },
    {
      name: "MCSE Productivity Solutions",
      perma: "mcse-productivity-solutions-expert",
      image: "24",
      vendor: "Microsoft",
    },
    {
      name: "MCSE Data Management and Analytics",
      perma: "mcse-data-management-and-analytics",
      image: "25",
      vendor: "Microsoft",
    },
    {
      name: "CompTIA CASP",
      perma: "cmcse-core-infrastructure",
      image: "26",
      vendor: "Comptia",
    },
    {
      name: "CompTIA A+",
      perma: "comptia-a-plus-certification",
      image: "27",
      vendor: "Comptia",
    },
    {
      name: "CompTIA Linux+",
      perma: "comptia-linux-plus-certification",
      image: "28",
      vendor: "Comptia",
    },
    {
      name: "CompTIA Network+",
      perma: "comptia-network",
      image: "29",
      vendor: "Comptia",
    },
    {
      name: "CompTIA Security+",
      perma: "comptia-security",
      image: "30",
      vendor: "Comptia",
    },

    {
      name: "CCA-V Professional Virtualization",
      perma: "cca-v",
      image: "32",
      vendor: "Citrix",
    },

    {
      name: "CCP-V Expert Virtualization",
      perma: "ccp-v-certification",
      image: "34",
      vendor: "Citrix",
    },
    {
      name: "CISM",
      perma: "cism-certification",
      image: "35",
      vendor: "Isaca",
    },
    {
      name: "CISSP",
      perma: "cissp-certification",
      image: "37",
      vendor: "Isc",
    },
    {
      name: "Google Cloud Certified",
      perma: "google-cloud-certified",
      image: "38",
      vendor: "Google",
    },
    {
      name: "Checkpoint CCSA R80",
      perma: "ccsa-r80",
      image: "39",
      vendor: "Checkpoint",
    },
    {
      name: "CCSE R80",
      perma: "ccse-update",
      image: "40",
      vendor: "Checkpoint",
    },
    {
      name: "CEH Certified Ethical Hacker",
      perma: "ceh-certification",
      image: "41",
      vendor: "Eccouncil",
    },
    {
      name: "LPIC Level 1",
      perma: "lpic-level-1",
      image: "42",
      vendor: "lpi",
    },
    {
      name: "LPIC Level 2",
      perma: "lpic-level-2-certification",
      image: "43",
      vendor: "lpi",
    },
    {
      name: "LPIC Level 3",
      perma: "lpic-level-3-certification",
      image: "44",
      vendor: "lpi",
    },
    {
      name: "PCNSE",
      perma: "pcnse",
      image: "45",
      vendor: "Poloalto-networks",
    },
    {
      name: "JNCIA Junos",
      perma: "jncia-junos-certification",
      image: "46",
      vendor: "Juniper",
    },
    {
      name: "TOGAF 9 Certified",
      perma: "togaf-9-certified-certification",
      image: "47",
      vendor: "The Open Group",
    },
    {
      name: "VCAP6-DCV Design",
      perma: "vcap6-dcv-design",
      image: "48",
      vendor: "VMWare",
    },
    {
      name: "VCP6.5-DCV",
      perma: "vcp6-5-dcv",
      image: "49",
      vendor: "VMWare",
    },
    {
      name: "Project Management Professional",
      perma: "pmp-certification",
      image: "9",
      vendor: "PMP",
    },
    {
      name: "ACP",
      perma: "pmi-acp",
      image: "10",
      vendor: "PMP",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section
      style={{ backgroundImage: `url('bg-img-8.jpg')` }}
      className="bg-fixed bg-cover"
    >
      <div className="container mx-auto p-4 z-10 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {exams.map((item, index) => (
            <Box
              key={index}
              className="relative m-4 opacity-0 mb-10"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <Card
                sx={{
                  position: "relative",
                  paddingTop: "40px",
                  borderRadius: "12px",
                  minHeight: "140px",
                  boxShadow:
                    "4px 4px 6px 1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="h2"
                    fontSize={18}
                    sx={{ textAlign: "center" }}
                    className="text-gray-800 font-bold"
                  >
                    {item.vendor}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    fontSize={14}
                    fontWeight={600}
                    sx={{ textAlign: "center" }}
                    className="text-gray-500"
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
              <Avatar
                alt={item.name}
                src={`/certs/${item.image}.png`}
                sx={{
                  position: "absolute",
                  top: "-50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "100px",
                  width: "100px",
                }}
              />
            </Box>
          ))}
        </div>
      </div>
    </section>
  );
}