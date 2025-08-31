# Strapi CMS Configuration Guide for Bank Website

## Table of Contents
1. [Prerequisites & Installation](#prerequisites--installation)
2. [Initial Setup](#initial-setup)
3. [Internationalization Setup](#internationalization-setup)
4. [Content Type Configuration](#content-type-configuration)
5. [Media Library Organization](#media-library-organization)
6. [API Permissions](#api-permissions)
7. [Sample Content Setup](#sample-content-setup)
8. [Frontend Integration](#frontend-integration)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites & Installation

### System Requirements
| Requirement | Version | Notes |
|-------------|---------|--------|
| Node.js | 14, 16, or 18 | Download from nodejs.org |
| Terminal | Any | Command Prompt, PowerShell, or Terminal |
| Time Required | ~15 minutes | For complete setup |

### Installation Process

1. **Open Terminal/Command Prompt**
2. **Run Installation Command:**
   ```bash
   npx create-strapi-app@latest bank-cms
   ```

3. **Configuration Choices:**
   | Question | Answer | Reason |
   |----------|---------|---------|
   | "Would you like to use a template?" | **No** | Custom setup for bank needs |
   | "Choose your installation type" | **Quickstart (recommended)** | Uses SQLite, no DB setup needed |

4. **Wait for Installation** (5-10 minutes)
5. **Browser will auto-open** to `http://localhost:1337/admin/auth/register-admin`

---

## Initial Setup

### Create Admin User
Fill in the admin registration form:

| Field | Example | Required |
|-------|---------|----------|
| First Name | John | ✅ |
| Last Name | Doe | ✅ |
| Email | admin@yourbank.com | ✅ |
| Password | SecurePassword123! | ✅ |

Click **"Ready to start"** button to complete setup.

---

## Internationalization Setup

### Enable Multiple Languages

**Step 1: Access Settings**
- Click **"Settings"** (gear icon) in left sidebar
- Under "Global Settings" → Click **"Internationalization"**

**Step 2: Add Nepali Language**
| Action | Selection |
|--------|-----------|
| Click | "Add new locale" button |
| Language | Nepali (ne) |
| Save | Click blue "Save" button |

**Step 3: Configure Fallback**
| Setting | Value | Purpose |
|---------|-------|---------|
| Advanced Settings Tab | Click to open | Access fallback options |
| Default locale fallback | Toggle ON (blue) | Auto-fallback to English |

---

## Content Type Configuration

### 1. About Us Settings (Single Type)

**Basic Information:**
| Field | Value |
|-------|-------|
| Type | Single Type |
| Display Name | About Us Setting |
| API UID | Auto-generated |

**Fields Configuration:**

| Field Name | Type | Localization | Required | Notes |
|------------|------|--------------|----------|--------|
| mission | Rich text - Block | ✅ | ❌ | Company mission |
| vision | Rich text - Block | ✅ | ❌ | Company vision |
| values | Rich text - Block | ✅ | ❌ | Company values |
| aboutUsDescription | Rich text - Block | ✅ | ❌ | Main description |
| aboutUsImage | Single media (Images) | ❌ | ❌ | About us banner |

### 2. Person Collection (Collection Type)

**Basic Information:**
| Field | Value |
|-------|-------|
| Type | Collection Type |
| Display Name | Person |

**Fields Configuration:**

| Field Name | Type | Localization | Required | Default | Notes |
|------------|------|--------------|----------|---------|--------|
| name | Short text | ✅ | ✅ | - | Person's full name |
| position | Short text | ✅ | ✅ | - | Job title |
| department | Short text | ✅ | ❌ | - | Department/division |
| bio | Rich text - Block | ✅ | ❌ | - | Biography |
| email | Email | ❌ | ❌ | - | Contact email |
| phone | Short text | ❌ | ❌ | - | Phone number |
| image | Single media (Images) | ❌ | ❌ | - | Profile photo |
| order | Integer | ❌ | ❌ | 0 | Display order |
| personType | Enumeration | ❌ | ✅ | - | See values below |

**PersonType Values:**
- `boardMember`
- `managementTeam`
- `corporateTeam`
- `committeeMember`

### 3. Organization Structure (Single Type)

| Field Name | Type | Localization | Required | Notes |
|------------|------|--------------|----------|--------|
| title | Short text | ✅ | ✅ | Structure title |
| description | Rich text - Block | ✅ | ❌ | Description |
| structureImage | Single media (Images) | ❌ | ❌ | Org chart image |

### 4. Committee (Collection Type)

| Field Name | Type | Localization | Required | Notes |
|------------|------|--------------|----------|--------|
| name | Short text | ✅ | ✅ | Committee name |
| description | Rich text - Block | ✅ | ❌ | Committee description |
| members | Relation | ❌ | ❌ | Many-to-many with Person |

### 5. Service Category (Collection Type)

| Field Name | Type | Localization | Required | Default | Notes |
|------------|------|--------------|----------|---------|--------|
| title | Short text | ✅ | ✅ | - | Category name |
| description | Rich text - Block | ✅ | ❌ | - | Category description |
| icon | Single media (Images) | ❌ | ❌ | - | Category icon |
| slug | UID (based on title) | ❌ | ❌ | - | URL-friendly name |
| order | Integer | ❌ | ❌ | 0 | Display order |

### 6. Loan Product (Collection Type)

| Field Name | Type | Localization | Required | Default | Notes |
|------------|------|--------------|----------|---------|--------|
| name | Short text | ✅ | ✅ | - | Product name |
| volume | Short text | ✅ | ❌ | - | Loan volume |
| rate | Short text | ❌ | ❌ | - | Interest rate |
| serviceCharge | Short text | ❌ | ❌ | - | Service charges |
| term | Short text | ✅ | ❌ | - | Loan term |
| order | Integer | ❌ | ❌ | 0 | Display order |

### 7. Savings Product (Collection Type)

| Field Name | Type | Localization | Required | Default | Notes |
|------------|------|--------------|----------|---------|--------|
| name | Short text | ✅ | ✅ | - | Product name |
| interestRate | Short text | ❌ | ❌ | - | Interest rate |
| order | Integer | ❌ | ❌ | 0 | Display order |

### 8. Service Feature Component

**Create Component First:**
| Setting | Value |
|---------|-------|
| Type | Component |
| Display Name | Service Feature |
| Category | Service Components (new) |

**Component Fields:**
| Field Name | Type | Localization | Required | Notes |
|------------|------|--------------|----------|--------|
| title | Short text | ✅ | ✅ | Feature title |
| description | Long text | ✅ | ❌ | Feature description |
| icon | Single media (Images) | ❌ | ❌ | Feature icon |

### 9. Remittance Service (Single Type)

| Field Name | Type | Localization | Required | Notes |
|------------|------|--------------|----------|--------|
| title | Short text | ✅ | ✅ | Service title |
| description | Rich text - Block | ✅ | ❌ | Service description |
| partnerImages | Multiple media (Images) | ❌ | ❌ | Partner logos |
| features | Repeatable Component | ❌ | ❌ | Service Feature component |

### 10. Member Welfare Service (Single Type)

| Field Name | Type | Localization | Required | Notes |
|------------|------|--------------|----------|--------|
| title | Short text | ✅ | ✅ | Service title |
| description | Rich text - Block | ✅ | ❌ | Service description |
| welfareServices | Repeatable Component | ❌ | ❌ | Service Feature component |

---

## Media Library Organization

### Folder Structure Setup

Create the following folders in Media Library:

| Folder Name | Purpose | Content Types |
|-------------|---------|---------------|
| **about** | About section media | About Us images, person photos |
| **services** | Service-related media | Service icons, banners |
| **people** | People photos | Profile pictures |
| **icons** | Icons and symbols | UI icons, service icons |

**Steps:**
1. Go to **Media Library**
2. Click **"+ Add new folder"**
3. Create each folder listed above

---

## API Permissions

### Public API Access Configuration

**Navigation:** Settings → Users & Permissions Plugin → Roles → Public

**Required Permissions for each Content Type:**

| Content Type | find | findOne | Notes |
|--------------|------|---------|--------|
| About Us Setting | ✅ | ✅ | Public about info |
| Person | ✅ | ✅ | Staff directory |
| Organization Structure | ✅ | ✅ | Org chart |
| Committee | ✅ | ✅ | Committee info |
| Service Category | ✅ | ✅ | Service listings |
| Loan Product | ✅ | ✅ | Loan products |
| Savings Product | ✅ | ✅ | Savings products |
| Remittance Service | ✅ | ✅ | Remittance info |
| Member Welfare Service | ✅ | ✅ | Welfare info |
| **Files Upload** | ✅ | ✅ | Media access |

**Important:** Click **"Save"** after configuring each content type.

---

## Sample Content Setup

### Adding a Sample Board Member

**Navigation:** Content Manager → People → Create new entry

| Field | Sample Value |
|-------|--------------|
| Name | John Smith |
| Position | Board Member |
| Department | Board of Directors |
| Bio | Experienced financial professional with 20+ years... |
| Email | john.smith@example.com |
| Phone | +977 1234567890 |
| Order | 1 |
| Person Type | boardMember |

**Language Steps:**
1. Fill English content
2. Switch to "Nepali (ne)" in right sidebar
3. Add translated content
4. **Save** and **Publish**

### Adding About Us Content

**Navigation:** Content Manager → About Us Setting

| Field | Action |
|-------|--------|
| Mission | Add rich text content in both languages |
| Vision | Add rich text content in both languages |
| Values | Add rich text content in both languages |
| About Us Description | Add main description |
| About Us Image | Upload company image |

### Adding Service Category

**Navigation:** Content Manager → Service Categories → Create new entry

| Field | Sample Value |
|-------|--------------|
| Title | Loan Services |
| Description | Comprehensive loan solutions for all needs |
| Order | 1 |

**Add translations and publish**

---

## Frontend Integration

### Environment Configuration

Create `.env.local` file:
```env
REACT_APP_STRAPI_API_URL=http://localhost:1337
```

### API Service Structure

```typescript
// Base API configuration
const API_URL = process.env.REACT_APP_STRAPI_API_URL || 'http://localhost:1337';

// Common API patterns for different content types
```

### Common API Endpoints

| Content Type | GET Endpoint | Filter Example |
|--------------|--------------|----------------|
| About Us | `/api/about-us-setting?locale=${locale}&populate=*` | - |
| Board Members | `/api/people?filters[personType][$eq]=boardMember` | By person type |
| Service Categories | `/api/service-categories?locale=${locale}&populate=*&sort=order:asc` | Sorted by order |
| Loan Products | `/api/loan-products?locale=${locale}&sort=order:asc` | Sorted by order |

### Media URL Helper

```typescript
export const getStrapiMediaUrl = (url: string | null) => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${API_URL}${url}`;
};
```

---

## Troubleshooting

### Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| API returns 403 | Missing permissions | Check Public role permissions |
| Images not loading | Incorrect URL | Use getStrapiMediaUrl helper |
| Localization not working | Locale not set | Ensure locale parameter in API calls |
| Content not updating | Cache issues | Hard refresh browser |
| Server not starting | Port conflict | Check if port 1337 is available |

### Debug Commands

```bash
# Check Strapi version
npm list strapi

# Clear cache
npm run strapi clear-cache

# Restart development server
npm run develop
```

### API Testing

Test your APIs using these URLs:
- About Us: `http://localhost:1337/api/about-us-setting?populate=*`
- People: `http://localhost:1337/api/people?populate=*`
- Service Categories: `http://localhost:1337/api/service-categories?populate=*`

---

## Quick Reference

### Field Types Quick Guide

| Strapi Type | Use Case | Localizable |
|-------------|----------|-------------|
| Short text | Names, titles | ✅ |
| Long text | Descriptions | ✅ |
| Rich text - Block | Formatted content | ✅ |
| Email | Email addresses | ❌ |
| Number (Integer) | Order, counts | ❌ |
| Media (Single) | Images, files | ❌ |
| Media (Multiple) | Gallery, attachments | ❌ |
| Enumeration | Fixed choices | ❌ |
| UID | URL-friendly IDs | ❌ |
| Relation | Connect content | ❌ |

### Content Manager Actions

| Action | Purpose |
|--------|---------|
| **Save** | Save draft without publishing |
| **Publish** | Make content publicly available |
| **Unpublish** | Remove from public API |
| **Delete** | Permanently remove content |

---

*This guide provides step-by-step instructions for manually configuring Strapi CMS for a bank website. Follow each section carefully and refer to the troubleshooting section if you encounter any issues.*
