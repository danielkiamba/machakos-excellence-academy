import { 
  users, type User, type InsertUser,
  courses, type Course, type InsertCourse,
  fees, type Fee, type InsertFee,
  inquiries, type Inquiry, type InsertInquiry,
  gallery, type Gallery, type InsertGallery
} from "@shared/schema";

// Storage interface with all CRUD methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Course methods
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;

  // Fee methods
  getFees(): Promise<Fee[]>;
  getFee(id: number): Promise<Fee | undefined>;
  createFee(fee: InsertFee): Promise<Fee>;

  // Inquiry methods
  getInquiries(): Promise<Inquiry[]>;
  getInquiry(id: number): Promise<Inquiry | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;

  // Gallery methods
  getGalleryItems(): Promise<Gallery[]>;
  getGalleryItem(id: number): Promise<Gallery | undefined>;
  createGalleryItem(item: InsertGallery): Promise<Gallery>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private courses: Map<number, Course>;
  private fees: Map<number, Fee>;
  private inquiries: Map<number, Inquiry>;
  private galleryItems: Map<number, Gallery>;
  
  private userCurrentId: number;
  private courseCurrentId: number;
  private feeCurrentId: number;
  private inquiryCurrentId: number;
  private galleryCurrentId: number;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.fees = new Map();
    this.inquiries = new Map();
    this.galleryItems = new Map();
    
    this.userCurrentId = 1;
    this.courseCurrentId = 1;
    this.feeCurrentId = 1;
    this.inquiryCurrentId = 1;
    this.galleryCurrentId = 1;
    
    // Initialize with some sample data
    this.initializeCourses();
    this.initializeFees();
    this.initializeGallery();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Course methods
  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = this.courseCurrentId++;
    const course: Course = { ...insertCourse, id };
    this.courses.set(id, course);
    return course;
  }

  // Fee methods
  async getFees(): Promise<Fee[]> {
    return Array.from(this.fees.values());
  }

  async getFee(id: number): Promise<Fee | undefined> {
    return this.fees.get(id);
  }

  async createFee(insertFee: InsertFee): Promise<Fee> {
    const id = this.feeCurrentId++;
    const fee: Fee = { ...insertFee, id };
    this.fees.set(id, fee);
    return fee;
  }

  // Inquiry methods
  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }

  async getInquiry(id: number): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.inquiryCurrentId++;
    const inquiry: Inquiry = { ...insertInquiry, id };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  // Gallery methods
  async getGalleryItems(): Promise<Gallery[]> {
    return Array.from(this.galleryItems.values());
  }

  async getGalleryItem(id: number): Promise<Gallery | undefined> {
    return this.galleryItems.get(id);
  }

  async createGalleryItem(insertGalleryItem: InsertGallery): Promise<Gallery> {
    const id = this.galleryCurrentId++;
    const galleryItem: Gallery = { ...insertGalleryItem, id };
    this.galleryItems.set(id, galleryItem);
    return galleryItem;
  }

  // Initialize sample data for courses
  private initializeCourses(): void {
    const sampleCourses: InsertCourse[] = [
      {
        title: "Advanced Mathematics",
        category: "Mathematics",
        description: "A comprehensive program covering algebra, geometry, calculus, and statistics to develop strong analytical skills.",
        hoursPerWeek: 5,
        grades: "Grades 10-12",
        icon: "calculator"
      },
      {
        title: "Biology & Life Sciences",
        category: "Science",
        description: "Explore the living world through laboratory experiments, field studies, and theoretical concepts in modern biology.",
        hoursPerWeek: 6,
        grades: "Grades 9-12",
        icon: "flask"
      },
      {
        title: "Physics & Chemistry",
        category: "Science",
        description: "Develop understanding of fundamental physical and chemical principles through theory and practical experiments.",
        hoursPerWeek: 6,
        grades: "Grades 9-12",
        icon: "atom"
      },
      {
        title: "English Language & Literature",
        category: "Languages",
        description: "Develop strong communication skills, critical thinking, and appreciation for diverse literary works.",
        hoursPerWeek: 5,
        grades: "All Grades",
        icon: "book"
      },
      {
        title: "History & Geography",
        category: "Humanities",
        description: "Gain insights into our past and present world through historical analysis and geographical understanding.",
        hoursPerWeek: 4,
        grades: "All Grades",
        icon: "globe-africa"
      },
      {
        title: "Computer Science",
        category: "Technology",
        description: "Learn programming, computational thinking, and digital literacy for the technology-driven future.",
        hoursPerWeek: 4,
        grades: "Grades 8-12",
        icon: "laptop-code"
      }
    ];

    sampleCourses.forEach(course => {
      this.createCourse(course);
    });
  }

  // Initialize sample data for fees
  private initializeFees(): void {
    const sampleFees: InsertFee[] = [
      {
        title: "Junior Secondary",
        subtitle: "Grades 7-9",
        amount: 2500,
        period: "year",
        features: [
          "All core academic subjects",
          "Textbooks and learning materials",
          "Access to library and computer lab",
          "Basic extracurricular activities",
          "School uniform (initial set)"
        ],
        isPopular: false
      },
      {
        title: "Senior Secondary",
        subtitle: "Grades 10-12",
        amount: 3200,
        period: "year",
        features: [
          "All core academic subjects",
          "Advanced science lab sessions",
          "Career counseling and university preparation",
          "Extended library and computer access",
          "School uniform (initial set)",
          "Educational field trips"
        ],
        isPopular: true
      },
      {
        title: "Boarding Option",
        subtitle: "Additional Fee",
        amount: 1800,
        period: "year",
        features: [
          "Accommodation in school dormitory",
          "Three nutritious meals daily",
          "Evening supervised study sessions",
          "Weekend recreational activities",
          "24-hour supervision and security"
        ],
        isPopular: false
      }
    ];

    sampleFees.forEach(fee => {
      this.createFee(fee);
    });
  }

  // Initialize sample data for gallery
  private initializeGallery(): void {
    const sampleGallery: InsertGallery[] = [
      {
        title: "Science Laboratory",
        description: "Students conducting science experiments",
        imageUrl: "https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Modern Library",
        description: "Our well-stocked library provides resources for research and quiet study",
        imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Interactive Classrooms",
        description: "Engaging learning environments with modern teaching methods",
        imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Chemistry Lab",
        description: "Well-equipped facilities for practical chemistry experiments",
        imageUrl: "https://images.unsplash.com/photo-1596496181871-9681eacf9764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Campus Overview",
        description: "Our beautiful campus provides a conducive learning environment",
        imageUrl: "https://images.unsplash.com/photo-1613896527026-f195d5c818ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Collaborative Learning",
        description: "Students working together on research projects",
        imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Computer Technology",
        description: "Modern computer labs for digital literacy and programming",
        imageUrl: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Biology Studies",
        description: "Learning about life sciences through microscopic analysis",
        imageUrl: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
      },
      {
        title: "Reading Program",
        description: "Our literacy program encourages a lifelong love of reading",
        imageUrl: "https://pixabay.com/get/gd9e4f3bce7af756720f6becc54041c758d75cfcc3ed800f4b8497b96d2ddd35bb119112757be7ade15d4752997171e1c4b679a175d031b7e94532c16a145516c_1280.jpg"
      }
    ];

    sampleGallery.forEach(item => {
      this.createGalleryItem(item);
    });
  }
}

export const storage = new MemStorage();
