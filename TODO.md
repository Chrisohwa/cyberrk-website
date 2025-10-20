# Dockerization Plan for Cyberrk Website

## Steps to Complete
- [x] Create Dockerfile for multi-stage build
- [x] Create .dockerignore file to exclude unnecessary files
- [x] Update README.md with Docker build and run instructions
- [x] Build the Docker image locally (Docker Desktop started but encountering API version errors)
- [ ] Test running the Docker container (Docker Desktop API issues need resolution)
- [ ] Provide instructions for pushing image to registry and hosting on Truehost

## Notes
- Using Node.js Alpine images for smaller size
- Multi-stage build: build stage and production stage
- Expose port 3000
- Handle environment variables if needed (e.g., for email setup)
- Docker Desktop is running but has API version compatibility issues
