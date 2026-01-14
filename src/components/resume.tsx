"use client";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { GithubIcon } from "./icons";


export default function Resume() {
  return (
    <div className="p-10 flex flex-col w-full">
      <Tabs aria-label="ResumeHeadings" isVertical={false} radius="lg"
        classNames={{
          tabList: "bg-default-200/40 dark:bg-default-200/40",
          cursor: "bg-secondary/20 dark:bg-success/20",
          tabContent: "p-1 text-foreground group-data-[selected=true]:text-secondary dark:group-data-[selected=true]:text-success group-data-[hover=true]:text-secondary dark:group-data-[hover=true]:text-success",
        }}
        className="flex align-center justify-center">
        <Tab key="summary" title="Summary" className="flex justify-center w-full">
          <Card className="bg-default-100/40 dark:bg-default-100/40 w-full max-w-7xl">
            <CardBody className="p-5 text-justify">
              Master’s student at UC Irvine with hands-on experience in operating systems, machine learning, AI automation, and cloud-based solutions. Proven track record in designing, building, and operating reliable software systems across diverse platforms. Skilled in low-level programming, kernel development, and hardware-software integration. Adept at delivering robust, efficient solutions across diverse platforms.
            </CardBody>
          </Card>
        </Tab>
        <Tab key="education" title="Education" className="flex justify-center w-full">
          <Card className="bg-default-100/40 dark:bg-default-100/40 w-full max-w-7xl">
            <CardBody className="p-5">
              <div className="flex flex-col">
                <p className="text-lg font-bold ">University of California, Irvine</p>
                <Divider className="mt-2 mb-2" />
                <span className="flex justify-between italic p-2">
                  <div>Master of Computer Science</div>
                  <div className="text-warning pl-2 flex-none">~ Dec 2026</div>
                </span>
              </div>
              <br className="gap-10" />
              <div className="flex flex-col">
                <p className="text-lg font-bold ">Birla Institute of Technology, Mesra</p>
                <Divider className="mt-2 mb-2" />
                <span className="flex justify-between italic p-2">
                  <div>Bachelor of Technology in Information Technology</div>
                  <div className="text-warning pl-2 flex-none">2020 - 2024</div>
                </span>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="projects" title="Projects" className="flex justify-center w-full">
          <Card className="bg-default-100/40 dark:bg-default-100/40 w-full max-w-7xl">
            <CardBody className="p-5">
              <div className="flex flex-col">
                <p className="text-lg font-bold ">
                  Android Open Source Platform Bringup
                  <div className="inline-block pl-2">
                    <Tooltip closeDelay={2000} color="secondary" placement="top" content="Latest work on HTC IML (U12 Life) in 2025">
                      <Button
                        isIconOnly
                        aria-label="android-development-github-link"
                        variant="flat"
                        color="secondary"
                        onPress={() => window.open("https://github.com/EncryptedCicada/android_device_htc_iml", "_blank")}
                      >
                        <GithubIcon />
                      </Button>
                    </Tooltip>
                  </div>
                </p>
                <Divider className="mt-2 mb-2" />
                <span className="flex justify-between italic p-2">
                  <div>Bringing up AOSP on manufacturer abandoned devices to breathe new life into them \\ Devices: Motorola Berlin, Lenovo sisley2OFRL, Lenovo k5fpr, HTC IML</div>
                  <div className="text-warning pl-2 flex-none">Ongoing (Hobby)</div>
                </span>
              </div>
              <br className="gap-10" />
              <div className="flex flex-col">
                <p className="text-lg font-bold ">
                  Android Kernel Development from Scratch & Display Driver Integration
                  <div className="inline-block pl-2">
                    <Tooltip closeDelay={2000} color="secondary" placement="top" content="Latest work on HTC IML (U12 Life) in 2025">
                      <Button
                        isIconOnly
                        aria-label="android-kernel-development-github-link"
                        variant="flat"
                        color="secondary"
                        onPress={() => window.open("https://github.com/EncryptedCicada/android_kernel_htc_iml", "_blank")}
                      >
                        <GithubIcon />
                      </Button>
                    </Tooltip>
                  </div>
                </p>
                <Divider className="mt-2 mb-2" />
                <span className="flex justify-between italic p-2">
                  <div>Creating an android linux kernel using mainline Qualcomm CAF sources and integrating device trees and drivers to boot on the HTC IML aka HTC U12 Life</div>
                  <div className="text-warning pl-2 flex-none">Ongoing (Hobby)</div>
                </span>
              </div>
              <br className="gap-10" />
              <div className="flex flex-col">
                <p className="text-lg font-bold ">Ground Layer Methane Prediction Using ML</p>
                <Divider className="mt-2 mb-2" />
                <span className="flex justify-between italic p-2">
                  <div>Preliminary study and proof of concept prototype to demonstate predicting on-ground methane concentration using satellite based data of atmospheric columns concluded in a thesis generalised to any type of greenhouse gas</div>
                  <div className="text-warning pl-2 flex-none">2023</div>
                </span>
              </div>
              <br className="gap-10" />
              <div className="flex flex-col">
                <p className="text-lg font-bold ">
                  Job Application Fullstack WebApp: JobShala
                  <div className="inline-block pl-2">
                    <Button
                      isIconOnly
                      aria-label="jobshala-github-link"
                      variant="flat"
                      color="secondary"
                      onPress={() => window.open("https://github.com/EncryptedCicada/JOB-SHALA", "_blank")}
                    >
                      <GithubIcon />
                    </Button>
                  </div>
                </p>
                <Divider className="mt-2 mb-2" />
                <span className="flex justify-between italic p-2">
                  <div>Collaborated on a fullstack web application to serve as an all encompassing job/internship application portal</div>
                  <div className="text-warning pl-2 flex-none">2024</div>
                </span>
              </div>
              <br className="gap-10" />
              <div className="flex flex-col">
                <p className="text-lg font-bold ">
                  Arch Linux Install Guide for Beginners to Advanced Users
                  <div className="inline-block pl-2">
                    <Button
                      isIconOnly
                      aria-label="arch-linux-guide-github-link"
                      variant="flat"
                      color="secondary"
                      onPress={() => window.open("https://github.com/EncryptedCicada/arch-install-guide", "_blank")}
                    >
                      <GithubIcon />
                    </Button>
                  </div>
                </p>
                <Divider className="mt-2 mb-2" />
                <span className="flex justify-between italic p-2">
                  <div>Repo for installing and configuring Arch Linux with a personal and beginner friendly touch</div>
                  <div className="text-warning pl-2 flex-none">2023</div>
                </span>
              </div>
              <br className="gap-10" />
              <div className="flex flex-col">
                <p className="text-lg font-bold ">
                  Using Image Processing to Solve Jigsaw Puzzles
                  <div className="inline-block pl-2">
                    <Button
                      isIconOnly
                      aria-label="jigsaw-solver-github-link"
                      variant="flat"
                      color="secondary"
                      onPress={() => window.open("https://github.com/EncryptedCicada/Simple_Jigsaw_Solver", "_blank")}
                    >
                      <GithubIcon />
                    </Button>
                  </div>
                </p>
                <Divider className="mt-2 mb-2" />
                <span className="flex justify-between italic p-2">
                  <div>Using OpenCV and python to create and solve jigsaw puzzles for an arbitrary image by dividing it into 8 uniform parts</div>
                  <div className="text-warning pl-2 flex-none">2023</div>
                </span>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs >
    </div >
  );
}