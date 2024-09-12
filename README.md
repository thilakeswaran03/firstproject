# firstproject

## Detailed Problem Statement for Web Project
## Project Title: Eligibility Checker for subjects
## Project Overview:
The goal of this web project is to create a system that allows students and mentors to check the eligibility of a subject for online certification based on predefined criteria stored in an Excel sheet. The web application will feature two distinct user interfaces: one for students and one for mentors. The backend will determine whether a subject is eligible by comparing the subject's details with the rules in the Excel sheet, where non-professional core subjects are considered eligible, and professional core subjects are not.

---

## Key Features:
### 1. Student Interface:
Purpose: To allow students to enter their details and check their eligibility for a specific subject.
Input Fields:
Registration Number (Reg. No.).
Subject Mandate (selected from a dropdown list).
Output:
A simple message indicating whether the student is eligible for the subject or not (based on the rules set in the backend Excel sheet).

### 2. Mentor Interface:
Purpose: To allow mentors to check and verify student eligibility for a particular subject based on the same data and criteria used by students.
Input Fields:
Registration Number (Reg. No.).
Subject Mandate.
Output:
Eligibility status of the student for the subject.

---

## Backend Requirements:
Excel Sheet Integration:
The backend will use an Excel sheet containing the subject mandate rules and regulations for each year.
The sheet will contain details such as:
Subject Code.
Year of study.
Eligibility Criteria (e.g., professional couse papers are not allowed.).
The backend will process input data from the frontend, compare it with the mandates in the Excel sheet, and return an eligibility result.

---

## Technical Stack:
### 1. Frontend:
Languages: HTML, CSS, JavaScript (React/Vanilla).
UI/UX: Clean user interface for entering details, submitting forms, and displaying eligibility results.
### 2. Backend:
Server-Side Languages: Node.js or Python (Django/Flask).
Excel Integration: Use libraries like xlsx (for Node.js) or openpyxl (for Python) to interact with the Excel file and check the student's eligibility.
### 3. Database/Storage:
Excel Sheet: The Excel sheet will act as the backend data source to store all mandates and rules for subject eligibility.

---

## Flow of the Application:
### 1. Frontend:
Student or Mentor opens the web application and chooses their respective interface.
Inputs details (Reg No, Subject).
Clicks on "Check Eligibility" button.
### 2. Backend:
Backend receives input data.
Extracts the corresponding subject mandate information from the Excel sheet.
Compares the entered details with the mandate rules.
Returns whether the subject is eligible or not for online certification.
### 3. Frontend:
Displays a message indicating the eligibility status.

---

### Potential Enhancements:
Admin Dashboard: Allow mentors/admins to upload or update the Excel sheet with new subject mandates.
Notifications: Notify students of missing requirements or suggest actions to become eligible (e.g., completing prerequisite subjects).
Authentication: Add login functionality for students and mentors to track and manage eligibility checks securely.

---

### Expected Outcome:
The system will provide an easy-to-use, web-based solution to check subject eligibility for online certification based on a predefined Excel sheet. Both students and mentors can use this tool to ensure proper subject enrollment without manual validation.

