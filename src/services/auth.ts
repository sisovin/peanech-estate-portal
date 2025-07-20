import { User, UserRole, LoginCredentials, RegisterData } from "@/types/user";

// Mock authentication service - replace with real API calls
class AuthService {
  private users: User[] = [
    {
      id: "1",
      email: "admin@peanechestate.com",
      name: "Admin User",
      role: UserRole.ADMIN,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      email: "agent@peanechestate.com",
      name: "Agent User",
      role: UserRole.AGENT,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=agent",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      email: "user@peanechestate.com",
      name: "Regular User",
      role: UserRole.VISITOR,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async login(credentials: LoginCredentials): Promise<User> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = this.users.find((u) => u.email === credentials.email);

    if (!user) {
      throw new Error("User not found");
    }

    // In a real app, you'd verify the password hash
    if (credentials.password !== "password123") {
      throw new Error("Invalid password");
    }

    // Store user in localStorage for persistence
    localStorage.setItem("currentUser", JSON.stringify(user));

    return user;
  }

  async register(data: RegisterData): Promise<User> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user already exists
    const existingUser = this.users.find((u) => u.email === data.email);
    if (existingUser) {
      throw new Error("User already exists with this email");
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      role: data.role,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.name}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(newUser);

    // Store user in localStorage for persistence
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    return newUser;
  }

  async logout(): Promise<void> {
    localStorage.removeItem("currentUser");
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem("currentUser");
    if (!userStr) return null;

    try {
      const user = JSON.parse(userStr);
      // Convert date strings back to Date objects
      user.createdAt = new Date(user.createdAt);
      user.updatedAt = new Date(user.updatedAt);
      return user;
    } catch {
      return null;
    }
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
}

export const authService = new AuthService();
