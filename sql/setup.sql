-- Create Database (if not exists)
CREATE DATABASE IF NOT EXISTS dr_chandrahas_db;
USE dr_chandrahas_db;

-- Patients Table
CREATE TABLE IF NOT EXISTS patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT,
    weeks_pregnant INT DEFAULT 0,
    status VARCHAR(100) DEFAULT 'Healthy',
    next_appointment DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Symptom Logs Table
CREATE TABLE IF NOT EXISTS symptom_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    symptom VARCHAR(255),
    intensity ENUM('None', 'Low', 'Medium', 'High') DEFAULT 'None',
    notes TEXT,
    log_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE
);

-- Vital Stats Table
CREATE TABLE IF NOT EXISTS vital_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    weight_kg DECIMAL(5,2),
    bp_systolic INT,
    bp_diastolic INT,
    fetal_movements INT,
    log_date DATE,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE
);

-- Insert Mock Data
INSERT INTO patients (name, age, weeks_pregnant, status, next_appointment) VALUES 
('Lakshmi Devi', 28, 24, 'Healthy', '2026-03-05'),
('Padma Rao', 31, 12, 'Nausea reported', '2026-03-08'),
('Anjali Reddy', 26, 36, 'Final trimester', '2026-03-04');

INSERT INTO symptom_logs (patient_id, symptom, intensity, notes, log_date) VALUES 
(1, 'Mild Fatigue', 'Low', 'Likely due to increased activity.', '2026-03-01'),
(1, 'Back Pain', 'Medium', 'Recommended prenatal yoga.', '2026-02-25');
