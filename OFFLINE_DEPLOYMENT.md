# Offline (Air-Gapped) Production Deployment Guide

Since your production environment has **no internet access**, you cannot use `docker compose build` there because it tries to download base images (Node, Nginx) from Docker Hub.

Instead, you must use the **"Build Here, Ship There"** strategy.

## Strategy: Docker Save & Load

You will build the full Docker images on your **Internet-connected Dev PC**, save them to files, transfer them to Production, and load them.

### Phase 1: On Your Dev PC (With Internet)

1.  **Build the Images**
    Ensure your `docker-compose.yml` is ready and run:
    ```bash
    wsl docker compose build
    ```
    *Note: If you have build issues on Dev PC network, use the "Manual File Transfer" method below.*

2.  **Save Images to Files**
    Export the built images to `.tar` archives:
    ```bash
    # Create a directory for artifacts
    mkdir -p deploy_artifacts

    # Save Frontend Image
    wsl docker save -o deploy_artifacts/acs-frontend.tar acs-frontend

    # Save Backend Image
    wsl docker save -o deploy_artifacts/acs-backend.tar acs-backend

    # Save SQL Server Image (if needed on prod, usually you just need the app images)
    wsl docker save -o deploy_artifacts/mssql.tar mcr.microsoft.com/mssql/server:2022-latest
    ```

3.  **Prepare Transfer Package**
    Copy these files to your USB drive or secure transfer medium:
    *   `deploy_artifacts/` folder (containing the .tar files)
    *   `docker-compose.yml`
    *   `server/.env` (Production configuration)
    *   `sql_backup/production_deployment.sql` (For DB setup)

### Phase 2: On Production Server (No Internet)

1.  **Transfer Files**
    Copy the files from USB to a folder (e.g., `/opt/acs-dashboard`).

2.  **Load Images into Docker**
    Import the images from the .tar files:
    ```bash
    docker load -i deploy_artifacts/acs-frontend.tar
    docker load -i deploy_artifacts/acs-backend.tar
    docker load -i deploy_artifacts/mssql.tar
    ```

3.  **Run Application**
    Start the services using the existing images (no build needed):
    ```bash
    docker compose up -d
    ```

---

## Alternative: Manual Binary Deployment (No Docker on Prod?)

If you aren't using Docker on production, or prefer copying files directly:

**1. Frontend**
*   **Dev PC**: Run `npm run build` in `client/` folder.
*   **Transfer**: Copy the `client/dist` folder to Production.
*   **Prod**: Serve `dist` folder using Nginx, Apache, or IIS.

**2. Backend**
*   **Dev PC**: Run `npm install` (to get node_modules).
*   **Transfer**: Copy the entire `server/` folder (excluding .git) to Production.
*   **Prod**: Install Node.js offline (via MSI/binary) and run `node server.js`.

---

## Summary Checklist for You

1.  **Fix Build on Dev PC**: ensure `docker compose build` works (or `npm run build` works).
2.  **Export**: `docker save ...`
3.  **Transfer**: USB/Lan Copy
4.  **Import**: `docker load ...`
5.  **Run**: `docker compose up -d`
