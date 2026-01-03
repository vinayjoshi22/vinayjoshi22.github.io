import { useQuery } from "@tanstack/react-query";
import { staticData } from "../data";

export function useProfile() {
  return useQuery({
    queryKey: ["/api/profile"],
    queryFn: async () => {
      return staticData.profile;
    },
  });
}

export function useExperience() {
  return useQuery({
    queryKey: ["/api/experience"],
    queryFn: async () => {
      return staticData.experience;
    },
  });
}

export function useEducation() {
  return useQuery({
    queryKey: ["/api/education"],
    queryFn: async () => {
      return staticData.education;
    },
  });
}

export function useSkills() {
  return useQuery({
    queryKey: ["/api/skills"],
    queryFn: async () => {
      return staticData.skills;
    },
  });
}

export function usePublications() {
  return useQuery({
    queryKey: ["/api/publications"],
    queryFn: async () => {
      const sorted = [...staticData.publications].sort((a, b) => b.year.localeCompare(a.year));
      return sorted;
    },
  });
}

export function useAwards() {
  return useQuery({
    queryKey: ["/api/awards"],
    queryFn: async () => {
      return staticData.awards;
    },
  });
}

