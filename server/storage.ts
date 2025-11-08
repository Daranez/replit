import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import {
  users,
  blogPosts,
  contactSubmissions,
  leadMagnetDownloads,
  type User,
  type InsertUser,
  type BlogPost,
  type InsertBlogPost,
  type ContactSubmission,
  type InsertContactSubmission,
  type LeadMagnetDownload,
  type InsertLeadMagnetDownload,
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  insertBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: InsertBlogPost): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<void>;
  
  getContactSubmissions(): Promise<ContactSubmission[]>;
  insertContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  getLeadMagnetDownloads(): Promise<LeadMagnetDownload[]>;
  insertLeadMagnetDownload(download: InsertLeadMagnetDownload): Promise<LeadMagnetDownload>;
}

class DatabaseStorage implements IStorage {
  private db;

  constructor() {
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    this.db = drizzle(pool);
  }

  async getUser(id: number): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return await this.db.select().from(blogPosts).where(eq(blogPosts.published, true)).orderBy(blogPosts.createdAt);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const result = await this.db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
    return result[0];
  }

  async insertBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const result = await this.db.insert(blogPosts).values(post).returning();
    return result[0];
  }

  async updateBlogPost(id: number, post: InsertBlogPost): Promise<BlogPost | undefined> {
    const result = await this.db
      .update(blogPosts)
      .set({ ...post, updatedAt: new Date() })
      .where(eq(blogPosts.id, id))
      .returning();
    return result[0];
  }

  async deleteBlogPost(id: number): Promise<void> {
    await this.db.delete(blogPosts).where(eq(blogPosts.id, id));
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await this.db.select().from(contactSubmissions).orderBy(contactSubmissions.createdAt);
  }

  async insertContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const result = await this.db.insert(contactSubmissions).values(submission).returning();
    return result[0];
  }

  async getLeadMagnetDownloads(): Promise<LeadMagnetDownload[]> {
    return await this.db.select().from(leadMagnetDownloads).orderBy(leadMagnetDownloads.createdAt);
  }

  async insertLeadMagnetDownload(download: InsertLeadMagnetDownload): Promise<LeadMagnetDownload> {
    const result = await this.db.insert(leadMagnetDownloads).values(download).returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
