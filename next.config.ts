import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["pg", "sqlite3", "sequelize"],
};

export default nextConfig;
