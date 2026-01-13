# ACS Dashboard - Production Deployment Guide

## Prerequisites
- SQL Server 2022 or later
- Existing `cms` database with tables: HA_TRANSIT, Employee, Card, SbiSiteBehavior, AC_BEHAVIOR, AC_BEHAVIOR_TERMINALS, AC_VTERMINAL, MG_TYPE_TRANSIT_STATUS
- SQL user with CREATE VIEW permissions

## Deployment Steps

### 1. Database Setup (One-Time)

Run the production deployment script on your production SQL Server:

```bash
sqlcmd -S <your-server-ip> -U sa -P <password> -i production_deployment.sql
```

Or using SQL Server Management Studio:
1. Connect to your production database server
2. Open `sql_backup/production_deployment.sql`
3. Execute the script

This creates 3 views:
- `v_TransitLog` - Transit logs with names and door descriptions
- `v_CardholderDetails` - Cardholder info with grouped cards and behaviors
- `v_BehaviorDoors` - Behavior-to-door mappings

**These views persist in the database and only need to be created once.**

### 2. Application Configuration

Update your backend `.env` file with production database connection:

```env
DB_SERVER=<your-production-db-ip>
DB_USER=acs_reader
DB_PASSWORD=<your-password>
DB_NAME=cms
PORT=3000
```

### 3. Deploy Application

**Option A: Docker Compose (Recommended)**
```bash
# Build images
docker compose build

# Start services (without SQL container)
docker compose up -d backend frontend
```

**Option B: Manual Deployment**
```bash
# Backend
cd server
npm install
npm start

# Frontend
cd client
npm install
npm run build
# Serve the dist folder with nginx or similar
```

## Verification

After deployment, verify the views are working:

```sql
-- Check views exist
SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS 
WHERE TABLE_NAME IN ('v_TransitLog', 'v_CardholderDetails', 'v_BehaviorDoors');

-- Test transit log
SELECT TOP 5 * FROM v_TransitLog ORDER BY EventTime DESC;

-- Test cardholders
SELECT TOP 5 * FROM v_CardholderDetails;

-- Test behavior doors
SELECT * FROM v_BehaviorDoors WHERE BEHAVIOR_ID = 1;
```

## Important Notes

✅ **Views persist** - Once created, they remain in the database even after server restarts
✅ **No recreation needed** - Views are database objects, not application code
✅ **LAN connection** - Your application connects to the database via LAN, views work the same way
⚠️ **Backup views** - Include view definitions in your database backup strategy

## Troubleshooting

**Issue**: Views not found after deployment
- **Solution**: Re-run `production_deployment.sql`

**Issue**: Permission denied errors
- **Solution**: Ensure the database user has SELECT permissions on all tables and views

**Issue**: Empty results from views
- **Solution**: Verify source tables (HA_TRANSIT, Employee, etc.) contain data
