module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/Mus865/s3-backend.git",
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/npm",
      "@semantic-release/github" 
    ]
  };