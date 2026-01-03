import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useProfile() {
  return useQuery({
    queryKey: [api.profile.get.path],
    queryFn: async () => {
      const res = await fetch(api.profile.get.path);
      if (!res.ok) throw new Error("Failed to fetch profile");
      return api.profile.get.responses[200].parse(await res.json());
    },
  });
}

export function useExperience() {
  return useQuery({
    queryKey: [api.experience.list.path],
    queryFn: async () => {
      const res = await fetch(api.experience.list.path);
      if (!res.ok) throw new Error("Failed to fetch experience");
      return api.experience.list.responses[200].parse(await res.json());
    },
  });
}

export function useEducation() {
  return useQuery({
    queryKey: [api.education.list.path],
    queryFn: async () => {
      const res = await fetch(api.education.list.path);
      if (!res.ok) throw new Error("Failed to fetch education");
      return api.education.list.responses[200].parse(await res.json());
    },
  });
}

export function useSkills() {
  return useQuery({
    queryKey: [api.skills.list.path],
    queryFn: async () => {
      const res = await fetch(api.skills.list.path);
      if (!res.ok) throw new Error("Failed to fetch skills");
      return api.skills.list.responses[200].parse(await res.json());
    },
  });
}

export function usePublications() {
  return useQuery({
    queryKey: [api.publications.list.path],
    queryFn: async () => {
      const res = await fetch(api.publications.list.path);
      if (!res.ok) throw new Error("Failed to fetch publications");
      return api.publications.list.responses[200].parse(await res.json());
    },
  });
}

export function useAwards() {
  return useQuery({
    queryKey: [api.awards.list.path],
    queryFn: async () => {
      const res = await fetch(api.awards.list.path);
      if (!res.ok) throw new Error("Failed to fetch awards");
      return api.awards.list.responses[200].parse(await res.json());
    },
  });
}
