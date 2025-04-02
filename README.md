Here’s a detailed **README** for your GitHub repository based on the full architecture we’ve outlined:

---

# **Hotel Management System (PMS + CRM + TRM + Smart TV Interface)**

A modular hotel management system consisting of the **Property Management System (PMS)**, **Customer Relationship Management (CRM)**, **Technical Room Management (TRM)**, and a **Smart TV Interface** for managing rooms and guest services. The system is designed to run in **Docker containers** with the option for **on-premise** or **cloud** deployment using **Docker Compose** and **Kubernetes**.

## **Table of Contents**
- [Overview](#overview)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Modules](#modules)
  - [CRM](#crm)
  - [PMS](#pms)
  - [TRM (Technical Room Management)](#trm-technical-room-management)
  - [Smart TV Interface](#smart-tv-interface)
- [Database Schema](#database-schema)
- [Docker Setup](#docker-setup)
- [Getting Started](#getting-started)
- [Security](#security)
- [Future Features](#future-features)
- [License](#license)

---

## **Overview**

This hotel management system includes a **modular architecture** designed to handle hotel operations efficiently:

- **PMS (Property Management System)**: Manages room bookings, guest data, and room status.
- **CRM (Customer Relationship Management)**: Stores guest contact details, preferences, and booking history.
- **TRM (Technical Room Management)**: Controls smart room devices (e.g., thermostats, lighting) using **Home Assistant**.
- **Smart TV Interface**: Provides hotel guests with a personalized interface to interact with hotel services and room data.

The system is built with **Docker** for containerization, allowing it to run in isolated environments. It is designed for both **on-premise** and **cloud** deployment.

---

## **Architecture**

### **1. System Modules**
- **PMS**: Manages hotel room reservations, room status, and guest-related data.
- **CRM**: Stores detailed guest information, such as contact info, preferences, and check-in history.
- **TRM**: Manages and controls in-room smart devices like thermostats, lights, and sensors using **Home Assistant**.
- **Smart TV Interface**: Provides an interface on **TizenOS-based Smart TVs** to interact with hotel services, room settings, and more.

### **2. Data Flow**
- The **CRM** module stores guest data, while **PMS** manages reservations and room statuses.
- The **TRM** module interacts with **Home Assistant**'s API to control smart devices in individual rooms.
- The **Smart TV Interface** allows guests to manage room settings and view services directly on the TV.

### **3. PostgreSQL Database**
A central **PostgreSQL database** is shared between all modules. It stores:
- **Guest Information** (CRM)
- **Room Information** (PMS)
- **Room Device Data** (TRM)

Each module interacts with the database through **API calls** and **SQL queries**.

---

## **Technology Stack**

- **Backend**: 
  - **Node.js** (NestJS for CRM and PMS modules)
  - **TypeORM** for ORM and database interaction
  - **PostgreSQL** for the database
  
- **TRM (Technical Room Management)**:
  - **Home Assistant API** for device management (thermostats, lights, sensors)

- **Frontend (Smart TV Interface)**:
  - **Tizen OS** for Smart TV app development (Custom interface for hotel rooms)

- **Containerization**:
  - **Docker** for module containerization
  - **Docker Compose** for managing multi-container setups
  - Optionally, **Kubernetes** for large-scale deployments

---

## **Modules**

### **CRM (Customer Relationship Management)**
- Stores guest data such as **name, email, phone number**, preferences, and check-in history.
- Provides endpoints to fetch guest data for integration with PMS and other hotel services.
- **Interacts with PMS** to manage reservations and guest-related operations.

### **PMS (Property Management System)**
- Manages room bookings, check-ins, and check-outs.
- Updates room status (available, occupied, cleaned, etc.) and communicates with **CRM** to retrieve guest preferences.
- Sends room-specific configurations (e.g., temperature settings) to **TRM**.

### **TRM (Technical Room Management)**
- **Manages smart devices** in the room via **Home Assistant API**.
  - Devices include thermostats, lights, smart sensors, and climate control.
- **Provides real-time data** (e.g., room temperature, humidity, occupancy status) for room management.
- **Custom web interface** for controlling in-room devices.
- **Low priority** for now, to be implemented once foundational features are complete.

### **Smart TV Interface**
- **TizenOS-based application** for Smart TVs in guest rooms.
- **Displays hotel services**, guest data (e.g., room information), and allows guests to control room settings.
- Integrates with **CRM** and **PMS** to provide personalized experiences.

---

## **Database Schema**

The system uses a central **PostgreSQL database** with the following key tables:
- **Guests**: Stores guest information (name, email, phone, etc.).
- **Rooms**: Stores room data (number, type, availability).
- **Reservations**: Stores booking information (check-in/out dates, room type).
- **Devices**: Stores information on in-room devices (thermostats, lights, etc.).
- **RoomStatus**: Stores real-time room data (temperature, occupancy, etc.).

---

## **Docker Setup**

The system uses **Docker** to run each module in its own container:
- **CRM Module**: Node.js container running the NestJS backend.
- **PMS Module**: Node.js container for managing reservations and room data.
- **TRM Module**: Container communicating with **Home Assistant** API to control room devices.
- **PostgreSQL**: Central database container.
- **pgAdmin**: Web-based database management tool for managing PostgreSQL.

The system uses **Docker Compose** to handle multi-container deployments.

---

## **Getting Started**

To get started with the development environment, follow these steps:

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-repository/hotel-management.git
cd hotel-management
```

### 2. **Build and Start Containers**
Make sure you have **Docker** and **Docker Compose** installed, then run:
```bash
docker-compose up --build
```

This will build and start the **CRM**, **PMS**, **TRM**, **PostgreSQL**, and **pgAdmin** containers.

### 3. **Access the Services**
- **CRM**: http://localhost:8000
- **pgAdmin**: http://localhost:5050 (default user: `admin`, password: `admin`)
- **Smart TV Interface**: Will be developed for **TizenOS** (currently under planning).

---

## **Security**

- **Authentication**: Ensure secure authentication and authorization for each module to restrict access.
- **API Security**: Use tokens or OAuth for secure communication between modules.
- **Docker Security**: Keep Docker images updated and use best practices for container security.

---

## **Future Features**

- **TRM (Technical Room Management)**: Complete integration with **Home Assistant** to control room devices.
- **Advanced Guest Features**: Add guest-specific features like room service orders, in-room entertainment, etc.
- **Mobile App**: Develop a mobile app for guests to control room settings remotely.
- **AI and Automation**: Implement smart automation features, like temperature adjustments based on guest preferences or weather.

---

## **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
