"use client";

import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import type {
  Company,
  Role,
  Review,
  InterviewExperience,
} from "@/types/company";

interface InsightsTabProps {
  company: Company;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

function groupByYear(roles: Role[]) {
  const years = Array.from({ length: 5 }, (_, i) => `${2021 + i}`);
  return years.map((year) => {
    const totalOpenings = roles.reduce(
      (sum, role) => sum + (role.openings_per_year || 0),
      0
    );
    return { year, openings: totalOpenings };
  });
}

function roleOpeningsData(roles: Role[]) {
  return roles.map((role) => ({
    name: role.title,
    openings: role.openings_per_year || 0,
  }));
}

function reviewRatingsData(reviews: Review[]) {
  const ratingCount: Record<string, number> = {};
  reviews.forEach((r) => {
    const rounded = (Math.round(r.rating * 2) / 2).toFixed(1);
    ratingCount[rounded] = (ratingCount[rounded] || 0) + 1;
  });
  return Object.entries(ratingCount).map(([key, val]) => ({
    name: `${key} Stars`,
    value: val,
  }));
}

function interviewDifficultyData(experiences: InterviewExperience[]) {
  const difficultyCount: Record<string, number> = {};
  experiences.forEach((e) => {
    const level = e.difficulty.toLowerCase();
    difficultyCount[level] = (difficultyCount[level] || 0) + 1;
  });
  return Object.entries(difficultyCount).map(([key, val]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    count: val,
  }));
}

export function InsightsTab({ company }: InsightsTabProps) {
  const avgCTC = company.average_ctc || 0;
  const openingsByYear = groupByYear(company.roles);
  const openingsByRole = roleOpeningsData(company.roles);
  const reviewRatings = reviewRatingsData(company.reviews);
  const interviewDifficulties = interviewDifficultyData(
    company.interview_experiences
  );

  return (
    <div className="space-y-12 p-4">
      <div className="text-center bg-white shadow rounded-lg py-6">
        <h2 className="text-2xl font-semibold mb-2">Average CTC</h2>
        <p className="text-4xl font-bold text-green-600">{avgCTC} LPA</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3">
            Total Openings Over Years
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={openingsByYear}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="openings"
                stroke="#4F46E5"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3">Openings by Role</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={openingsByRole}
              margin={{ top: 5, right: 20, bottom: 80, left: 0 }}
              layout="vertical"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                interval={0}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="openings" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3">
            Review Ratings Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={reviewRatings}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#3B82F6"
                label
              >
                {reviewRatings.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-3">
            Interview Difficulty Level
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={interviewDifficulties}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
