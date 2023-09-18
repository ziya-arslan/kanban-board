import Link from "next/link";
import React from "react";
import MailIcon from "./icons/mail";
import Counter from "./counter";
import RocketIcon from "./icons/rocket";
import GlobeIcon from "./icons/globe";
import PlusIcon from "./icons/plus";
import GridIcon from "./icons/grid";
import StopwatchIcon from "./icons/stopwatch";
import KanbanIcon from "./icons/kanban";
import CommentTextIcon from "./icons/comment-text";
import CalendarCreateIcon from "./icons/calendar-create";
import Image from "next/image";
import QuestionCircleIcon from "./icons/question-circle";
import SettingsIcon from "./icons/settings";

const Sidebar = () => {
  return (
    <aside
      id="cta-button-sidebar"
      className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto border-r-[1px] border-[#DBE1F1] flex flex-col">
        <div className="flex flex-col gap-5 p-7 border-b-[1px] border-[#DBE1F1]">
          <p className="text-[#8A8FA1] text-[0.625rem] font-semibold">
            OVERVIEW
          </p>
          <div className="flex flex-col gap-1">
            <Link
              href="#"
              className="flex gap-2 items-center text-base font-medium text-[#4D5361]  py-2 px-[0.38rem] rounded-[0.25rem]"
            >
              <MailIcon />
              <span>Inbox</span>
              <Counter count={224} />
            </Link>
            <Link
              href="#"
              className="flex gap-2 items-center text-base font-medium text-[#4D5361]  py-2 px-[0.38rem] rounded-[0.25rem]"
            >
              <RocketIcon />
              <span>Activity</span>
              <Counter count={14} />
            </Link>
            <Link
              href="#"
              className="flex gap-2 items-center text-base font-medium text-[#4D5361]  py-2 px-[0.38rem] rounded-[0.25rem]"
            >
              <GlobeIcon />
              <span>Network</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex flex-col gap-5 p-7 h-full">
            <div className="flex w-full justify-between items-center">
              <p className="text-[#8A8FA1] text-[0.625rem] font-semibold">
                WORKSPACE
              </p>
              <button>
                <PlusIcon />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href="#"
                className="flex gap-2 items-center text-base font-medium text-[#4D5361]  py-2 px-[0.38rem] rounded-[0.25rem]"
              >
                <GridIcon />
                <span>Dashboard</span>
              </Link>
              <Link
                href="#"
                className="flex gap-2 items-center text-base font-medium text-[#4D5361]  py-2 px-[0.38rem] rounded-[0.25rem]"
              >
                <StopwatchIcon />
                <span>Time Tracker</span>
              </Link>
              <Link
                href="#"
                className="flex gap-2 items-center text-base font-medium bg-[#E9EFFF] py-2 px-[0.38rem] rounded-[0.25rem] text-[#1F5EFF]"
              >
                <KanbanIcon />
                <span>Kanban Board</span>
              </Link>

              <Link
                href="#"
                className="flex gap-2 items-center text-base font-medium text-[#4D5361]  py-2 px-[0.38rem] rounded-[0.25rem]"
              >
                <CommentTextIcon />
                <span className="">Messages</span>
              </Link>
              <Link
                href="#"
                className="flex gap-2 items-center text-base font-medium text-[#4D5361]  py-2 px-[0.38rem] rounded-[0.25rem]"
              >
                <CalendarCreateIcon />
                <span className="">Schedule</span>
              </Link>
            </div>
            <div
              className="w-full aspect-square mt-auto border-[1px] border-solid border-[#4B94F5] rounded-[0.625rem] pt-8 px-4 pb-4 flex flex-col items-center"
              style={{
                background:
                  "radial-gradient(40.71% 64.59% at 32.88% 31.28%, #1873EC 0%, #1F6ED8 100%)",
              }}
            >
              <Image src="/images/star.png" width={54} height={54} alt="star" />
              <h4
                className="text-white mt-5 text-base font-semibold"
                style={{
                  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.20)",
                }}
              >
                Upgrade PRO
              </h4>
              <p className="text-center text-xs font-medium text-[#E7E9EF] mt-[0.62rem]">
                Get the PRO version. Empower your team with many additional
                features
              </p>
              <button className="mt-4 w-full bg-white rounded-[0.3125rem] px-[0.625rem] py-2 border-none text-[#1F6ED7] text-xs font-semibold">
                Upgrade PRO
              </button>
            </div>
            <div className="flex flex-col gap-1 mt-12">
              <Link
                href="#"
                className="flex gap-2 items-center text-base font-medium text-[#4D5361]  py-2 px-[0.38rem] rounded-[0.25rem]"
              >
                <QuestionCircleIcon />
                <span>Help</span>
              </Link>
              <Link
                href="#"
                className="flex gap-2 items-center text-base font-medium text-[#4D5361]  py-2 px-[0.38rem] rounded-[0.25rem]"
              >
                <SettingsIcon />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
