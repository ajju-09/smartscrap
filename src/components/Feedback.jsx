import { Avatar } from "@heroui/avatar";
import { Card, CardHeader, CardBody } from "@heroui/card";
import React from "react";
import {ScrollAnimation} from "./animation";

const Feedback = () => {
  return (
    <section className="min-h-screen px-4 py-3 flex items-center justify-center">
      <div className="flex items-center flex-col justify-between gap-8 ">
        <div className="flex flex-col items-center justify-center relative">
          <div className="z-0 inset-0 absolute blur-3xl bg-[#ff47da]"></div>
          <ScrollAnimation>
          <h1 className="relative z-10 md:text-3xl font-bold mx-2 px-2 text-2xl animate-bounce text-[#ff3cc7]">
            Here's what others are saying
          </h1>
          </ScrollAnimation>
          <ScrollAnimation>
          <p className="text-md p-2">
            They think{" "}
            <span className="text-green-400 font-bold">SmartScrap</span> is very
            useful.
          </p>
          </ScrollAnimation>
        </div>

        <div className="mx-2 mt-8 px-2 py-2 grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-8 ">
          <ScrollAnimation>
          <Card className="max-w-[340px] border-1 border-white rounded-2xl h-36 shadow-lg shadow-[#c77dff] transition-transform duration-500 delay-200 ease-in-out hover:scale-110 hover:-rotate-12">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="https://heroui.com/avatars/avatar-1.png"
                  className="border border-white m-2"
                />
                <div className="flex flex-col gap-0.5 items-start justify-center mt-1">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-gray-300">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400 text-gray-500">
                    @zoeylang
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white m-2">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
            </CardBody>
          </Card>
          </ScrollAnimation>

          <ScrollAnimation>
          <Card className="max-w-[340px] border-1 border-white rounded-2xl h-36 shadow-lg shadow-[#c77dff] transition-transform duration-500 delay-200 ease-in-out hover:scale-110 hover:-rotate-12">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="https://heroui.com/avatars/avatar-1.png"
                  className="border border-white m-2"
                />
                <div className="flex flex-col gap-0.5 items-start justify-center mt-1">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-gray-300">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400 text-gray-500">
                    @zoeylang
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white m-2">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
            </CardBody>
          </Card>
          </ScrollAnimation>

          <ScrollAnimation>
          <Card className="max-w-[340px] border-1 border-white rounded-2xl h-36 shadow-lg shadow-[#c77dff] transition-transform duration-500 delay-200 ease-in-out hover:scale-110 hover:-rotate-12">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="https://heroui.com/avatars/avatar-1.png"
                  className="border border-white m-2"
                />
                <div className="flex flex-col gap-0.5 items-start justify-center mt-1">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-gray-300">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400 text-gray-500">
                    @zoeylang
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white m-2">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
            </CardBody>
          </Card>
          </ScrollAnimation>

          <ScrollAnimation>
          <Card className="max-w-[340px] border-1 border-white rounded-2xl h-36 shadow-lg shadow-[#c77dff] transition-transform duration-500 delay-200 ease-in-out hover:scale-110 hover:-rotate-12">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="https://heroui.com/avatars/avatar-1.png"
                  className="border border-white m-2"
                />
                <div className="flex flex-col gap-0.5 items-start justify-center mt-1">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-gray-300">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400 text-gray-500">
                    @zoeylang
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white m-2">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
            </CardBody>
          </Card>
          </ScrollAnimation>

          <ScrollAnimation>
          <Card className="max-w-[340px] border-1 border-white rounded-2xl h-36 shadow-lg shadow-[#c77dff] transition-transform duration-500 delay-200 ease-in-out hover:scale-110 hover:-rotate-12">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="https://heroui.com/avatars/avatar-1.png"
                  className="border border-white m-2"
                />
                <div className="flex flex-col gap-0.5 items-start justify-center mt-1">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-gray-300">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400 text-gray-500">
                    @zoeylang
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white m-2">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
            </CardBody>
          </Card>
          </ScrollAnimation>

          <ScrollAnimation>
          <Card className="max-w-[340px] border-1 border-white rounded-2xl h-36 shadow-lg shadow-[#c77dff] transition-transform duration-500 delay-200 ease-in-out hover:scale-110 hover:-rotate-12">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="https://heroui.com/avatars/avatar-1.png"
                  className="border border-white m-2"
                />
                <div className="flex flex-col gap-0.5 items-start justify-center mt-1">
                  <h4 className="text-small font-semibold leading-none text-default-600 text-gray-300">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400 text-gray-500">
                    @zoeylang
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400 text-white m-2">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
            </CardBody>
          </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
