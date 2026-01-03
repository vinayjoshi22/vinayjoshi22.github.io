import type { Express } from "express";
import { type Server } from "http";
import { staticData } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  _httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.profile.get.path, (_req, res) => {
    res.json(staticData.profile);
  });

  app.get(api.experience.list.path, (_req, res) => {
    res.json(staticData.experience);
  });

  app.get(api.education.list.path, (_req, res) => {
    res.json(staticData.education);
  });

  app.get(api.skills.list.path, (_req, res) => {
    res.json(staticData.skills);
  });

  app.get(api.publications.list.path, (_req, res) => {
    // Sort in descending order by year as requested before
    const sorted = [...staticData.publications].sort((a, b) => b.year.localeCompare(a.year));
    res.json(sorted);
  });

  app.get(api.awards.list.path, (_req, res) => {
    res.json(staticData.awards);
  });

  return _httpServer;
}
