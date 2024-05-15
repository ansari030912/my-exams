/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CardMedia, Grid } from "@mui/material";

const HotExamCards = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  console.log("🚀 ~ HotExamCards ~ toggle:", toggle);
  const [selectedView, setSelectedView] = useState("month");

  const renderRows = (items) => {
    return items?.slice(0, 12)?.map((item, index) => {
      const { vendor_title, exam_title, exam_perma, vendor_perma } = item;
      return (
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          xl={3}
          key={exam_perma}
          className="w-full px-4 mb-4"
        >
          <div
            className="bg-white"
            style={{
              minHeight: "550px",
              marginBottom: "2.5rem",
              padding: "2rem",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
              borderRadius: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <div style={{ flexGrow: 1 }}>
              <div>
                <img
                  src="/img/examprince_dark_svg.svg"
                  width={"220px"}
                  alt=""
                />
                <br />
                <hr />
                <span className="block text-xl text-gray-800 font-bold mt-6 mb-6">
                  {exam_title}
                </span>
              </div>
              <div className="flex items-center mb-1">
                <CardMedia>
                  <img src="/img-1.png" alt="" />
                </CardMedia>
                {/* <span className={`text-4xl`}>$129</span>
                <span className={`hidden text-4xl `}>$258</span>
                <span className={`ml-4 text-xl font-medium text-gray-700 `}>
                  per month
                </span>
                <span
                  className={`hidden ml-4 text-xl font-medium text-gray-700 ${
                    toggle ? "" : "hidden"
                  }`}
                >
                  per annually
                </span> */}
              </div>
            </div>
            <div style={{ alignSelf: "stretch" }}>
              {/* <hr /> */}
              <p className="text-xl text-gray-700 font-bold mb-3">
                {vendor_title}
              </p>
              <hr />
              <br />
              <Link
                href="#"
                className="inline-flex group w-full py-4 px-6 items-center justify-center text-lg font-medium text-green-500 hover:text-white border border-green-500 hover:bg-green-500 rounded-full transition duration-200"
              >
                <span className="mr-2">Buy Now</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.25 10H15.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M10.5 4.75L15.75 10L10.5 15.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </Grid>
      );
    });
  };

  return (
    <section className="py-8 lg:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-10">
          <h1 className="font-heading text-5xl sm:text-6xl text-gray-700 mb-6">
            Hot Exams
          </h1>
          <p className="text-lg text-gray-700 opacity-80">
            Our pricing plans are simple and designed to cater to households and
            companies of various sizes. Choose a plan that suits your needs and
            budget.
          </p>
        </div>
        <div className="flex md:flex-row flex-col mb-12 items-start md:items-center justify-center">
          <div>
            <div className="flex justify-center items-center">
              <span
                style={{
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                }}
                className="inline-block mt-5 mr-5 md:mt-0 md:ml-6 px-4 py-4 text-lg leading-6 text-teal-800 font-medium bg-lime-50 rounded-full"
              >
                Monthly Hot Exams
              </span>
              <div className="relative flex h-5 px-0.5 items-center justify-between transition duration-200 ease-linear rounded-full bg-gray-200 shadow">
                <button
                  onClick={() => {
                    setToggle(!toggle);
                    setSelectedView(toggle ? "month" : "week");
                  }}
                  className={`inline-block w-8 h-8 ${
                    toggle ? "bg-transparent" : "bg-green-500"
                  } rounded-full`}
                ></button>
                <button
                  onClick={() => {
                    setToggle(!toggle);
                    setSelectedView(toggle ? "month" : "week");
                  }}
                  className={`inline-block w-8 h-8 ${
                    toggle ? "bg-green-500" : "bg-transparent"
                  } rounded-full`}
                ></button>
              </div>
            </div>
          </div>
          <span
            style={{
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
            }}
            className="inline-block mt-5 md:mt-0 md:ml-6 px-4 py-4 text-lg leading-6 text-teal-800 font-medium bg-lime-50 rounded-full"
          >
            Weekly Hot Exams
          </span>
        </div>
        <div className="max-w-sm mx-auto lg:max-w-none">
          <Grid container className="flex justify-center lg:justify-start">
            {selectedView === "week" && renderRows(data?.week)}
            {selectedView === "month" && renderRows(data?.month)}
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default HotExamCards;
