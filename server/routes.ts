import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertBlogPostSchema,
  insertContactSubmissionSchema,
  insertLeadMagnetDownloadSchema,
} from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog Posts API
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog-posts/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog-posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.insertBlogPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: "Invalid blog post data" });
    }
  });

  app.put("/api/blog-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.updateBlogPost(id, validatedData);
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(400).json({ error: "Invalid blog post data" });
    }
  });

  app.delete("/api/blog-posts/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteBlogPost(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete blog post" });
    }
  });

  // Contact Form Submission API
  app.post("/api/contact-submissions", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.insertContactSubmission(validatedData);
      res.status(201).json(submission);
    } catch (error) {
      res.status(400).json({ error: "Invalid contact submission data" });
    }
  });

  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  // Lead Magnet Downloads API
  app.post("/api/lead-magnet-downloads", async (req, res) => {
    try {
      const validatedData = insertLeadMagnetDownloadSchema.parse(req.body);
      const download = await storage.insertLeadMagnetDownload(validatedData);
      res.status(201).json(download);
    } catch (error) {
      res.status(400).json({ error: "Invalid lead magnet download data" });
    }
  });

  app.get("/api/lead-magnet-downloads", async (req, res) => {
    try {
      const downloads = await storage.getLeadMagnetDownloads();
      res.json(downloads);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch lead magnet downloads" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
