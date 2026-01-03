import { z } from 'zod';
import { 
  insertProfileSchema, 
  insertExperienceSchema, 
  insertEducationSchema, 
  insertSkillSchema, 
  insertPublicationSchema,
  insertAwardSchema,
  profile, experience, education, skills, publications, awards
} from './schema';

export const api = {
  profile: {
    get: {
      method: 'GET' as const,
      path: '/api/profile',
      responses: {
        200: z.custom<typeof profile.$inferSelect>(),
        404: z.object({ message: z.string() })
      }
    }
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience',
      responses: {
        200: z.array(z.custom<typeof experience.$inferSelect>())
      }
    }
  },
  education: {
    list: {
      method: 'GET' as const,
      path: '/api/education',
      responses: {
        200: z.array(z.custom<typeof education.$inferSelect>())
      }
    }
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills',
      responses: {
        200: z.array(z.custom<typeof skills.$inferSelect>())
      }
    }
  },
  publications: {
    list: {
      method: 'GET' as const,
      path: '/api/publications',
      responses: {
        200: z.array(z.custom<typeof publications.$inferSelect>())
      }
    }
  },
  awards: {
    list: {
      method: 'GET' as const,
      path: '/api/awards',
      responses: {
        200: z.array(z.custom<typeof awards.$inferSelect>())
      }
    }
  }
};
